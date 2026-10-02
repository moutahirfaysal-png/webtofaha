import { supabase } from './supabase';
import type { Room, BlogArticle, BlogCategory, GalleryImage, Settings } from './types';

export async function fetchRooms(): Promise<Room[]> {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }
  return (data || []) as Room[];
}

export async function fetchRoomBySlug(slug: string): Promise<Room | null> {
  const { data, error } = await supabase
    .from('rooms')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();
  if (error) {
    console.error('Error fetching room:', error);
    return null;
  }
  return data as Room | null;
}

export async function fetchSettings(): Promise<Settings | null> {
  const { data, error } = await supabase
    .from('settings')
    .select('*')
    .limit(1)
    .maybeSingle();
  if (error) {
    console.error('Error fetching settings:', error);
    return null;
  }
  return data as Settings | null;
}

export async function fetchPublishedArticles(): Promise<BlogArticle[]> {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });
  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return (data || []) as BlogArticle[];
}

export async function fetchArticleBySlug(slug: string): Promise<BlogArticle | null> {
  const { data, error } = await supabase
    .from('blog_articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle();
  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }
  return data as BlogArticle | null;
}

export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name', { ascending: true });
  if (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }
  return (data || []) as BlogCategory[];
}

export async function fetchGalleryImages(): Promise<GalleryImage[]> {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('sort_order', { ascending: true });
  if (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
  return (data || []) as GalleryImage[];
}

export async function saveMessage(name: string, email: string, subject: string, message: string): Promise<boolean> {
  const { error } = await supabase
    .from('messages')
    .insert({ name, email, subject, message });
  if (error) {
    console.error('Error saving message:', error);
    return false;
  }
  return true;
}
