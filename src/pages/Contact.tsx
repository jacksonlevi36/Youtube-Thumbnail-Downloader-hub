import { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Have a question, suggestion, or need help? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-xl mr-4">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-gray-600 text-sm mb-1">For general inquiries:</p>
                      <a href="mailto:jackson.levi.seo@gmail.com" className="text-red-600 hover:underline">
                        jackson.levi.seo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                      <p className="text-gray-600 text-sm">
                        We typically respond within 24-48 hours during business days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Frequently Asked</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/" className="text-red-600 hover:underline">How do I download thumbnails?</a>
                    </li>
                    <li>
                      <a href="/blog" className="text-red-600 hover:underline">Browse our help articles</a>
                    </li>
                    <li>
                      <a href="/privacy" className="text-red-600 hover:underline">Privacy policy questions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24-48 hours.
                    </p>
                    <Button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/privacy" className="text-red-600 hover:underline">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Using Our Tool?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Check out our comprehensive guides and tutorials in the blog section.
          </p>
          <a 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Visit Our Blog <MessageSquare className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
