import { Users, Heart, Globe } from 'lucide-react';
import heroBgImage from '../assets/LionClubHeroImage.jpg'

const Hero = () => {

  return (
    <section id="home" className="relative text-white py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBgImage} alt="Lions Club background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-85"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-yellow-400">We Serve</span>
            <br />
            Marol Community
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering lives, strengthening communities, and creating lasting positive change 
            in Marol, Andheri East through dedicated service and compassionate action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919869253803" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M11.996 0h.006C5.379 0 0 5.379 0 12c0 2.231.612 4.318 1.676 6.111L.58 23.971l6.01-1.078A11.95 11.95 0 0 0 12.002 24C18.62 24 24 18.621 24 12S18.621 0 11.996 0z"/></svg>
              Join Our Mission
            </a>
            {/* <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">50+ Active Members</h3>
            <p className="text-blue-100">Dedicated volunteers serving the Marol community with passion and commitment.</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100+ Lives Touched</h3>
            <p className="text-blue-100">Making a real difference through healthcare, education, and community support programs.</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-900" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local & Global Impact</h3>
            <p className="text-blue-100">Part of Lions Clubs International while focused on local Marol community needs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;