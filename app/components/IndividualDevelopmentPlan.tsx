import React from 'react';

const IndividualDevelopmentPlan: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Individual Development Plan (IDP)</h2>
      <p className="text-lg text-gray-600 mb-4">To help structure and guide your planning in relation to your personal and professional development, we have compiled a simple online IDP template. The IDP is delinked from any formal performance management system to improve the way in which learning is identified, planned for, and funded in any given year.</p>
      <a href="https://witsapps.wits.ac.za/hr/p/idp" className="text-blue-600 underline mb-4 block">Access the online IDP</a>
      <img src="/path/to/idp_screenshot.png" alt="IDP Screenshot" className="my-4 w-full rounded-lg shadow-md"/>
      
      {/* New Additions */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Goal Setting Templates</h3>
        <p className="text-lg text-gray-600">Templates to help you set and track your development goals:</p>
        <a href="/path/to/goal_templates" className="text-blue-600 underline">Download Templates</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Mentorship Opportunities</h3>
        <p className="text-lg text-gray-600">Information about available mentorship programs:</p>
        <a href="/path/to/mentorship_programs" className="text-blue-600 underline">Explore Mentorship Opportunities</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Progress Tracking Tools</h3>
        <p className="text-lg text-gray-600">Tools to track your progress against the IDP:</p>
        <a href="/path/to/progress_tools" className="text-blue-600 underline">View Tracking Tools</a>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Funding Information</h3>
        <p className="text-lg text-gray-600">Details about available funding for professional development activities:</p>
        <a href="/path/to/funding_information" className="text-blue-600 underline">Learn About Funding</a>
      </section>
    </div>
  );
};

export default IndividualDevelopmentPlan;
