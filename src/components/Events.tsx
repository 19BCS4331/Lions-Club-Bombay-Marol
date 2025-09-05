import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      date: "15",
      month: "FEB",
      title: "Monthly Club Meeting",
      time: "7:00 PM - 9:00 PM",
      location: "Marol Community Center",
      type: "Meeting",
      attendees: "Members Only"
    },
    {
      date: "28",
      month: "FEB",
      title: "Free Health Check-up Camp",
      time: "9:00 AM - 4:00 PM",
      location: "Marol Village Ground",
      type: "Service Activity",
      attendees: "Open to Public"
    },
    {
      date: "08",
      month: "MAR",
      title: "International Women's Day Celebration",
      time: "6:00 PM - 8:00 PM",
      location: "Local School Auditorium",
      type: "Special Event",
      attendees: "Community Event"
    },
    {
      date: "22",
      month: "MAR",
      title: "Tree Plantation Drive",
      time: "7:00 AM - 11:00 AM",
      location: "Marol Naka Area",
      type: "Environmental",
      attendees: "Volunteers Welcome"
    }
  ];

  const typeColors = {
    "Meeting": "bg-blue-100 text-blue-800",
    "Service Activity": "bg-green-100 text-green-800",
    "Special Event": "bg-purple-100 text-purple-800",
    "Environmental": "bg-emerald-100 text-emerald-800"
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our latest activities, meetings, and community service events. 
            Join us in making a positive impact in Marol!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="flex">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 flex flex-col items-center justify-center min-w-[100px]">
                  <span className="text-3xl font-bold">{event.date}</span>
                  <span className="text-sm font-medium">{event.month}</span>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-blue-800 group-hover:text-blue-600 transition-colors duration-200">
                      {event.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[event.type]}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{event.attendees}</span>
                    </div>
                  </div>
                  
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-100 rounded-xl p-8">
            <Calendar className="w-16 h-16 text-blue-700 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Regular Meetings</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We meet every first and third Thursday of the month at 7:00 PM at the Marol Community Center. 
              All members are encouraged to attend, and guests are always welcome!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-semibold text-blue-800">When</h4>
                <p className="text-gray-600">1st & 3rd Thursday, 7:00 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-semibold text-blue-800">Where</h4>
                <p className="text-gray-600">Marol Community Center</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow">
                <h4 className="font-semibold text-blue-800">Contact</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;