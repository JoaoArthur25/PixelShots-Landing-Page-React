import styled from 'styled-components';

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #1b1a1a;
  height: 100%;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    height: 90px;
    width: 120%;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 24px;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
    justify-content: center;
    
  }

  @media screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const MenuItem = styled.li`
  margin: 15px;
  margin-top: 5px;

  @media screen and (max-width: 1000px) {
    margin: 5px;
  }

  @media screen and (max-width: 600px) {
    margin: 5px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.fontColorMenu};
  font-size: 16.3px;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-right: 5px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const LogoWrapper = styled.a`
  position: absolute;
  left: 7.8%;
  top: 10px;
  transform: translateX(-50%);
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.fontColorMenu};
  display: flex;
  align-items: center;

  @media screen and (max-width: 1300px) {
    left: 8.3%;
  }

  @media screen and (max-width: 1000px) {
    left: 50%;
  }
  

  &:hover {
    opacity: 0.7;
  }
`;

export const LogoIcon = styled.div`
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.fontColorMenu};
  border-radius: 50%;
  margin-right: 10px;

  

  &:hover {
    opacity: 0.7;
  }
`;

export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 30px;
  margin-top: 12px;
  font-size: 20px;
  color: ${(props) => props.theme.fontColorMenu};
  cursor: pointer;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin-top: 22px;
    margin-left: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 28px;
    margin-left: 20px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
