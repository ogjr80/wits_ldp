import React from 'react';

const ProfessionalStaffDevelopment: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Professional Staff Development</h2>
      <p className="text-lg text-gray-600 mb-4">The provision of high-quality, cutting-edge learning opportunities is vitally important. There are various avenues or vehicles of formal, non-formal, and informal learning.</p>
      <img src="/path/to/professional_staff_development.png" alt="Professional Staff Development" className="my-4 w-full rounded-lg shadow-md"/>
      
      {/* New Additions */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Detailed Program Descriptions</h3>
        <p className="text-lg text-gray-600">Our programs are designed to help you develop skills that are critical for professional growth.</p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Leadership Training</li>
          <li>Technical Skills Workshops</li>
          <li>Soft Skills Development</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Upcoming Workshops/Seminars</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Leadership in the Digital Age - August 5, 2024</li>
          <li>Advanced Data Analytics - September 10, 2024</li>
          <li>Effective Communication Skills - October 15, 2024</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Enrollment Procedures</h3>
        <p className="text-lg text-gray-600">Follow these steps to enroll in our development programs:</p>
        <ol className="list-decimal ml-6 text-gray-600">
          <li>Log in to the staff portal.</li>
          <li>Navigate to the Learning and Development section.</li>
          <li>Select the program you are interested in and click 'Enroll'.</li>
        </ol>
      </section>
      
      <section>
        <h3 className="text-2xl font-semibold text-gray-800">Success Stories</h3>
        <p className="text-lg text-gray-600">Hear from our staff members who have benefited from our programs:</p>
        <div className="bg-gray-100 p-4 rounded-lg shadow-inner mt-4">
          <blockquote className="italic text-gray-600">"The leadership training program was a game-changer for my career. I've grown so much in my role." - Jane Doe</blockquote>
          <blockquote className="italic text-gray-600 mt-4">"The workshops on data analytics have really helped me stay ahead in my field." - John Smith</blockquote>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalStaffDevelopment;
