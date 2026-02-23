-- Storage policies for craft-photos bucket

-- Allow authenticated users to upload to their own folder
CREATE POLICY "Users upload own photos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'craft-photos' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow authenticated users to update their own photos
CREATE POLICY "Users update own photos"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'craft-photos' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow authenticated users to delete their own photos
CREATE POLICY "Users delete own photos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'craft-photos' AND (storage.foldername(name))[1] = auth.uid()::text);

-- Allow public read access
CREATE POLICY "Public read craft photos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'craft-photos');
