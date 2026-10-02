/*
# Riad Tofaha — Complete Database Schema

## Overview
Creates the full database structure for a luxury riad website including rooms, reservations, payments, blog articles, gallery, and website settings.

## New Tables
1. `rooms` — The four riad rooms with descriptions, pricing, images, facilities
2. `reservations` — Guest booking requests with status tracking
3. `payments` — Payment records linked to reservations
4. `blog_articles` — SEO blog content with categories and metadata
5. `blog_categories` — Blog category management
6. `gallery_images` — Gallery image management
7. `settings` — Single-row table for site-wide configuration
8. `messages` — Contact form submissions

## Security
- RLS enabled on all tables
- Public read access on rooms, published blog articles, gallery, settings (anon + authenticated)
- Write access restricted to authenticated (admin) users
- Reservation insert allowed for anon (guests submit booking requests)
- Messages insert allowed for anon (contact form submissions)
*/

-- ============ ROOMS ============
CREATE TABLE IF NOT EXISTS rooms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name jsonb NOT NULL,
  slug text UNIQUE NOT NULL,
  description jsonb NOT NULL,
  short_description jsonb,
  bed_config text NOT NULL,
  max_occupancy integer NOT NULL DEFAULT 2,
  room_size text,
  bathroom_type text DEFAULT 'private',
  base_price numeric(10,2),
  currency text DEFAULT 'EUR',
  facilities jsonb DEFAULT '[]'::jsonb,
  images jsonb DEFAULT '[]'::jsonb,
  is_available boolean DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_rooms" ON rooms;
CREATE POLICY "public_read_rooms" ON rooms FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_rooms" ON rooms;
CREATE POLICY "admin_insert_rooms" ON rooms FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_rooms" ON rooms;
CREATE POLICY "admin_update_rooms" ON rooms FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_rooms" ON rooms;
CREATE POLICY "admin_delete_rooms" ON rooms FOR DELETE
  TO authenticated USING (true);

-- ============ RESERVATIONS ============
CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  guest_name text NOT NULL,
  email text NOT NULL,
  phone text,
  room_id uuid REFERENCES rooms(id) ON DELETE SET NULL,
  room_name text,
  check_in date NOT NULL,
  check_out date NOT NULL,
  adults integer NOT NULL DEFAULT 1,
  children integer NOT NULL DEFAULT 0,
  nights integer DEFAULT 0,
  special_requests text,
  total_price numeric(10,2),
  currency text DEFAULT 'EUR',
  status text NOT NULL DEFAULT 'pending',
  internal_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_reservations" ON reservations;
CREATE POLICY "admin_read_reservations" ON reservations FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_reservations" ON reservations;
CREATE POLICY "admin_update_reservations" ON reservations FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_reservations" ON reservations;
CREATE POLICY "admin_delete_reservations" ON reservations FOR DELETE
  TO authenticated USING (true);

-- ============ PAYMENTS ============
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  reservation_id uuid REFERENCES reservations(id) ON DELETE CASCADE,
  payment_provider text DEFAULT 'revolut',
  transaction_ref text,
  amount numeric(10,2) NOT NULL,
  currency text DEFAULT 'EUR',
  status text NOT NULL DEFAULT 'pending',
  paid_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin_read_payments" ON payments;
CREATE POLICY "admin_read_payments" ON payments FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_payments" ON payments;
CREATE POLICY "admin_insert_payments" ON payments FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_payments" ON payments;
CREATE POLICY "admin_update_payments" ON payments FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_payments" ON payments;
CREATE POLICY "admin_delete_payments" ON payments FOR DELETE
  TO authenticated USING (true);

-- ============ BLOG CATEGORIES ============
CREATE TABLE IF NOT EXISTS blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_blog_categories" ON blog_categories;
CREATE POLICY "public_read_blog_categories" ON blog_categories FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_blog_categories" ON blog_categories;
CREATE POLICY "admin_insert_blog_categories" ON blog_categories FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_blog_categories" ON blog_categories;
CREATE POLICY "admin_update_blog_categories" ON blog_categories FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_blog_categories" ON blog_categories;
CREATE POLICY "admin_delete_blog_categories" ON blog_categories FOR DELETE
  TO authenticated USING (true);

-- ============ BLOG ARTICLES ============
CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  featured_image text,
  category_id uuid REFERENCES blog_categories(id) ON DELETE SET NULL,
  category_name text,
  language text DEFAULT 'en',
  author text DEFAULT 'Riad Tofaha',
  seo_title text,
  seo_description text,
  status text NOT NULL DEFAULT 'draft',
  published_at timestamptz,
  reading_time integer DEFAULT 5,
  faq jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_published_articles" ON blog_articles;
CREATE POLICY "public_read_published_articles" ON blog_articles FOR SELECT
  TO anon, authenticated USING (status = 'published');

DROP POLICY IF EXISTS "admin_read_all_articles" ON blog_articles;
CREATE POLICY "admin_read_all_articles" ON blog_articles FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_articles" ON blog_articles;
CREATE POLICY "admin_insert_articles" ON blog_articles FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_articles" ON blog_articles;
CREATE POLICY "admin_update_articles" ON blog_articles FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_articles" ON blog_articles;
CREATE POLICY "admin_delete_articles" ON blog_articles FOR DELETE
  TO authenticated USING (true);

-- ============ GALLERY IMAGES ============
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  image_url text NOT NULL,
  category text DEFAULT 'general',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_gallery" ON gallery_images;
CREATE POLICY "public_read_gallery" ON gallery_images FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_gallery" ON gallery_images;
CREATE POLICY "admin_insert_gallery" ON gallery_images FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_gallery" ON gallery_images;
CREATE POLICY "admin_update_gallery" ON gallery_images FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_gallery" ON gallery_images;
CREATE POLICY "admin_delete_gallery" ON gallery_images FOR DELETE
  TO authenticated USING (true);

-- ============ SETTINGS ============
CREATE TABLE IF NOT EXISTS settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_name text DEFAULT 'Riad Tofaha',
  brand_tagline jsonb,
  brand_description jsonb,
  whatsapp_number text,
  email text,
  phone text,
  address jsonb,
  map_lat numeric,
  map_lng numeric,
  map_embed_url text,
  social_links jsonb DEFAULT '{}'::jsonb,
  revolut_link text,
  revolut_enabled boolean DEFAULT false,
  default_currency text DEFAULT 'EUR',
  check_in_time text DEFAULT '14:00',
  check_out_time text DEFAULT '11:00',
  logo_url text,
  languages jsonb DEFAULT '["en","fr","ar"]'::jsonb,
  meta_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_settings" ON settings;
CREATE POLICY "public_read_settings" ON settings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_update_settings" ON settings;
CREATE POLICY "admin_update_settings" ON settings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- ============ MESSAGES (Contact form) ============
CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages" ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_read_messages" ON messages;
CREATE POLICY "admin_read_messages" ON messages FOR SELECT
  TO authenticated USING (true);

DROP POLICY IF EXISTS "admin_delete_messages" ON messages;
CREATE POLICY "admin_delete_messages" ON messages FOR DELETE
  TO authenticated USING (true);

-- ============ INDEXES ============
CREATE INDEX IF NOT EXISTS idx_reservations_status ON reservations(status);
CREATE INDEX IF NOT EXISTS idx_reservations_check_in ON reservations(check_in);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON blog_articles(slug);
CREATE INDEX IF NOT EXISTS idx_articles_status ON blog_articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_category ON blog_articles(category_id);
CREATE INDEX IF NOT EXISTS idx_rooms_slug ON rooms(slug);
