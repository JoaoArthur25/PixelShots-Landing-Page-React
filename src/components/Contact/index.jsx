import React from 'react';
import {
  ContactSection,
  ContactWrapper,
  ContactText,
  ContactTitle,
  ContactDescription,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
  ContactImage,
} from './styles';

const contactImage = require('../../images/contact.jpg');

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactWrapper>
        <ContactText>
          <ContactTitle>Contact Us</ContactTitle>
          <ContactDescription>
            We would love to hear from you. Fill out the form below and we will
            get back to you as soon as possible.
          </ContactDescription>
        </ContactText>
        <ContactForm>
          <ContactInput type="text" placeholder="Your Name" />
          <ContactInput type="email" placeholder="Your Email" />
          <ContactTextarea placeholder="Your Message" />
          <ContactButton>Send Message</ContactButton>
        </ContactForm>
      </ContactWrapper>
      <ContactImage image={contactImage} />
    </ContactSection>
  );
};

export default Contact;
