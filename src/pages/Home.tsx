import { useRef } from 'react';
import ThumbnailDownloader from '../components/ThumbnailDownloader';
import { 
  Zap, 
  Shield, 
  Infinity, 
  Image, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Smartphone,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const thumbnailResultRef = useRef<HTMLDivElement>(null);

const scrollToResult = () => {
  setTimeout(() => {
    thumbnailResultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
};
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Get your thumbnails in seconds. Our optimized servers ensure instant processing.'
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: 'No Watermark',
      description: 'Download clean, original thumbnails without any watermarks or branding.'
    },
    {
      icon: <Infinity className="h-6 w-6 text-blue-500" />,
      title: 'Unlimited Downloads',
      description: 'No limits on how many thumbnails you can download. Use it as much as you need.'
    },
    {
      icon: <Image className="h-6 w-6 text-purple-500" />,
      title: 'HD & 4K Quality',
      description: 'Access maximum resolution thumbnails including HD, 1080p, and 4K when available.'
    },
    {
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: '24/7 Available',
      description: 'Our service is always online. Download thumbnails anytime, anywhere.'
    },
    {
      icon: <Smartphone className="h-6 w-6 text-pink-500" />,
      title: 'Mobile Friendly',
      description: 'Works perfectly on all devices - desktop, tablet, and mobile phones.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Copy YouTube URL',
      description: 'Go to YouTube and copy the URL of the video whose thumbnail you want to download.'
    },
    {
      number: '02',
      title: 'Paste URL',
      description: 'Paste the copied URL into the input box above and click the "Get Thumbnail" button.'
    },
    {
      number: '03',
      title: 'Download',
      description: 'Preview the thumbnail and click download to save it in your preferred resolution.'
    }
  ];

  const faqs = [
    {
      question: 'Is this YouTube Thumbnail Downloader free to use?',
      answer: 'Yes, our YouTube Thumbnail Downloader is 100% free to use. There are no hidden charges, no registration required, and no limits on how many HD thumbnails you can download.'
    },
    {
      question: 'What thumbnail resolutions are available?',
      answer: 'We offer all available sizes, including Maximum Resolution (Original Quality), 1280x720 (HD), 640x480 (SD), 480x360, 320x180, and 120x90. The best quality depends on the original image uploaded by the video creator.'
    },
    {
      question: 'Is it legal to download YouTube thumbnails?',
      answer: 'Downloading thumbnails for personal use or educational purposes is generally acceptable under fair use. However, we recommend respecting copyright laws and getting permission from the creator for any commercial use.'
    },
    {
      question: 'Do I need to install any software?',
      answer: 'No, our tool is a web-based extractor that works directly in your browser (Chrome, Safari, Firefox). It requires zero software installation, so you can download thumbnails instantly.'
    },
    {
      question: 'Why is the 4K or HD resolution not available for some videos?',
      answer: 'High-resolution (1080p/4K) thumbnails only appear if the creator uploaded a high-quality custom image. If they used an auto-generated preview, the maximum resolution may be limited to 480p or 640p.'
    },
    {
      question: 'Can I use this tool on my mobile phone?',
      answer: 'Yes, our website is fully responsive and works perfectly on all Android and iOS devices via any mobile browser.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
               Best YouTube Thumbnail Downloader
              <span className="block text-red-200 text-2xl sm:text-3xl lg:text-4xl mt-2">
                (Free HD, 1080p & 4K Quality)
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Download high-quality YouTube video thumbnails instantly. Our tool is the fastest way to get YouTube thumbnails in original resolution. No registration, no watermarks, 100% free and unlimited.
            </p>
            
            {/* Tool Container */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8" ref={thumbnailResultRef}>
              <ThumbnailDownloader onGetThumbnail={scrollToResult} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Thumbnail Downloader?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fastest, easiest, and most reliable way to download YouTube thumbnails in high quality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your YouTube thumbnail in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-5xl font-bold text-red-600">{step.number}</span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Got questions? We've got answers.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Complete Guide to YouTube Thumbnail Downloading
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>YouTube thumbnails</strong> are the first impression viewers get of your video content. 
                Whether you're a content creator looking for inspiration, a marketer analyzing competitors, 
                or a designer seeking reference material, having access to high-quality thumbnails is essential. 
                Our <strong>free YouTube Thumbnail Downloader Hub</strong> provides instant access to thumbnails 
                in multiple resolutions, from standard quality to maximum HD resolution.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Why Download YouTube Thumbnails?
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                There are numerous legitimate reasons to download YouTube thumbnails. Content creators often 
                need to reference their own thumbnails for branding consistency across social media platforms. 
                Digital marketers analyze successful thumbnails to understand visual trends and click-through 
                optimization strategies. Educators and researchers may need thumbnails for academic presentations 
                and citations. Whatever your purpose, our tool ensures you get the highest quality available.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Understanding YouTube Thumbnail Resolutions
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                YouTube stores thumbnails in multiple resolutions to optimize loading across different devices 
                and connection speeds. The <strong>maximum resolution</strong> (1280x720 pixels) offers the 
                best quality and is ideal for desktop viewing and design work. The <strong>standard definition</strong> 
                (640x480) provides a good balance of quality and file size. <strong>High quality</strong> (480x360) 
                and <strong>medium quality</strong> (320x180) are perfect for mobile devices and quick previews. 
                Our downloader gives you access to all available resolutions for any public video.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Best Practices for Using Downloaded Thumbnails
              </h3>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Respect Copyright:</strong> Always ensure you have permission to use thumbnails, 
                  especially for commercial purposes. Fair use applies to educational and commentary content.</span>
                </li>
                <li className="flex items-start">
                  <Image className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Quality Matters:</strong> Always download the highest resolution available. 
                  You can always scale down, but scaling up reduces quality.</span>
                </li>
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Optimize for Web:</strong> If using thumbnails on your website, compress them 
                  to balance quality and loading speed.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                Related Resources
              </h3>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Want to learn more about creating effective thumbnails and growing your YouTube presence? 
                Check out our <Link to="/blog" className="text-red-600 hover:underline">blog section</Link> where 
                we cover topics like <Link to="/blog?category=youtube-tips" className="text-red-600 hover:underline">YouTube tips</Link>, 
                <Link to="/blog?category=thumbnail-guides" className="text-red-600 hover:underline"> thumbnail design guides</Link>, and 
                <Link to="/blog?category=video-growth" className="text-red-600 hover:underline"> video growth strategies</Link>. 
                Our resources are designed to help content creators at every level succeed on the platform.
              </p>

              <div className="bg-red-50 rounded-xl p-6 mt-8">
                <h4 className="text-lg font-semibold text-red-900 mb-2">
                  Start Downloading Now
                </h4>
                <p className="text-red-800 mb-4">
                  Ready to get started? Simply paste any YouTube video URL in the tool above and download 
                  your thumbnails in seconds. No registration required, completely free, and unlimited downloads.
                </p>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="inline-flex items-center text-red-700 font-semibold hover:text-red-800"
                >
                  Try the tool now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Download YouTube Thumbnails?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of users who trust our tool for fast, free thumbnail downloads.
          </p>
          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
