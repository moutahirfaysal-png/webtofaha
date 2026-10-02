import { useLanguage } from '@/lib/LanguageContext';
import { Language } from '@/lib/i18n';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'ar', label: 'AR' },
    { code: 'es', label: 'ES' }, // 👈 إضافة الإسبانية
  ];

  return (
    // ... داخل قائمة الاختيار:
    <select 
      value={language} 
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-transparent border border-stone-300 rounded px-2 py-1 text-xs font-semibold"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
