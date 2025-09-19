import { useState, useEffect, useCallback } from 'react';
import { MapPin, Phone, Mail, Clock, Star, Search, Navigation, ExternalLink } from 'lucide-react';

interface Place {
  place_id: string;
  name: string;
  formatted_address: string;
  formatted_phone_number?: string;
  website?: string;
  opening_hours?: {
    open_now: boolean;
    weekday_text: string[];
  };
  rating?: number;
  user_ratings_total?: number;
  photos?: Array<{
    photo_reference: string;
  }>;
}

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('dermatologist near me');
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  const searchPlaces = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockPlaces: Place[] = [
        
      ];
      
      setPlaces(mockPlaces);
      
    } catch (error) {
      setError('Error searching for places. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const generateGoogleMapsUrl = () => {
    if (userLocation) {
      return `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}/@${userLocation.lat},${userLocation.lng},12z`;
    }
    return `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
  };

  const getGoogleMapsPlaceUrl = (placeId: string) => {
    return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
  };

  useEffect(() => {
    if (userLocation) {
      searchPlaces();
    }
  }, [userLocation, searchPlaces]);

  useEffect(() => {
    searchPlaces();
  }, [searchPlaces]);

  return (
    <div className="min-h-screen bg-white-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Nearby
            <span className="text-black block">Skin Specialists</span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Find certified dermatologists and skin care professionals in your area. 
          </p>
        </div>

        {}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Skin Doctors Near You</h2>
            <p className="text-gray-600">Get To know who is better Doctor in your Area</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Search for dermatologists, skin clinics..."
                  />
                </div>
              </div>
              <button
                onClick={getCurrentLocation}
                className="bg-black text-white btn-solid px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
              >
                <Navigation className="h-5 w-5" />
                <span>Use My Location</span>
              </button>
            </div>
            
            <div className="text-center">
              <button
                onClick={searchPlaces}
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>{loading ? 'Searching...' : 'Search Places'}</span>
              </button>
            </div>
          </div>
        </div>

        {}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map</h2>
            <p className="text-gray-600">Click on the map to search for dermatologists in any area</p>
          </div>
          
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyA6yWFYuxa4E7GlCSnTr6rxP3KCUlY7YuU&q=${encodeURIComponent(searchQuery)}&zoom=12`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dermatologist Search Map"
            ></iframe>
          </div>
          
          <div className="mt-4 text-center">
            <a
              href={generateGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <MapPin className="h-5 w-5" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
