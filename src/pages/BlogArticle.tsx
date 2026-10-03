import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate } from '@/lib/i18n';
import { useSEO } from '@/lib/seo';

// قاعدة بيانات المحتوى الكامل للمقالات
const articlesData: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  description: string;
  content: Array<{
    heading?: string;
    text?: string;
    list?: string[];
    highlight?: string;
  }>;
}> = {
  '10-best-things-to-do-in-marrakech': {
    title: '10 Best Things to Do in Marrakech: The Ultimate Travel Guide',
    category: 'Travel Guide',
    date: 'March 2026',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/5435195/pexels-photo-5435195.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Discover the top 10 things to do in Marrakech! From exploring Jemaa el-Fnaa and Jardin Majorelle to staying in an authentic Moroccan Riad.',
    content: [
      {
        text: 'Marrakech, the vibrant "Red City" of Morocco, is a destination that captivates every traveler’s senses. From the bustling souks filled with spices and hand-crafted lanterns to tranquil courtyards hidden behind ancient walls, Marrakech offers an unforgettable mix of culture, history, and luxury.'
      },
      {
        heading: '1. Immerse Yourself in Jemaa el-Fnaa Square',
        text: 'The beating heart of Marrakech, Jemaa el-Fnaa comes alive as the sun sets. Enjoy street performers, musicians, storytellers, and freshly squeezed orange juice stalls. For the best view, grab a mint tea at one of the rooftop cafes surrounding the square.'
      },
      {
        heading: '2. Stay in an Authentic Moroccan Riad',
        text: 'To truly experience Moroccan hospitality, stay in a traditional Riad in the historic Medina. Riad Tofaha offers a serene sanctuary with authentic zellige tilework, a tranquil courtyard pool, and a peaceful rooftop terrace to unwind after a day of sightseeing.',
        highlight: 'Pro Tip: Staying inside the Medina allows you to walk to all major attractions while enjoying a quiet retreat at night.'
      },
      {
        heading: '3. Wander Through the Majorelle Garden (Jardin Majorelle)',
        text: 'Created by French painter Jacques Majorelle and later saved by Yves Saint Laurent, this botanical garden is famous for its vibrant cobalt blue walls and rare plant species. Don’t forget to visit the adjacent Pierre Bergé Museum of Berber Arts.'
      },
      {
        heading: '4. Get Lost in the Historic Medina Souks',
        text: 'Exploring the labyrinthine alleys of the Medina is an adventure in itself. Shop for handcrafted leather bags, Berber rugs, ceramics, and traditional spices. Bargaining is expected and part of the local culture!'
      },
      {
        heading: '5. Admire the Architecture of Bahia Palace',
        text: 'Built in the late 19th century, Bahia Palace features stunning carved plaster, painted cedarwood ceilings, and grand marble courtyards that showcase the peak of Moroccan craftsmanship.'
      }
    ]
  },
  'what-to-eat-in-marrakech-moroccan-cuisine-guide': {
    title: 'What to Eat in Marrakech: Authentic Moroccan Cuisine Guide',
    category: 'Food & Culture',
    date: 'March 2026',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/2291596/pexels-photo-2291596.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Explore the best traditional food in Marrakech! A complete foodie guide to Tajine, Tanjia Marrakchia, Pastilla, Couscous, and Mint Tea.',
    content: [
      {
        text: 'Moroccan cuisine is celebrated globally for its rich blend of spices, aromatic herbs, and savory-sweet flavor combinations. Influenced by Berber, Arab, Andalusian, and Mediterranean traditions, dining in Marrakech is a true culinary journey.'
      },
      {
        heading: '1. Tanjia Marrakchia (طنجية)',
        text: 'Unique to Marrakech, Tanjia is traditionally prepared using cuts of beef or lamb seasoned with cumin, saffron, preserved lemon, and aged butter (smen). Sealed in a clay jar, it is slow-cooked for hours in the ash pit of a local neighborhood hammam oven.'
      },
      {
        heading: '2. Moroccan Tajine (طاجين)',
        text: 'Slow-cooked over charcoal in a conical earthenware pot, popular varieties include Lamb with Prunes & Almonds or Chicken with Preserved Lemons and Olives.'
      },
      {
        heading: '3. Pastilla (باستيلة)',
        text: 'A legendary Moroccan delicacy featuring paper-thin layers of warqa pastry stuffed with spiced shredded chicken, toasted almonds, cinnamon, and a light dusting of powdered sugar.'
      }
    ]
  },
  'marrakech-travel-tips-before-visiting': {
    title: 'Essential Marrakech Travel Tips: What to Know Before You Visit',
    category: 'Travel Tips',
    date: 'February 2026',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/22711558/pexels-photo-22711558.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Planning a trip to Marrakech? Read these essential travel tips on culture, currency, staying in a Riad, safety, and navigating the Medina.',
    content: [
      {
        text: 'Visiting Marrakech is an unforgettable experience, but as a historic city with deep cultural traditions, knowing what to expect can make your vacation smoother and more enjoyable.'
      },
      {
        heading: '1. Choose a Riad Over a Standard Hotel',
        text: 'To get the most authentic cultural experience, stay in a Riad—a traditional Moroccan house built around an inner courtyard. Unlike impersonal hotels, Riads offer peaceful privacy, custom hospitality, and direct connection to the historic Medina.'
      },
      {
        heading: '2. Currency and Cash Advice',
        text: 'The local currency is the Moroccan Dirham (MAD). While upscale restaurants and hotels accept credit cards, cash is essential for souks, taxis, and small cafes.'
      }
    ]
  }
};

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();

  const article = slug ? articlesData[slug] : undefined;

  // إعداد SEO للمقال
  useSEO({
    title: article ? `${article.title} | Riad Tofaha Blog` : 'Article | Riad Tofaha',
    description: article?.description || 'Read travel tips and guides about Marrakech on Riad Tofaha blog.',
    canonicalPath: `/blog/${slug}`,
  });

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="font-serif text-3xl font-medium text-brown-800">Article Not Found</h2>
        <p className="text-brown-600">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-ivory-100 min-h-screen">
      {/* Header & Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700 transition-colors"
        >
          <ArrowLeft size={16} /> Back to All Articles
        </Link>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Title & Metadata */}
        <div className="space-y-4 text-center">
          <span className="inline-block bg-[#a86548] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-medium text-brown-800 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs text-brown-500 font-medium pt-2">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="text-terracotta-600" /> {article.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-terracotta-600" /> {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-[300px] md:h-[480px] rounded-3xl overflow-hidden shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="bg-ivory-50 p-8 md:p-12 rounded-3xl border border-sand-200 shadow-sm space-y-8 text-brown-800 leading-relaxed font-light">
          {article.content.map((block, idx) => (
            <div key={idx} className="space-y-3">
              {block.heading && (
                <h2 className="font-serif text-2xl font-medium text-brown-900 pt-4 border-b border-sand-200 pb-2">
                  {block.heading}
                </h2>
              )}
              {block.text && <p className="text-base text-brown-700 leading-8">{block.text}</p>}
              {block.highlight && (
                <div className="bg-sand-100 border-l-4 border-[#a86548] p-4 rounded-r-xl text-sm italic font-medium text-brown-800 my-4">
                  {block.highlight}
                </div>
              )}
            </div>
          ))}

          {/* Booking CTA box inside article */}
          <div className="mt-12 p-8 bg-brown-900 text-ivory-50 rounded-2xl text-center space-y-4">
            <h3 className="font-serif text-2xl text-ivory-50">Experience Marrakech at Riad Tofaha</h3>
            <p className="text-xs md:text-sm text-ivory-50/80 max-w-xl mx-auto">
              Enjoy authentic Moroccan hospitality, peaceful courtyards, and delicious rooftop breakfasts in the heart of the Medina.
            </p>
            <div className="pt-2">
              <Link
                to="/book"
                className="inline-block bg-[#a86548] hover:bg-[#8e5238] text-white font-bold text-xs uppercase tracking-widest px-8 py-3 rounded-xl transition shadow"
              >
                Book Your Stay Now
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
