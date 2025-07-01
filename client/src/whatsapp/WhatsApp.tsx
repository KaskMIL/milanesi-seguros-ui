// import whatsapp from "/assets/whatsapp.svg";
// import { companyData } from "../data/companyData";

interface WhatsappButtonProps {
  whatsapp: string;
};

const WhatsappButton = (props: WhatsappButtonProps) => {
  const phoneNumber = props.whatsapp;
  return (
    <div style={{ zIndex: 10000, position: 'fixed', bottom: 30, right: 30}}>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={'/assets/logo-whatsapp.png'} style={{ width: '80px', height: 'auto'}} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhatsappButton;
