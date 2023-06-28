import React from 'react';
import PropTypes from 'prop-types';
import {
  MenuWrapper,
  MenuList,
  MenuItem,
  MenuLink,
  LogoWrapper,
  LogoIcon,
  ThemeButton,
} from './styles';
import {
  FiSun,
  FiMoon,
  FiHome,
  FiClock,
  FiImage,
  FiDollarSign,
  FiMail,
} from 'react-icons/fi';

const Menu = ({ theme, toggleTheme }) => {
  const iconMapping = {
    Home: FiHome,
    History: FiClock,
    Gallery: FiImage,
    Pricing: FiDollarSign,
    Contact: FiMail,
  };

  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem>
          <MenuLink href="#home">
            <FiHome />
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#history">
            <FiClock />
            History
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#gallery">
            <FiImage />
            Gallery
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#pricing">
            <FiDollarSign />
            Pricing
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact">
            <FiMail />
            Contact
          </MenuLink>
        </MenuItem>
      </MenuList>
      <LogoWrapper href="#home" className="logo">
        <LogoIcon />
        PixelShots
      </LogoWrapper>
      <ThemeButton onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </ThemeButton>
    </MenuWrapper>
  );
};

Menu.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Menu;
