import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import HeroImageRight from "../components/hero/HeroImage";
// import { insuranceTypes } from "../components/insurances/insurancesList";
// import InsurancesSection from "../components/insurances/InsurancesSection";
import NewInsuranceSection from "../components/insurances/NewInsuranceSection";
import { ServiceSlider } from "../components/slider/Slider";

export default function Index() {
  return (
    <>
            <HeroImageRight />
            <NewInsuranceSection />
            {/* <section id="seguros">
              {insuranceTypes.map((item, idx) => (
                <InsurancesSection
                  key={item.id}
                  imagePosition={idx % 2 === 0 ? "right" : "left"}
                  insurance={item}
                />
              ))}
            </section> */}
            <ServiceSlider />
            <Contact />
            <Footer />
          </>
  )
}