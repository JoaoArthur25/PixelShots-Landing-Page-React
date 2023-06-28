import styled from 'styled-components';

export const ContactSection = styled.section`
  position: relative;
  padding: 50px;
  text-align: center;
`;

export const ContactWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ContactText = styled.div`
  margin-bottom: 20px;
`;

export const ContactTitle = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const ContactDescription = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.secondaryFontColor};
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  
`;

export const ContactInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => props.theme.secondaryBody};
`;

export const ContactTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${(props) => props.theme.secondaryBody};
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.menuLinkBody};
  color: ${(props) => props.theme.menuLinkColor};
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const ContactImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`;
