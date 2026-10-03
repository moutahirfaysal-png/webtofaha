export type Json = string | number | boolean | null | { [key: string]: Json | Json[] } | Json[];

export type LocalizedText = {
  en?: string;
  fr?: string;
  ar?: string;
  es?: string; // أضيفت لضمان توافق اللغات الأربع للموقع
};

export interface Room {
  id: string;
  name: LocalizedText;
  slug: string;
  description: LocalizedText;
  short_description: LocalizedText | null;
  bed_config: string;
  max_occupancy: number;
  room_size: string | null;
  bathroom_type: string;
  base_price: number | null;
  currency: string;
  facilities: string[];
  images: string[];
  is_available: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface Reservation {
  id: string;
  guest_name: string;
  email: string;
  phone: string | null;
  room_id: string | null;
  room_name: string | null;
  check_in: string;
  check_out: string;
  adults: number;
  children: number;
  nights: number;
  special_requests: string | null;
  total_price: number | null;
  currency: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  internal_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  reservation_id: string | null;
  payment_provider: string;
  transaction_ref: string | null;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paid_at: string | null;
  created_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  category_id: string | null;
  category_name: string | null;
  language: string;
  author: string;
  seo_title: string | null;
  seo_description: string | null;
  status: 'draft' | 'published';
  published_at: string | null;
  reading_time: number;
  faq: { q: string; a: string }[];
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  title: string | null;
  image_url: string;
  category: string;
  sort_order: number;
  created_at: string;
}

export interface Settings {
  id: string;
  brand_name: string;
  brand_tagline: LocalizedText | null;
  brand_description: LocalizedText | null;
  whatsapp_number: string | null;
  email: string | null;
  phone: string | null;
  address: LocalizedText | null;
  map_lat: number | null;
  map_lng: number | null;
  map_embed_url: string | null;
  social_links: { instagram?: string; facebook?: string; twitter?: string };
  revolut_link: string | null;
  revolut_enabled: boolean;
  default_currency: string;
  check_in_time: string;
  check_out_time: string;
  logo_url: string | null;
  languages: string[];
  meta_description: string | null;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
}
