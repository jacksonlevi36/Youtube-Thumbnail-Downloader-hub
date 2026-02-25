import { useState, useRef } from 'react';
import { Download, Loader2, Image, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ThumbnailData {
  url: string;
  width: number;
  height: number;
  quality: string;
}

const ThumbnailDownloader = ({ onGetThumbnail }: { onGetThumbnail?: () => void }) => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [thumbnails, setThumbnails] = useState<ThumbnailData[]>([]);
  const [videoId, setVideoId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/)([^&\s?]+)/,
      /^([a-zA-Z0-9_-]{11})$/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setThumbnails([]);
    setVideoId(null);
    setImageLoaded(false);

    const extractedId = extractVideoId(url);
    
    if (!extractedId) {
      setError('Please enter a valid YouTube URL');
      return;
    }

    setLoading(true);

    // Simulate loading for better UX
    setTimeout(() => {
      const thumbnailOptions: ThumbnailData[] = [
        {
          url: `https://img.youtube.com/vi/${extractedId}/maxresdefault.jpg`,
          width: 1280,
          height: 720,
          quality: 'Maximum Resolution (HD)'
        },
        {
          url: `https://img.youtube.com/vi/${extractedId}/sddefault.jpg`,
          width: 640,
          height: 480,
          quality: 'Standard Quality (SD)'
        },
        {
          url: `https://img.youtube.com/vi/${extractedId}/hqdefault.jpg`,
          width: 480,
          height: 360,
          quality: 'High Quality (HQ)'
        },
        {
          url: `https://img.youtube.com/vi/${extractedId}/mqdefault.jpg`,
          width: 320,
          height: 180,
          quality: 'Medium Quality (MQ)'
        },
        {
          url: `https://img.youtube.com/vi/${extractedId}/default.jpg`,
          width: 120,
          height: 90,
          quality: 'Default Quality'
        }
      ];

      setThumbnails(thumbnailOptions);
      setVideoId(extractedId);
      setLoading(false);
      if (onGetThumbnail) onGetThumbnail();
    }, 800);
  };

  const handleDownload = async (thumbnailUrl: string, quality: string) => {
    try {
      const response = await fetch(thumbnailUrl);
      if (!response.ok) throw new Error('Failed to fetch image');
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `youtube-thumbnail-${videoId}-${quality.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      // If direct download fails, open in new tab
      window.open(thumbnailUrl, '_blank');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Paste YouTube URL here (e.g., https://youtube.com/watch?v=...)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full h-14 px-4 text-base text-gray-900 bg-white border-2 border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 rounded-xl outline-none transition-all duration-200 placeholder:text-gray-400 caret-red-600"
              style={{ color: '#1f2937' }}
            />
          </div>
          <Button
            type="submit"
            disabled={loading || !url.trim()}
            className="h-14 px-8 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="mr-2 h-5 w-5" />
                Get Thumbnail
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Error Message */}
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Thumbnail Results */}
      {thumbnails.length > 0 && videoId && (
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <Image className="mr-2 h-5 w-5 text-red-600" />
            Available Thumbnails
          </h3>

          {/* Preview Image */}
          <div className="mb-8">
            <p className="text-sm font-medium text-gray-700 mb-3">Preview (Maximum Resolution):</p>
            <div className="relative rounded-xl overflow-hidden bg-gray-100 border-2 border-gray-200 shadow-inner">
              <img
                src={thumbnails[0].url}
                alt="YouTube Thumbnail Preview"
                className={`w-full h-auto object-contain mx-auto transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = thumbnails[2]?.url || thumbnails[4]?.url;
                }}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          {/* Download Options */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-700">Select resolution to download:</p>
            <div className="grid grid-cols-1 gap-3">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border-2 border-gray-100 rounded-xl hover:border-red-300 hover:bg-red-50 transition-all duration-300 hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Image className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{thumb.quality}</p>
                      <p className="text-xs text-gray-500">{thumb.width} x {thumb.height}px</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => handleDownload(thumb.url, thumb.quality)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800">
              <strong>Tip:</strong> Maximum Resolution (HD) provides the best quality but may not be available for all videos. 
              If the HD version doesn't load, try Standard Quality (SD) instead.
            </p>
          </div>
        </div>
      )}

      {/* Initial State - Instructions */}
      {!thumbnails.length && !loading && !error && (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Download className="h-8 w-8 text-red-600" />
          </div>
          <p className="text-gray-600">
            Paste any YouTube video URL above to extract and download thumbnails
          </p>
        </div>
      )}
    </div>
  );
};

export default ThumbnailDownloader;
