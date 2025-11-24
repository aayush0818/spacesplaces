import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { z } from 'zod';
import SEO from '@/components/SEO';

const signUpSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const Auth = () => {
  const { user, signUp, signIn } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Sign up form
  const [signUpData, setSignUpData] = useState({ fullName: '', email: '', password: '' });
  const [signUpErrors, setSignUpErrors] = useState<any>({});
  
  // Sign in form
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signInErrors, setSignInErrors] = useState<any>({});

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignUpErrors({});
    
    const result = signUpSchema.safeParse(signUpData);
    if (!result.success) {
      const errors: any = {};
      result.error.errors.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      setSignUpErrors(errors);
      return;
    }

    setIsLoading(true);
    await signUp(signUpData.email, signUpData.password, signUpData.fullName);
    setIsLoading(false);
    setSignUpData({ fullName: '', email: '', password: '' });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSignInErrors({});
    
    const result = signInSchema.safeParse(signInData);
    if (!result.success) {
      const errors: any = {};
      result.error.errors.forEach((err) => {
        errors[err.path[0]] = err.message;
      });
      setSignInErrors(errors);
      return;
    }

    setIsLoading(true);
    await signIn(signInData.email, signInData.password);
    setIsLoading(false);
  };

  return (
    <>
      <SEO 
        title="Login | Spaces & Places"
        description="Sign in to access your account or create a new one."
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5 py-12 px-4">
        <Card className="w-full max-w-md shadow-elegant">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-playfair">Welcome</CardTitle>
            <CardDescription>Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email">Email</Label>
                    <Input
                      id="signin-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signInData.email}
                      onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                      disabled={isLoading}
                    />
                    {signInErrors.email && <p className="text-sm text-destructive">{signInErrors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signin-password">Password</Label>
                    <Input
                      id="signin-password"
                      type="password"
                      placeholder="••••••••"
                      value={signInData.password}
                      onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                      disabled={isLoading}
                    />
                    {signInErrors.password && <p className="text-sm text-destructive">{signInErrors.password}</p>}
                  </div>
                  
                  <Button type="submit" className="w-full btn-luxury" disabled={isLoading}>
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Full Name</Label>
                    <Input
                      id="signup-name"
                      type="text"
                      placeholder="John Doe"
                      value={signUpData.fullName}
                      onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                      disabled={isLoading}
                    />
                    {signUpErrors.fullName && <p className="text-sm text-destructive">{signUpErrors.fullName}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="your@email.com"
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      disabled={isLoading}
                    />
                    {signUpErrors.email && <p className="text-sm text-destructive">{signUpErrors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                      disabled={isLoading}
                    />
                    {signUpErrors.password && <p className="text-sm text-destructive">{signUpErrors.password}</p>}
                  </div>
                  
                  <Button type="submit" className="w-full btn-luxury" disabled={isLoading}>
                    {isLoading ? 'Creating account...' : 'Create Account'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Auth;
