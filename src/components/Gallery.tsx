import { Camera } from 'lucide-react';
import activity1 from '../assets/images/activities1.jpg'
import activity2 from '../assets/images/activities2.jpg'
import activity3 from '../assets/images/activities3.jpg'
import activity4 from '../assets/images/activities4.jpg'
import activity5 from '../assets/images/activities5.jpg'
import activity6 from '../assets/images/activities6.jpg'

const Gallery = () => {
  const galleryImages = [
    {
      src: activity1,
      alt: "Community food distribution event",
      caption: "Food Distribution Drive"
    },
    {
      src: activity2,
      alt: "Community food distribution event",
      caption: "Food Distribution Drive"
    },
    {
      src: activity3,
      alt: "Community food distribution event",
      caption: "Food Distribution Drive"
    },
    {
      src: activity4,
      alt: "Community food distribution event",
      caption: "Food Distribution Drive"
    },
    {
      src: activity5,
      alt: "Club Activity",
      caption: "Club Activity"
    },
    {
      src: activity6,
      alt: "Club meeting and planning session",
      caption: "Monthly Club Meeting"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore highlights from our recent activities and see how we're making a difference 
            in the Marol community through dedicated service and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center mb-2">
                  <Camera className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Activity</span>
                </div>
                <h3 className="font-semibold text-lg">{image.caption}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-8 border">
            <Camera className="w-12 h-12 text-blue-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Share Your Photos</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Have photos from our recent events or activities? We'd love to feature them! 
              Send your photos to help us document our community service journey.
            </p>
            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Submit Photos
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Gallery;