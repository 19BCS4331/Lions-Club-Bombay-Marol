import { Crown, Star, Users, Award, Heart } from 'lucide-react';

const Members = () => {
  const leadership = [
    {
      name: "Babu O. Varghese",
      position: "President",
      years: "2025-26",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      icon: <Crown className="w-5 h-5" />
    },
    // {
    //   name: "Priya Patel",
    //   position: "Vice President",
    //   years: "2024-25",
    //   image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    //   icon: <Star className="w-5 h-5" />
    // },
    {
      name: "Jacob Abraham",
      position: "Secretary",
      years: "2025-26",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "Nikhil N. Gokarn",
      position: "Treasurer",
      years: "2025-26",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      icon: <Star className="w-5 h-5" />
    }
  ];

  return (
    <section id="members" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leaders who guide our club's mission and ensure 
            our service activities make the greatest possible impact in Marol.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leadership.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-blue-900 p-2 rounded-full">
                  {member.icon}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-blue-800 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-1">{member.position}</p>
                <p className="text-gray-500 text-sm">{member.years}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-700" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">52</h3>
            <p className="text-gray-600">Active Members</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">39</h3>
            <p className="text-gray-600">Years of Service</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-800 mb-2">15+</h3>
            <p className="text-gray-600">Annual Projects</p>
          </div>
        </div>

        <div className="mt-16 bg-blue-800 rounded-xl text-white p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Become a Lion</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our passionate community of volunteers and help us continue making a difference 
              in Marol. Together, we can achieve more than we ever could alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Join Our Club
              </button>
              {/* <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Learn About Membership
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;