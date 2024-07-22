import React from 'react';

const ContactInformation: React.FC = () => {
  return (
    <div className="animate-fadeIn p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Information</h2>
      <ul className="text-lg text-gray-600 space-y-2">
        <li>Dr. Chantelle Murray - <a href="mailto:Chantelle.Murray@wits.ac.za" className="text-blue-600 underline">Chantelle.Murray@wits.ac.za</a> / 011 717 1471</li>
        <li>Megan Thulukanam - <a href="mailto:Megan.Thulukanam@wits.ac.za" className="text-blue-600 underline">Megan.Thulukanam@wits.ac.za</a> / 011 717 1486</li>
        <li>Ms. Megha Joory - <a href="mailto:Megha.joory@wits.ac.za" className="text-blue-600 underline">Megha.joory@wits.ac.za</a> / 011 717 1472</li>
        <li>Nosipho Mpangase - <a href="mailto:nosipho.mpangase@wits.ac.za" className="text-blue-600 underline">nosipho.mpangase@wits.ac.za</a> / 011 717 1472</li>
      </ul>
      
      {/* New Additions */}
      <section className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Live Chat Support</h3>
        <p className="text-lg text-gray-600">Chat with our HR team during working hours for immediate assistance:</p>
        <a href="/path/to/live_chat" className="text-blue-600 underline">Start Live Chat</a>
      </section>
      
      <section className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Feedback Form</h3>
        <p className="text-lg text-gray-600">Provide feedback or request additional information:</p>
        <a href="/path/to/feedback_form" className="text-blue-600 underline">Give Feedback</a>
      </section>
      
      <section className="mt-6">
        <h3 className="text-2xl font-semibold text-gray-800">Office Hours</h3>
        <p className="text-lg text-gray-600">Visit our HR team during office hours for in-person support:</p>
        <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
      </section>
    </div>
  );
};

export default ContactInformation;
