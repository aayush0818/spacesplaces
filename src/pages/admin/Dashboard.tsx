import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Image, Mail, TrendingUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    newSubmissions: 0,
    totalSubmissions: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [projectsResult, newSubmissionsResult, totalSubmissionsResult] = await Promise.all([
        supabase.from('portfolio_items').select('id', { count: 'exact', head: true }),
        supabase.from('contact_submissions').select('id', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('contact_submissions').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        totalProjects: projectsResult.count || 0,
        newSubmissions: newSubmissionsResult.count || 0,
        totalSubmissions: totalSubmissionsResult.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: stats.totalProjects,
      icon: Image,
      description: 'Portfolio items',
    },
    {
      title: 'New Submissions',
      value: stats.newSubmissions,
      icon: Mail,
      description: 'Unread contact forms',
    },
    {
      title: 'Total Submissions',
      value: stats.totalSubmissions,
      icon: TrendingUp,
      description: 'All-time submissions',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-playfair font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to your admin panel</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-4 rounded" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-3 w-32" />
              </CardContent>
            </Card>
          ))
        ) : (
          statCards.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
