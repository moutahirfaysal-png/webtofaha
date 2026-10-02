import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Mail, Phone, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translate, getLocalizedText } from '@/lib/i18n';
import { useSettings } from '@/lib/SettingsContext';

export default function Footer() {
  const { lang } = useLanguage();
  const { settings } = useSettings();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const whatsappNumber =  '+212618177464';

  const navLinks = [
    { to: '/', label: translate('nav.home', lang) },
    { to: '/about', label: translate('nav.about', lang) },
    { to: '/rooms', label: translate('nav.rooms', lang) },
    { to: '/gallery', label: translate('nav.gallery', lang) },
    { to: '/experiences', label: translate('nav.experiences', lang) },
    { to: '/blog', label: translate('nav.blog', lang) },
    { to: '/contact', label: translate('nav.contact', lang) },
  ];

  return (
    <footer className="bg-brown-900 text-ivory-50">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-3xl font-medium mb-4">Riad Tofaha</h3>
            <p className="text-sm leading-7 text-ivory-50/70">
              {getLocalizedText(settings?.brand_description, lang) || translate('footer.about', lang)}
            </p>
            <div className="flex gap-4 mt-6">
              {settings?.social_links?.instagram && (
                <a href={settings.social_links.instagram} target="_blank" rel="noopener noreferrer" className="text-ivory-50/60 hover:text-gold-300 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              )}
              {settings?.social_links?.facebook && (
                <a href={settings.social_links.facebook} target="_blank" rel="noopener noreferrer" className="text-ivory-50/60 hover:text-gold-300 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              )}
              {settings?.social_links?.twitter && (
                <a href={settings.social_links.twitter} target="_blank" rel="noopener noreferrer" className="text-ivory-50/60 hover:text-gold-300 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-300 mb-5">
              {translate('footer.quickLinks', lang)}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ivory-50/70 hover:text-gold-300 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-300 mb-5">
              {translate('footer.contact', lang)}
            </h4>
            <ul className="space-y-3 text-sm text-ivory-50/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold-300" />
                <span>{getLocalizedText(settings?.address, lang) || 'Marrakech, Morocco'}</span>
              </li>
              {settings?.email && (
                <li className="flex items-center gap-2">
                  <Mail size={16} className="flex-shrink-0 text-gold-300" />
                  <a href={`mailto:${settings.email}`} className="hover:text-gold-300 transition-colors">{settings.email}</a>
                </li>
              )}
              {settings?.phone && (
                <li className="flex items-center gap-2">
                  <Phone size={16} className="flex-shrink-0 text-gold-300" />
                  <a href={`tel:${settings.phone}`} className="hover:text-gold-300 transition-colors">{settings.phone}</a>
                </li>
              )}
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-sm text-gold-300 hover:text-gold-200 transition-colors"
                >
                  <MessageCircle size={16} />
                  {translate('footer.whatsapp', lang)}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gold-300 mb-5">
              {translate('footer.newsletter', lang)}
            </h4>
            <p className="text-sm text-ivory-50/70 mb-4">
              {translate('footer.newsletterDesc', lang)}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={translate('footer.emailPlaceholder', lang)}
                required
                className="bg-brown-800 border border-ivory-50/20 px-4 py-3 text-sm text-ivory-50 placeholder-ivory-50/40 focus:border-gold-300 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 px-6 py-3 text-sm font-medium uppercase tracking-widest text-brown-900 transition-colors hover:bg-gold-400"
              >
                {subscribed ? '✓' : translate('footer.subscribe', lang)}
                {!subscribed && <Send size={14} />}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
<div className="mt-12 overflow-hidden rounded-sm h-64">
  <iframe
    title="Riad Tofaha Location"
    src="https://maps.google.com/maps?q=Riad%20Tofaha%20Marrakech&t=&z=16&ie=UTF8&iwloc=&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    allowFullScreen
  />
</div>
      </div>

      <div className="border-t border-ivory-50/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-50/50">
            &copy; {new Date().getFullYear()} Riad Tofaha. {translate('footer.rights', lang)}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-ivory-50/50 hover:text-gold-300 transition-colors">
              {translate('footer.privacy', lang)}
            </Link>
            <Link to="/terms" className="text-xs text-ivory-50/50 hover:text-gold-300 transition-colors">
              {translate('footer.terms', lang)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}