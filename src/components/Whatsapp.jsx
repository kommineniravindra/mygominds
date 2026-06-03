import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../css/Whatsapp.css';

const Whatsapp = () => {
  const phoneNumber = "918885302122"; // The number from the footer
  const message = "Hello MygoMinds, I would like to know more about your batches.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default Whatsapp;
