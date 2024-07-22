import React from 'react';

const ConsolidatedStaffDevelopmentPlatform: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Consolidated Staff Development Platform</h2>
      <p className="text-lg text-gray-600 mb-4">In 2023, a mapping exercise led to the development of a Consolidated Staff Development Platform to make it easier for staff members to find various teams and offerings. The platform is housed under the 'People' section of the Wits website.</p>
      <a href="https://www.wits.ac.za/people/learning-and-development/" className="text-blue-600 underline mb-4 block">Visit the Consolidated Staff Development Platform</a>
      <img src="/path/to/platform_screenshot.png" alt="Consolidated Staff Development Platform" className="my-4 w-full rounded-lg shadow-md"/>
      
      {/* New Additions */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">User Guide</h3>
        <p className="text-lg text-gray-600">A detailed guide to help you navigate the platform:</p>
        <a href="/path/to/user_guide" className="text-blue-600 underline">View User Guide</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Interactive Tutorials</h3>
        <p className="text-lg text-gray-600">Watch short video tutorials on using the platform:</p>
        <video className="w-full rounded-lg shadow-md my-4" controls>
          <source src="/path/to/tutorial_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Feedback Mechanism</h3>
        <p className="text-lg text-gray-600">Provide feedback on the platform and suggest improvements:</p>
        <a href="/path/to/feedback_form" className="text-blue-600 underline">Give Feedback</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Data Insights</h3>
        <p className="text-lg text-gray-600">View insights and reports on platform engagement:</p>
        <a href="/path/to/data_insights" className="text-blue-600 underline">View Data Insights</a>
      </section>
    </div>
  );
};

export default ConsolidatedStaffDevelopmentPlatform;
