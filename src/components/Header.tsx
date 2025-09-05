import { Menu, Phone, MapPin } from 'lucide-react';
import logo from '../assets/LionsClubMarolLogo.png'

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <Phone size={16} />
              +91 9869253803
            </span>
            {/* <span className="flex items-center gap-2">
              <Mail size={16} />
              marol@lionsindia.in
            </span> */}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Ground Floor, Max Blue Apartments, Below Airport Metro Station, A.K. Road, Marol, Andheri East, Mumbai - 400 059</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-800">Lions Club Of Bombay Marol</h1>
              <p className="text-gray-600 text-sm">Zone 4, Region 2, DIST. 3231 A3</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">About</a>
            <a href="#activities" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Activities</a>
            <a href="#members" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Members</a>
            {/* <a href="#events" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Events</a> */}
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-200 font-medium">Contact</a>
          </div>

          <button className="lg:hidden p-2">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;