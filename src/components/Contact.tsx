import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to join our mission or learn more about our activities? 
            We'd love to hear from you and welcome you to our Lions family.
          </p>
        </div>

        <div className="flex-row gap-8">
          {/* Contact Information */}
          <div className="flex flex-col space-y-6 justify-center">
            <div className="bg-white rounded-xl p-6 shadow-lg flex-col self-center w-[50%]">
              <h3 className="text-xl font-bold text-blue-800 mb-5">Contact Information</h3>
              
              <div className="flex flex-col align-center gap-10 justify-center self-center">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <span className='flex flex-row gap-2'>
                    <p className="text-gray-600">+91 9869253803 /</p>
                    <p className="text-gray-600">+91 8879696098</p>
                    </span>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-yellow-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">marol@lionsindia.in</p>
                    <p className="text-gray-600">president@lionsclubmarol.org</p>
                  </div>
                </div> */}

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-green-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                    Ground Floor, Max Blue Apartments,<br />
                    Below Airport Metro Station, A.K. Road, Marol, <br />
                    Andheri East, Mumbai - 400 059
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Meeting Times</h4>
                    <p className="text-gray-600">
                      1st & 3rd Thursday<br />
                      7:00 PM - 9:00 PM
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="bg-blue-800 text-white rounded-xl p-6 w-[50%] self-center">
              <h3 className="text-xl font-bold mb-4">Emergency Support</h3>
              <p className="text-blue-100 mb-4">
                Need immediate assistance or want to report a community emergency? 
                Our members are here to help.
              </p>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
                Emergency Contact
              </button>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="partnership">Community Partnership</option>
                    <option value="donation">Donation Information</option>
                    <option value="general">General Information</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help you or how you'd like to get involved..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;