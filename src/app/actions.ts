'use server';

import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addPost(formData: FormData) {
  const newPost = {
    id: Date.now().toString(),
    title: formData.get('title') as string,
    category: formData.get('category') as string,
    date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    excerpt: formData.get('excerpt') as string,
    content: formData.get('content') as string,
    imageUrl: formData.get('imageUrl') as string || '',
    applyUrl: formData.get('applyUrl') as string || ''
  };

  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileData);
  
  posts.unshift(newPost); // Add to beginning
  
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
  
  // Revalidate homepage to show new posts, then redirect back to home
  revalidatePath('/');
  redirect('/');
}

export async function deletePost(formData: FormData) {
  const id = formData.get('id') as string;

  const filePath = path.join(process.cwd(), 'data', 'posts.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(fileData);

  const updated = posts.filter((p: { id: string }) => p.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

  revalidatePath('/');
  revalidatePath('/jobs');
  revalidatePath('/internships');
  revalidatePath('/scholarships');
  redirect('/upload-jobs-secret');
}
