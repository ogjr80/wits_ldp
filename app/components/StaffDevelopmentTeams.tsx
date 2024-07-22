import React from 'react';

const StaffDevelopmentTeams: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Staff Development via Internal Faculty and Central Teams</h2>
      <p className="text-lg text-gray-600 mb-4">The University offers staff development at no cost via the central and faculty T&L teams, facilitated in accordance with the Skills Development Act and Skills Development Levies Act.</p>
      <p className="text-lg text-gray-600 mb-4">This funding is used to offset the operating costs of these staff development teams.</p>
      <img src="/path/to/staff_development_teams.png" alt="Staff Development Teams" className="my-4 w-full rounded-lg shadow-md"/>
      
      {/* New Additions */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Team Introductions</h3>
        <p className="text-lg text-gray-600">Meet the key members of our staff development teams:</p>
        <ul className="list-disc ml-6 text-gray-600">
          <li>Dr. John Doe - Head of Training and Development</li>
          <li>Ms. Jane Smith - Senior Training Specialist</li>
          <li>Mr. Richard Roe - Training Coordinator</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Interactive Team Map</h3>
        <img src="/path/to/team_map.png" alt="Team Map" className="my-4 w-full rounded-lg shadow-md"/>
      </section>
      
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Available Resources</h3>
        <ul className="list-disc ml-6 text-gray-600">
          <li>E-learning modules</li>
          <li>Training materials</li>
          <li>Support contacts</li>
        </ul>
      </section>
    </div>
  );
};

export default StaffDevelopmentTeams;
