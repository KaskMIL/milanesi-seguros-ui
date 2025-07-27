import { useEffect } from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import HeroImageRight from '../components/hero/HeroImage';
// import { insuranceTypes } from "../components/insurances/insurancesList";
// import InsurancesSection from "../components/insurances/InsurancesSection";
import NewInsuranceSection from '../components/insurances/NewInsuranceSection';
import { ServiceSlider } from '../components/slider/Slider';
import { useBreakpoint } from '../../utils/utils';
import WhatsappButton from '../../whatsapp/WhatsApp';
import { data } from '../../utils/data';

export default function Index() {
  const breakpoints = useBreakpoint();
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // o 'auto' si no querés animación
}, []);

  return (
    <>
    {breakpoints.isMobile && (
      <WhatsappButton whatsapp={data.whatsapp.toString()} />
    )}
      <HeroImageRight />
      <NewInsuranceSection />
      <ServiceSlider />
      <Contact />
      <Footer />
    </>
  );
}
