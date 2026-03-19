'use server';

import { supabase } from '../lib/supabase';
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
    image_url: formData.get('imageUrl') as string || '',
    apply_url: formData.get('applyUrl') as string || '',
  };

  const { error } = await supabase.from('posts').insert([newPost]);
  if (error) throw new Error(error.message);

  revalidatePath('/');
  revalidatePath('/jobs');
  revalidatePath('/internships');
  revalidatePath('/scholarships');
  redirect('/');
}

export async function deletePost(formData: FormData) {
  const id = formData.get('id') as string;

  const { error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw new Error(error.message);

  revalidatePath('/');
  revalidatePath('/jobs');
  revalidatePath('/internships');
  revalidatePath('/scholarships');
  redirect('/upload-jobs-secret');
}
