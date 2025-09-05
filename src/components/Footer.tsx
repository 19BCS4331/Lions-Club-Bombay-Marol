import { Heart, Phone, MapPin } from 'lucide-react';
import logo from '../assets/LionsClubMarolLogo.png'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Lions Club Of Mumbai Marol</h3>
                <p className="text-blue-200">Zone 4, Region 2, DIST. 3231 A3</p>
              </div>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Serving the Marol community since 1985, we are dedicated to creating positive change 
              through compassionate service, community engagement, and humanitarian initiatives 
              that address local needs and strengthen our neighborhood bonds.
            </p>
            <div className="flex items-center space-x-2 text-blue-200">
              <Heart className="w-4 h-4" />
              <span className="text-sm">"We Serve" - Lions Clubs International</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#activities" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Our Activities</a></li>
              <li><a href="#members" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Leadership</a></li>
              {/* <li><a href="#events" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Upcoming Events</a></li> */}
              {/* <li><a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Membership</a></li> */}
              {/* <li><a href="#" className="text-blue-200 hover:text-yellow-400 transition-colors duration-200">Donate</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-200">+91 9869253803</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-200">marol@lionsindia.in</span>
              </li> */}
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-1" />
                <span className="text-blue-200">
                Ground Floor, Max Blue Apartments, Below Airport <br />
                    Metro Station, A.K. Road, Marol, <br />
                    Andheri East, Mumbai - 400 059
                </span>
              </li>
            </ul>

            {/* <div className="mt-6 pt-6 border-t border-blue-800">
              <h5 className="font-semibold mb-2">Meeting Schedule</h5>
              <p className="text-blue-200 text-sm">
                Every 1st & 3rd Thursday<br />
                7:00 PM - 9:00 PM
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Lions Club Bombay Marol. All rights reserved.</p>
            </div>
          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;