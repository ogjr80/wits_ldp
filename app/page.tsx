'use client'; 


import Image from "next/image";
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import ProfessionalStaffDevelopment from './components/ProStaffDevelopment';
import StaffDevelopmentTeams from './components/StaffDevelopmentTeams';
import HolisticStaffDevelopment from './components/HolisticStaffDevelopment';
import ConsolidatedStaffDevelopmentPlatform from './components/ConsolidatedStaffDevelopment'
import IndividualDevelopmentPlan from './components/IndividualDevelopmentPlan';
import ContactInformation from './components/ContactInformation';

const Home = () => {
  const [currentTab, setCurrentTab] = useState('Overview');
  
  const renderTabContent = () => {
    switch (currentTab) {
      case 'Overview':
        return <Overview />;
      case 'Professional Staff Development':
        return <ProfessionalStaffDevelopment />;
      case 'Staff Development Teams':
        return <StaffDevelopmentTeams />;
      case 'Holistic Staff Development':
        return <HolisticStaffDevelopment />;
      case 'Consolidated Staff Development Platform':
        return <ConsolidatedStaffDevelopmentPlatform />;
      case 'Individual Development Plan':
        return <IndividualDevelopmentPlan />;
      case 'Contact Information':
        return <ContactInformation />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="p-6">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Home;
