import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/lib/LanguageContext';
import { SettingsProvider } from '@/lib/SettingsContext';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Rooms from '@/pages/Rooms';
import RoomDetail from '@/pages/RoomDetail';
import Gallery from '@/pages/Gallery';
import Experiences from '@/pages/Experiences';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import Contact from '@/pages/Contact';
import Book from '@/pages/Book';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Admin from '@/pages/Admin';

function App() {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <WhatsAppFloat />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:slug" element={<RoomDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/experiences" element={<Experiences />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book" element={<Book />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </SettingsProvider>
    </LanguageProvider>
  );
}

export default App;
