import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';

// قائمة مقالات المدونة مع البيانات المحسنة لـ SEO
export const blogPosts = [
  {
    id: '1',
    slug: '10-best-things-to-do-in-marrakech',
    title: '10 Best Things to Do in Marrakech: The Ultimate Travel Guide',
    excerpt: 'Discover the top 10 things to do in Marrakech! From exploring Jemaa el-Fnaa and Jardin Majorelle to staying in an authentic Moroccan Riad.',
    category: 'Travel Guide',
    date: 'March 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/5435195/pexels-photo-5435195.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: true,
  },
  {
    id: '2',
    slug: 'what-to-eat-in-marrakech-moroccan-cuisine-guide',
    title: 'What to Eat in Marrakech: Authentic Moroccan Cuisine Guide',
    excerpt: 'Explore the best traditional food in Marrakech! A complete foodie guide to Tajine, Tanjia Marrakchia, Pastilla, Couscous, and Mint Tea.',
    category: 'Food & Culture',
    date: 'March 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/2291596/pexels-photo-2291596.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
  },
  {
    id: '3',
    slug: 'marrakech-travel-tips-before-visiting',
    title: 'Essential Marrakech Travel Tips: What to Know Before You Visit',
    excerpt: 'Planning a trip to Marrakech? Read these essential travel tips on culture, currency, staying in a Riad, safety, and navigating the Medina.',
    category: 'Travel Tips',
    date: 'February 2026',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
  },
  {
    id: '4',
    slug: 'best-places-to-visit-in-marrakech-tourist-guide',
    title: 'Top Historic Monuments & Palaces to Visit in Marrakech',
    excerpt: 'Immerse yourself in Moroccan history with a visit to Bahia Palace, Saadian Tombs, El Badi Palace, and the iconic Koutoubia Mosque.',
    category: 'Culture & Heritage',
    date: 'January 2026',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/10306569/pexels-photo-10306569.png?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
  },
  {
    id: '5',
    slug: 'perfect-romantic-getaway-in-marrakech',
    title: 'Planning the Perfect Romantic Getaway in a Marrakech Riad',
    excerpt: 'Experience magical moments with your partner in Marrakech. From candlelit rooftop dinners to traditional hammam rituals.',
    category: 'Romance & Luxury',
    date: 'January 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/7391720/pexels-photo-7391720.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
  },
  {
    id: '6',
    slug: 'ultimate-travel-guide-to-marrakech-morocco',
    title: 'Day Trips from Marrakech: High Atlas Mountains & Desert Excursions',
    excerpt: 'Escape the city and explore the stunning scenery of the Atlas Mountains, Ourika Valley, and the Agafay Desert.',
    category: 'Excursions',
    date: 'December 2025',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/30205199/pexels-photo-30205199.jpeg?auto=compress&cs=tinysrgb&w=1200',
    featured: false,
  },
];

export default function Blog() {
  const { lang } = useLanguage();

  useSEO({
    title: 'Marrakech Travel Guide & Insights | Riad Tofaha Blog',
    description: 'Explore our Marrakech travel guide, tips, authentic food recommendations, and cultural insights to make your stay at Riad Tofaha unforgettable.',
    canonicalPath: '/blog',
  });

  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0];
  const regularPosts = blogPosts.filter((post) => post.id !== featuredPost.id);

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen">
      {/* Header Banner */}
      <section className="bg-brown-900 text-ivory-50 py-16 md:py-24 px-4 mb-12">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-300 font-medium">
            JOURNAL & TRAVEL INSIGHTS
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-wide">
            Marrakech Travel Guide
          </h1>
          <p className="text-ivory-50/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover expert tips, cultural guides, and local recommendations to help you experience the magical charm of Marrakech and Riad Tofaha.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Featured Article Card */}
        {featuredPost && (
          <section className="bg-ivory-50 border border-sand-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[450px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#a86548] text-white text-xs uppercase font-bold tracking-wider px-3 py-1.5 rounded-full shadow">
                  Featured Guide
                </span>
              </div>
              <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-brown-500 font-medium">
                    <span className="inline-flex items-center gap-1 text-terracotta-600">
                      <Tag size={14} /> {featuredPost.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={14} /> {featuredPost.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl lg:text-3xl font-medium text-brown-800 leading-snug">
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="hover:text-terracotta-600 transition-colors"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-brown-600 text-sm leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div>
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 bg-[#a86548] hover:bg-[#8e5238] text-white px-6 py-3 rounded-xl font-medium text-xs uppercase tracking-wider transition shadow-sm"
                  >
                    Read Full Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Blog Posts Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-sand-200 pb-4">
            <h3 className="font-serif text-2xl text-brown-800 font-medium flex items-center gap-2">
              <BookOpen size={22} className="text-terracotta-600" /> Latest Articles
            </h3>
            <p className="text-xs text-brown-500">Explore all {blogPosts.length} guides</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-ivory-50 rounded-2xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-brown-900/80 backdrop-blur-sm text-ivory-50 text-[11px] font-semibold px-3 py-1 rounded-md">
                      {post.category}
                    </span>
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-brown-500">
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h4 className="font-serif text-lg font-medium text-brown-800 group-hover:text-terracotta-600 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-brown-600 text-xs leading-relaxed line-clamp-3 font-light">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 transition-colors"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action Box inside Blog */}
        <section className="bg-brown-900 text-ivory-50 rounded-3xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="font-serif text-3xl font-medium text-ivory-50">
              Ready to Experience Marrakech Firsthand?
            </h3>
            <p className="text-ivory-50/80 text-sm leading-relaxed">
              Stay at Riad Tofaha in the heart of the Medina and enjoy authentic Moroccan hospitality, serene courtyards, and beautiful rooftop breakfasts.
            </p>
            <div className="pt-2">
              <Link
                to="/book"
                className="inline-block bg-[#a86548] hover:bg-[#8e5238] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition shadow-lg"
              >
                {translate('nav.bookNow') || 'Book Your Stay'}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
