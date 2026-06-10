import React from 'react';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import '../css/Whatsapp.css';

const Whatsapp = () => {
  const phoneNumber = "918885302122"; // The number from the footer
  const message = "Hello MygoMinds, I would like to know more about your batches.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  const telegramUrl = `https://t.me/mygominds`; // Adjust username if necessary

  return (
    <div className="floating-contacts">
      <a 
        href={telegramUrl} 
        className="telegram-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on Telegram"
      >
        <FaTelegramPlane className="whatsapp-icon" />
      </a>
      <a 
        href={whatsappUrl} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default Whatsapp;
