import React from 'react';
import { FaUsers } from 'react-icons/fa';
import '../UIcss/Clients.css';

const clientsList = [
  { name: "Ni-msme", logo: "/clients/msme.png" },
  { name: "Sadguru Solutions", logo: "/clients/sadguru.png" },
  { name: "Focus Solutions", logo: "/clients/focus.png" },
  { name: "ADP", logo: "/clients/adp.jpg" },
  { name: "CSSI", logo: "/clients/cssi.png" },
  { name: "Suja.Norm Software", logo: "/clients/suja.png" },
  { name: "JNET Technologies", logo: "/clients/jnet.png" },
  { name: "Technolabs", logo: "/clients/techno.png" },
  { name: "Norm Software", logo: "/clients/norm.jpg" },
  { name: "KPMD", logo: "/clients/kpmd.png" },
  { name: "Calibre technologies", logo: "/clients/calibre.jpg"},
  { name: "Fint", logo: "/clients/fint.png"},
  { name: "CJSS", logo: "/clients/cjss.png"},
  { name: "Elemica", logo: "/clients/elemica.jpg"},
  { name: "Kensium", logo: "/clients/kensium.jpg"},
  { name: "Nexgile", logo: "/clients/nexgile.jpg"},
  { name: "Winit", logo: "/clients/winit.jpg"},
  { name: "Aicte", logo: "/clients/Aicte.png"},
  { name: "ICS", logo: "/clients/ics.jpg"},
  { name: "Tecra", logo: "/clients/tecra.png"}
];

const Clients = () => {
  return (
    <section className="clients-section">
      {/* Background Decorations */}
      <div className="dot-pattern-bg"></div>
      <div className="clients-header">
        <div className="clients-badge">
           <FaUsers className="badge-icon" /> Our Network. Our Strength.
        </div>
        <h2>Our Trusted <span>Clients</span></h2>
        <p>Proud to collaborate with leading organizations across diverse industries.</p>
      </div>
      
      <div className="clients-grid">
         {clientsList.map((client, index) => (
            <div key={`client-${index}`} className="client-grid-box">
              <img src={client.logo} alt={client.name} className="client-grid-img" />
            </div>
         ))}
      </div>
    </section>
  );
};

export default Clients;
