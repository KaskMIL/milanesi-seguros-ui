import { useParams } from "react-router";
import InsuranceHero from "../components/InsuranceHero";
import { coverages } from "../../index/components/insurances/insurancesList";
import InsuranceBenefits from "../components/InsuranceBenefits";
import { IconX } from "@tabler/icons-react";
import Contact from "../components/Contact";
import Footer from "../../index/components/footer/Footer";

export default function InsurancePage() {
  const { seguro } = useParams();

  const insurance = coverages.find((cov) => cov.id === seguro) ?? {
    id: 'No se encuentra',
    title: 'No se encuentra',
    description:
      'No se encuentra',
    benefits: [
      { description: 'No se encuentra', icon: IconX}
    ],
    compBenefits: [
      'No se encuentra',
    ],
    image: 'No se encuentra',
    bgImage: 'No se encuentra',
    to: 'No se encuentra',
  }
  return (
    <>
      <InsuranceHero title={insurance.title} description={insurance.description} image={insurance.bgImage}  />
      <InsuranceBenefits benefits={insurance.benefits} />
      <Contact insuranceType={insurance.id} />
      <Footer />
    </>
  )
}