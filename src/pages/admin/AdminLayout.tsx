import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Image, Mail, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const AdminLayout = () => {
  const { signOut } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Portfolio', href: '/admin/portfolio', icon: Image },
    { name: 'Submissions', href: '/admin/submissions', icon: Mail },
  ];

  const isActive = (href: string) => {
    if (href === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-card border-b flex items-center justify-between px-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="flex-shrink-0"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-base font-playfair font-bold">Admin Panel</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-card border-r transition-transform duration-300 z-40 overflow-hidden ${
          isSidebarOpen ? 'w-64' : 'w-0 lg:w-20'
        } ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-4 lg:p-6 border-b">
          <h1 className={`text-xl lg:text-2xl font-playfair font-bold transition-opacity duration-300 ${!isSidebarOpen && 'lg:opacity-0 lg:hidden'}`}>
            Admin Panel
          </h1>
        </div>

        <nav className="p-2 lg:p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)}
              className={`flex items-center space-x-3 px-3 lg:px-4 py-2.5 lg:py-3 rounded-lg transition-all hover:bg-accent ${
                isActive(item.href) ? 'bg-accent text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className={`whitespace-nowrap transition-opacity duration-300 ${!isSidebarOpen && 'lg:opacity-0 lg:hidden'}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-2 lg:p-4 border-t">
          <Button
            variant="ghost"
            onClick={signOut}
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 px-3 lg:px-4"
          >
            <LogOut className="h-5 w-5 mr-3 flex-shrink-0" />
            <span className={`whitespace-nowrap transition-opacity duration-300 ${!isSidebarOpen && 'lg:opacity-0 lg:hidden'}`}>
              Logout
            </span>
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main
        className={`min-h-screen transition-all duration-300 pt-14 lg:pt-0 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'
        }`}
      >
        <div className="p-4 sm:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
