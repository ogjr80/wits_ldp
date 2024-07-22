import React from 'react';

const HolisticStaffDevelopment: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Holistic Staff Development</h2>
      <p className="text-lg text-gray-600 mb-4">It is important to develop ourselves in a more holistic way so that we are agile, resilient, and have the necessary 'hard' and 'soft' skills needed for various situations and contexts.</p>
      <img src="/path/to/holistic_development_model.png" alt="Holistic Development Model" className="my-4 w-full rounded-lg shadow-md"/>
      <p className="text-lg text-gray-600">Both personal and professional development are important across a range of formal, non-formal, and informal opportunities – for example, full qualifications, short courses, skills programs, non-credit bearing learning programs, etc.</p>
      
      {/* New Additions */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Skills Assessment Tools</h3>
        <p className="text-lg text-gray-600">Assess your current skills and identify areas for development using our online tools:</p>
        <a href="/path/to/skills_assessment" className="text-blue-600 underline">Skills Assessment Tool</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Development Paths</h3>
        <p className="text-lg text-gray-600">Choose a development path that aligns with your career goals:</p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Technical Skills Development</li>
          <li>Leadership and Management Training</li>
          <li>Personal Development Courses</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Webinars and Online Courses</h3>
        <p className="text-lg text-gray-600">Access relevant webinars and online courses:</p>
        <a href="/path/to/webinars" className="text-blue-600 underline">View Webinars</a>
        <a href="/path/to/online_courses" className="text-blue-600 underline">View Online Courses</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Resource Library</h3>
        <p className="text-lg text-gray-600">Browse our library of articles, books, and other materials:</p>
        <a href="/path/to/resource_library" className="text-blue-600 underline">Access Resource Library</a>
      </section>
    </div>
  );
};

export default HolisticStaffDevelopment;
