import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Send } from 'lucide-react';

const FloatingActions = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      {/* Free Consultation Button */}
      <div className="fixed bottom-6 left-4 sm:left-6 z-50">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-luxury rounded-full shadow-glow hover-lift hover:shadow-elegant transition-all duration-300 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
              <Phone className="mr-2 h-4 w-4" />
              Free Consultation
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="font-playfair text-xl">Get Free Consultation</DialogTitle>
            </DialogHeader>
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your name"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="Enter your phone"
                      type="tel"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input 
                      placeholder="Enter your email"
                      type="email"
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      rows={3}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    className="btn-luxury w-full group" 
                    type="submit"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Submit Request
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll contact you within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </div>

      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        <Button className="bg-[#25D366] hover:bg-[#128C7E] rounded-full p-3 sm:p-4 shadow-glow hover-lift hover:shadow-elegant transition-all duration-300" asChild>
          <a href="https://wa.me/+919699578902" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 175.216 175.552" className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current">
              <path d="M146.064 29.152C130.368 13.456 108.832 4.672 86.704 4.672c-44.256 0-80.224 35.968-80.224 80.224 0 14.144 3.696 27.936 10.736 40.048L6.64 170.88l47.248-12.384c11.696 6.384 24.864 9.744 38.384 9.744h.032c44.224 0 80.192-35.968 80.192-80.224 0-21.44-8.352-41.584-23.536-56.8l.064-.064zm-59.36 123.392h-.032c-11.968 0-23.712-3.216-33.968-9.296l-2.432-1.44-25.312 6.64 6.752-24.672-1.584-2.528c-6.688-10.624-10.208-22.912-10.208-35.632 0-36.832 29.984-66.816 66.848-66.816 17.856 0 34.656 6.944 47.296 19.552 12.64 12.608 19.584 29.408 19.584 47.264-.032 36.864-30.016 66.848-66.88 66.848l-.064.08z" />
              <path d="M125.888 103.264c-2.016-1.008-11.936-5.888-13.792-6.56s-3.2-1.008-4.544 1.008c-1.344 2.016-5.216 6.56-6.4 7.904-1.152 1.344-2.304 1.52-4.32.512s-8.416-3.104-16.032-9.888c-5.92-5.28-9.92-11.808-11.072-13.824s-.128-3.104.88-4.096c.912-.896 2.016-2.304 3.024-3.456s1.344-2.016 2.016-3.36c.672-1.344.336-2.528-.176-3.536s-4.544-10.944-6.224-14.976c-1.632-3.936-3.296-3.392-4.544-3.456-.176 0-2.688-.176-5.12-.176s-4.672.672-7.136 3.36c-2.464 2.688-9.408 9.2-9.408 22.432s9.632 26.016 10.976 27.808c1.344 1.792 18.944 28.928 45.888 40.576 6.4 2.784 11.392 4.448 15.296 5.696 6.432 2.048 12.288 1.76 16.912 1.072 5.152-.768 11.936-4.88 13.616-9.584s1.68-8.752.032-9.6c-1.648-.816-1.664-.832-3.68-1.84z" />
            </svg>
          </a>
        </Button>
      </div>
    </>
  );
};

export default FloatingActions;