import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Mail, Phone, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { format } from 'date-fns';

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: string;
}

const Submissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  useEffect(() => {
    filterSubmissions();
  }, [submissions, searchTerm, statusFilter]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions((data as ContactSubmission[]) || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: 'Error',
        description: 'Failed to load contact submissions',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filterSubmissions = () => {
    let filtered = submissions;

    if (searchTerm) {
      filtered = filtered.filter(
        (sub) =>
          sub.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          sub.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter((sub) => sub.status === statusFilter);
    }

    setFilteredSubmissions(filtered);
  };

  const updateStatus = async (id: string, status: 'read' | 'replied') => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Success',
        description: `Status updated to ${status}`,
      });

      fetchSubmissions();
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Error',
        description: 'Failed to update status',
        variant: 'destructive',
      });
    }
  };

  const openDetails = async (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    if (submission.status === 'new') {
      await updateStatus(submission.id, 'read');
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      new: 'default',
      read: 'secondary',
      replied: 'outline',
    };

    return (
      <Badge variant={variants[status] || 'default'}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-playfair font-bold">Contact Submissions</h1>
        <p className="text-muted-foreground mt-1">View and manage contact form submissions</p>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="border rounded-lg p-8 text-center text-muted-foreground">
          Loading submissions...
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="border rounded-lg p-8 text-center text-muted-foreground">
          No submissions found
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubmissions.map((submission) => (
                <TableRow
                  key={submission.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => openDetails(submission)}
                >
                  <TableCell>{getStatusBadge(submission.status)}</TableCell>
                  <TableCell className="font-medium">
                    {submission.first_name} {submission.last_name}
                  </TableCell>
                  <TableCell>
                    <a
                      href={`mailto:${submission.email}`}
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {submission.email}
                    </a>
                  </TableCell>
                  <TableCell>
                    <a
                      href={`tel:${submission.phone}`}
                      className="text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {submission.phone}
                    </a>
                  </TableCell>
                  <TableCell className="max-w-xs truncate">
                    {submission.message}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {format(new Date(submission.created_at), 'MMM dd, yyyy')}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                      {submission.status !== 'read' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateStatus(submission.id, 'read')}
                        >
                          Mark Read
                        </Button>
                      )}
                      {submission.status !== 'replied' && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateStatus(submission.id, 'replied')}
                        >
                          Mark Replied
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Contact Submission Details</DialogTitle>
            <DialogDescription>
              Submitted on {selectedSubmission && format(new Date(selectedSubmission.created_at), 'MMMM dd, yyyy')}
            </DialogDescription>
          </DialogHeader>
          {selectedSubmission && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Name</p>
                  <p className="text-base">
                    {selectedSubmission.first_name} {selectedSubmission.last_name}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Status</p>
                  {getStatusBadge(selectedSubmission.status)}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </p>
                <a
                  href={`mailto:${selectedSubmission.email}`}
                  className="text-base text-primary hover:underline"
                >
                  {selectedSubmission.email}
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1 flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  Phone
                </p>
                <a
                  href={`tel:${selectedSubmission.phone}`}
                  className="text-base text-primary hover:underline"
                >
                  {selectedSubmission.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Message</p>
                <p className="text-base whitespace-pre-wrap bg-muted p-4 rounded-lg">
                  {selectedSubmission.message}
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                {selectedSubmission.status !== 'read' && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      updateStatus(selectedSubmission.id, 'read');
                      setSelectedSubmission(null);
                    }}
                  >
                    Mark as Read
                  </Button>
                )}
                {selectedSubmission.status !== 'replied' && (
                  <Button
                    onClick={() => {
                      updateStatus(selectedSubmission.id, 'replied');
                      setSelectedSubmission(null);
                    }}
                  >
                    Mark as Replied
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Submissions;
