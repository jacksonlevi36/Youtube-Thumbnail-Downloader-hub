import { Link } from 'react-router-dom';
import { Download, Youtube, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Download className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                YouTube Thumbnail Downloader <span className="text-red-500">Hub</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Free YouTube Thumbnail Downloader. Download HD, 1080p, and 4K thumbnails instantly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog?category=youtube-tips">YouTube Tips</Link>
              </li>
              <li>
                <Link to="/blog?category=thumbnail-guides">Thumbnail Guides</Link>
              </li>
              <li>
                <Link to="/blog?category=video-growth">Video Growth</Link>
              </li>
              <li>
  
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            {currentYear} YouTube Thumbnail Downloader Hub. All rights reserved. Not affiliated with YouTube.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
