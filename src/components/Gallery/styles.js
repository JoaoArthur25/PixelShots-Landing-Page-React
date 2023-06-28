import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 50px;
  text-align: center;
  background-color: ${(props) => props.theme.body};
`;

export const GalleryTitle = styled.h1`
  font-size: 36px;
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 40px;
`;

export const GalleryImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 2.0);
`;
