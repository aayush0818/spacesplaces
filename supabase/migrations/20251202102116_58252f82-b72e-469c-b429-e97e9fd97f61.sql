-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Admins can insert portfolio items" ON public.portfolio_items;
DROP POLICY IF EXISTS "Admins can update portfolio items" ON public.portfolio_items;
DROP POLICY IF EXISTS "Admins can delete portfolio items" ON public.portfolio_items;

-- Create new policies for any authenticated user
CREATE POLICY "Authenticated users can insert portfolio items"
ON public.portfolio_items FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update portfolio items"
ON public.portfolio_items FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete portfolio items"
ON public.portfolio_items FOR DELETE
TO authenticated
USING (true);