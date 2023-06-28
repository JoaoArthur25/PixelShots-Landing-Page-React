import styled from 'styled-components';

export const HomeWrapper = styled.div`
  background-color: #f2f2f2;
  padding: 50px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.body};
  align-items: center;
  justify-content: space-between;
`;

export const HomeText = styled.div`
  max-width: 500px;
  text-align: center;
  
  margin-bottom: 40px;
`;

export const HomeTitle = styled.h1`
  font-size: 36px;
  
  color: ${(props) => props.theme.fontColor};
  margin-bottom: 20px;
`;

export const HomeDescription = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.secondaryFontColor};
  margin-bottom: 30px;
  font-weight: bold;
`;

export const HomeLink = styled.a`
  padding: 10px 20px;
  background-color: #333;
  font-weight: bold;
  color: ${(props) => props.theme.menuLinkColor};
  background-color: ${(props) => props.theme.menuLinkBody};
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const HomeImage = styled.div`
  img {
    max-width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 2.0);
  }
`;
