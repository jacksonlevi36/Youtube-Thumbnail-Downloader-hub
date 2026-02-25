import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Blog = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const categories = [
    { name: 'YouTube Tips', slug: 'youtube-tips', count: 3 },
    { name: 'Thumbnail Guides', slug: 'thumbnail-guides', count: 4 },
    { name: 'Video Growth', slug: 'video-growth', count: 3 }
  ];

  const blogPosts = [
    {
      slug: 'how-to-create-clickable-youtube-thumbnails',
      title: 'How to Create Clickable YouTube Thumbnails: 10 Proven Strategies',
      excerpt: 'Learn the secrets behind high-performing YouTube thumbnails. Discover color psychology, text placement, and design techniques that boost click-through rates by up to 300%.',
      category: 'Thumbnail Guides',
      categorySlug: 'thumbnail-guides',
      readTime: '8 min read',
      date: 'Feb 15, 2026',
      searchIntent: 'Informational - Users want to learn how to create better thumbnails'
    },
    {
      slug: 'youtube-thumbnail-size-dimensions-guide',
      title: 'YouTube Thumbnail Size & Dimensions Guide 2026 (With Templates)',
      excerpt: 'The complete guide to YouTube thumbnail dimensions. Learn the exact size, aspect ratio, and best practices plus free downloadable templates for your channel.',
      category: 'Thumbnail Guides',
      categorySlug: 'thumbnail-guides',
      readTime: '6 min read',
      date: 'Feb 12, 2026',
      searchIntent: 'Informational - Users looking for specific size requirements'
    },
    {
      slug: 'best-free-youtube-thumbnail-makers',
      title: '7 Best Free YouTube Thumbnail Makers (No Design Skills Needed)',
      excerpt: 'Compare the top free thumbnail creation tools. From Canva to Adobe Spark, find the perfect tool for your skill level and budget with our detailed reviews.',
      category: 'Thumbnail Guides',
      categorySlug: 'thumbnail-guides',
      readTime: '10 min read',
      date: 'Feb 10, 2026',
      searchIntent: 'Commercial Investigation - Users comparing tools before choosing'
    },
    {
      slug: 'youtube-algorithm-2026-how-to-rank',
      title: 'YouTube Algorithm 2026: How to Rank Your Videos Faster',
      excerpt: 'Understand how the YouTube algorithm works in 2026. Learn optimization strategies that help your videos appear in search results and recommended sections.',
      category: 'YouTube Tips',
      categorySlug: 'youtube-tips',
      readTime: '12 min read',
      date: 'Feb 8, 2026',
      searchIntent: 'Informational - Creators wanting to understand the algorithm'
    },
    {
      slug: 'how-to-get-1000-subscribers-fast',
      title: 'How to Get Your First 1,000 YouTube Subscribers (Step-by-Step)',
      excerpt: 'Proven strategies to reach your first 1,000 subscribers quickly. Learn content strategies, promotion techniques, and community building tips from successful creators.',
      category: 'Video Growth',
      categorySlug: 'video-growth',
      readTime: '15 min read',
      date: 'Feb 5, 2026',
      searchIntent: 'Informational/Transactional - New creators seeking growth strategies'
    },
    {
      slug: 'youtube-seo-optimization-guide',
      title: 'YouTube SEO: The Complete Optimization Guide for 2026',
      excerpt: 'Master YouTube SEO with our comprehensive guide. Learn keyword research, title optimization, description writing, and tag strategies that drive organic traffic.',
      category: 'YouTube Tips',
      categorySlug: 'youtube-tips',
      readTime: '14 min read',
      date: 'Feb 3, 2026',
      searchIntent: 'Informational - Users wanting to learn SEO techniques'
    },
    {
      slug: 'youtube-monetization-requirements-2026',
      title: 'YouTube Monetization Requirements 2026: Complete Guide',
      excerpt: 'Everything you need to know about YouTube Partner Program requirements. Learn about watch time, subscriber thresholds, and how to get monetized faster.',
      category: 'YouTube Tips',
      categorySlug: 'youtube-tips',
      readTime: '9 min read',
      date: 'Jan 30, 2026',
      searchIntent: 'Informational - Creators wanting to understand monetization'
    },
    {
      slug: 'increase-youtube-views-organically',
      title: 'How to Increase YouTube Views Organically (No Paid Ads)',
      excerpt: 'Discover 15 proven tactics to boost your YouTube views without spending on ads. From thumbnail optimization to playlist strategies, grow your channel naturally.',
      category: 'Video Growth',
      categorySlug: 'video-growth',
      readTime: '11 min read',
      date: 'Jan 28, 2026',
      searchIntent: 'Informational - Creators seeking organic growth methods'
    },
    {
      slug: 'youtube-thumbnail-psychology-colors',
      title: 'The Psychology of YouTube Thumbnail Colors: What Works Best',
      excerpt: 'Learn how color psychology affects click-through rates. Discover which color combinations drive the most engagement and how to use them effectively.',
      category: 'Thumbnail Guides',
      categorySlug: 'thumbnail-guides',
      readTime: '7 min read',
      date: 'Jan 25, 2026',
      searchIntent: 'Informational - Users interested in design psychology'
    },
    {
      slug: 'youtube-channel-growth-hacks',
      title: '15 YouTube Channel Growth Hacks That Actually Work in 2026',
      excerpt: 'Tested and proven growth strategies from top YouTubers. Learn advanced techniques for subscriber growth, engagement, and building a loyal audience.',
      category: 'Video Growth',
      categorySlug: 'video-growth',
      readTime: '13 min read',
      date: 'Jan 22, 2026',
      searchIntent: 'Informational - Users looking for growth strategies'
    }
  ];
  const filteredPosts = categoryFilter 
  ? blogPosts.filter(post => post.categorySlug === categoryFilter)
  : blogPosts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            YouTube Growth Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Expert tips, guides, and strategies to help you grow your YouTube channel, 
            create stunning thumbnails, and master video marketing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    {/* Category Badge */}
                    <Link 
                      to={`/blog/${post.categorySlug}`}
                      className="inline-flex items-center text-sm text-red-600 font-medium mb-3"
                    >
                      <Tag className="h-4 w-4 mr-1" />
                      {post.category}
                    </Link>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-red-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    {/* Read More */}
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-red-600 font-semibold hover:text-red-700"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.slug}>
                    <Link 
                      to={`/blog?category=${category.slug}`}
                      className="flex items-center justify-between text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tool Promo */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Free Thumbnail Downloader</h3>
              <p className="text-red-100 text-sm mb-4">
                Download YouTube thumbnails in HD quality instantly. No registration required.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center text-sm font-semibold bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Try It Now <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
