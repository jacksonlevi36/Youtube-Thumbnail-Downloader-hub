import { Download, Users, Globe, Award, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            We're on a mission to help content creators succeed by providing free, 
            easy-to-use tools and valuable resources.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
  YouTube Thumbnail Downloader Hub was born from a simple need: content creators and marketers 
  needed an easy way to access YouTube thumbnails for inspiration, analysis, and 
  reference. What started as a small tool has grown into a trusted resource used by 
  thousands of creators worldwide.
</p>
<p className="mb-4">
  Founded in 2026, we recognized that while YouTube is the world&apos;s largest 
  video platform, there weren&apos;t many reliable, free tools for accessing HD 
  thumbnail images. We set out to change that by creating a fast, simple, and 
  completely free solution for the community.
</p>
<p>
  Today, YouTube Thumbnail Downloader Hub serves creators, marketers, educators, and 
  researchers who need quick access to high-quality YouTube thumbnails. We&apos;re 
  proud to be part of the creative community and committed to keeping our tool 
  free and accessible to everyone.
</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1M+</div>
              <div className="text-gray-600">Thumbnails Downloaded</div>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-gray-600">Monthly Users</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600">Free Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creator-First</h3>
              <p className="text-gray-600">
                Everything we build is designed with creators in mind. We understand the challenges 
                of content creation because we're creators too.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-600">
                We believe powerful tools don't need to be complicated. Our platform is designed 
                to be intuitive and easy to use for everyone.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Great tools should be available to everyone. That's why our core features will 
                always be free, with no hidden costs or limits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Download className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium Thumbnail Downloader (Free Forever)</h3>
                  <p className="text-gray-600">
                    Download any YouTube thumbnail in Ultra-HD, 4K, 1080p, and multiple resolutions instantly. No hidden costs, no registration, and absolutely unlimited downloads for every creator.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Expert Educational Guides</h3>
                  <p className="text-gray-600">
                    At YouTube Thumbnail Downloader Hub, we don't just give you the tool; we help you grow. Our blog features data-backed guides on YouTube SEO, CTR optimization, and professional thumbnail design 2026.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Globe className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Seamless Cross-Platform Access</h3>
                  <p className="text-gray-600">
                    Our platform is lightning-fast and 100% mobile-responsive. Whether you are on an iPhone, Android, or Desktop, you can grab thumbnails on the go, anytime and anywhere in the world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Download YouTube Thumbnails?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of creators who trust our tool for fast, free thumbnail downloads.
          </p>
          <a 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Try It Now <Download className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
