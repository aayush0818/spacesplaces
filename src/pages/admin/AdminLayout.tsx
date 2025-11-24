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
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-card border-b flex items-center px-4 z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="ml-3 text-lg font-playfair font-bold">Admin Panel</h1>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-card border-r transition-all duration-300 z-40 ${
          isSidebarOpen ? 'w-64' : 'w-0 lg:w-16'
        } ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-6 border-b">
          <h1 className={`text-2xl font-playfair font-bold transition-opacity ${!isSidebarOpen && 'lg:opacity-0'}`}>
            Admin Panel
          </h1>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => window.innerWidth < 1024 && setIsSidebarOpen(false)}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all hover:bg-accent ${
                isActive(item.href) ? 'bg-accent text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className={`transition-opacity ${!isSidebarOpen && 'lg:opacity-0 lg:hidden'}`}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <Button
            variant="ghost"
            onClick={signOut}
            className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span className={`transition-opacity ${!isSidebarOpen && 'lg:opacity-0 lg:hidden'}`}>
              Logout
            </span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 pt-16 lg:pt-0 ${
          isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'
        }`}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
