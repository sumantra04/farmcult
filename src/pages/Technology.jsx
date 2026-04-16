import React from 'react';
import WfcHeader from '../components/WhyFarmcult/WfcHeader';
import SmartIntegration from '../components/technology/SmartIntegration';
import IotMonitoring from '../components/technology/IotMonitoring';
import ContactSection from '../components/Shared/ContactSection';
import TechCards from '../components/technology/TechCards';
import Footer from '../components/Shared/Footer';


const Technology = () => {
  return (
    <div className="technology-page">
      <WfcHeader
        tag="TECHNOLOGY"
        title="Technology That Powers Every Farm"
        subtitle="Smart systems working quietly behind the scenes. Monitoring, optimising, and improving performance every day."
        image="/technology/technology_header.jpeg"
        variant="dark"
      />
      <SmartIntegration />
      <IotMonitoring />
      <TechCards />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Technology;
