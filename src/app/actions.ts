'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

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

  try {
    const fileData = await fs.readFile(postsFilePath, 'utf8');
    const posts = JSON.parse(fileData);
    posts.unshift(newPost);
    await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
  } catch (error) {
    throw new Error('Failed to save post to file.');
  }

  revalidatePath('/');
  revalidatePath('/jobs');
  revalidatePath('/internships');
  revalidatePath('/scholarships');
  redirect('/');
}

export async function deletePost(formData: FormData) {
  const id = formData.get('id') as string;

  try {
    const fileData = await fs.readFile(postsFilePath, 'utf8');
    let posts = JSON.parse(fileData);
    posts = posts.filter((post: any) => post.id !== id);
    await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
  } catch (error) {
    throw new Error('Failed to delete post from file.');
  }

  revalidatePath('/');
  revalidatePath('/jobs');
  revalidatePath('/internships');
  revalidatePath('/scholarships');
  redirect('/upload-jobs-secret');
}
