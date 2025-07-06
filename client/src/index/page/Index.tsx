import { useEffect } from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import HeroImageRight from '../components/hero/HeroImage';
// import { insuranceTypes } from "../components/insurances/insurancesList";
// import InsurancesSection from "../components/insurances/InsurancesSection";
import NewInsuranceSection from '../components/insurances/NewInsuranceSection';
import { ServiceSlider } from '../components/slider/Slider';

export default function Index() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto' si no querés animación
}, []);

  return (
    <>
      <HeroImageRight />
      <NewInsuranceSection />
      <ServiceSlider />
      <Contact />
      <Footer />
    </>
  );
}
