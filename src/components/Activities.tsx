import React from 'react';
import { Heart, GraduationCap, Leaf, HandHeart } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare Initiatives",
      description: "Free health check-up camps, eye screening programs, and medical support for underprivileged families in Marol.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400",
      stats: "200+ beneficiaries"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education Support",
      description: "Scholarship programs, school supply donations, and educational workshops for children in local communities.",
      image: "https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=400",
      stats: "1000+ students supported"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Environmental Conservation",
      description: "Tree plantation drives, clean-up campaigns, and environmental awareness programs in Marol area.",
      image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=400",
      stats: "500+ trees planted"
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: "Community Outreach",
      description: "Food distribution, disaster relief, elderly care programs, and support for local NGOs and charities.",
      image: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=400",
      stats: "1000+ meals distributed"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Our Service Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through various initiatives, we address the pressing needs of our Marol community, 
            creating lasting positive impact in the lives of those we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 right-4 bg-yellow-500 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {activity.stats}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl text-white p-8 text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Want to Get Involved?</h3>
          <p className="text-blue-100 mb-6">
            Join us in making a difference in the Marol community. Every helping hand matters!
          </p>
          <a href="https://wa.me/919869253803?text=I+want+to+join+Lions+Club+Marol%21" target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center w-[100%] md:w-[25%]">
            Volunteer With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Activities;