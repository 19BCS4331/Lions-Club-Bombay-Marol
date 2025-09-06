import React from 'react';
import { Award, Target, Eye } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">About Lions Club Marol</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Established in 1971, Lions Club Marol has been a cornerstone of community service 
            in the bustling Marol area of Andheri East, Mumbai. We are proud members of Lions 
            Clubs International, the world's largest service club organization.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by a group of passionate individuals who saw the growing needs of the Marol 
              community, our club has evolved into a dynamic force for positive change. From our 
              humble beginnings with 15 charter members, we have grown to over 50 active Lions 
              committed to serving our neighborhood.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Located in the heart of Mumbai's business district, we understand the unique challenges 
              faced by urban communities. Our initiatives focus on healthcare, education, environment 
              conservation, and support for the underprivileged families in and around Marol.
            </p>
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">"We Serve"</h4>
              <p className="text-blue-100">
                This simple motto drives everything we do. Every project, every initiative, 
                every volunteer hour is dedicated to serving others and making our community stronger.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">Our Mission</h4>
                  <p className="text-gray-700">
                    To empower volunteers to serve their communities, meet humanitarian needs, 
                    encourage peace, and promote international understanding through Lions clubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">Our Vision</h4>
                  <p className="text-gray-700">
                    To be the global leader in community and humanitarian service, creating 
                    a Marol where people are proud to live, work, and thrive together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">Our Values</h4>
                  <p className="text-gray-700">
                    Integrity, compassion, respect, excellence, and accountability guide 
                    every action we take in service to our community and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;