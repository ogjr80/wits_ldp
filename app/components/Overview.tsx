import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">People Development at Wits</h2>
      <p className="text-lg text-gray-600 mb-4">Our competitive edge and sustainability hinge around the professional competence of our staff. As such, the provision of high-quality, cutting-edge learning opportunities is vitally important. There are various avenues or vehicles of formal, non-formal, and informal learning.</p>
      <img src="/path/to/diagram.png" alt="Learning Avenues Diagram" className="my-4 w-full rounded-lg shadow-md"/>
      <p className="text-lg text-gray-600">These avenues of learning are all funded in different ways. For the purposes of this prospectus, we will focus on Professional Staff Development via Central and Faculty teams.</p>
      
      {/* New Additions */}
      <section className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Introduction Video</h3>
        <video className="w-full rounded-lg shadow-md my-4" controls>
          <source src="/path/to/introduction_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      
      <section className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Testimonials</h3>
        <blockquote className="italic text-gray-600 mt-4">"The development programs at Wits have significantly enhanced my skills and career trajectory." - Sarah Lee</blockquote>
        <blockquote className="italic text-gray-600 mt-4">"An invaluable experience that has prepared me for future challenges." - Mark Brown</blockquote>
      </section>

      <section className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h3>
        <details className="mb-4">
          <summary className="cursor-pointer text-blue-600">What types of development programs are available?</summary>
          <p className="text-gray-600">We offer a variety of programs including leadership training, technical skills workshops, and soft skills development.</p>
        </details>
        <details className="mb-4">
          <summary className="cursor-pointer text-blue-600">How can I enroll in a program?</summary>
          <p className="text-gray-600">Enrollment is done through the staff portal. Navigate to the Learning and Development section and select the desired program.</p>
        </details>
      </section>
    </div>
  );
};

export default Overview;
