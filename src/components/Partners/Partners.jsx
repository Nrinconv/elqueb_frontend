import { Image } from '@nextui-org/react';
import './PartnerComponent.css';
import logo1 from '../../assets/partners/amazon.jpg';
import logo2 from '../../assets/partners/google.png';
import logo3 from '../../assets/partners/unal.png';
import logo4 from '../../assets/partners/findeter.png';
import logo5 from '../../assets/partners/gov.png';



function Partners() {
  const partners = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ];

  return (
    <div>
      <h2 className="partners-title">Nuestros Colaboradores</h2>
      <div className="partners-container">
        {partners.map((logo, index) => (
          <Image key={index} src={logo} alt={`Partner ${index}`} width={150} height="auto" />
        ))}
      </div>
    </div>
  );
}
export default Partners;