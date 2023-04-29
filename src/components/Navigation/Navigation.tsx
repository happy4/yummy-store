import React, { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation() {
  const [isOpened, setIsOpened] = useState(false);
  const [buttonElement, setButtonElement] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const preventReopen = useRef(false);
  const navigate = useNavigate();

  const updateAnchor = useCallback((node: HTMLButtonElement | null) => {
    setButtonElement(node);
  }, []);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }
    setIsOpened((isOpened) => !isOpened);
  }

  const handleMenuClick = (url: string) => {
    setIsOpened(false);
    buttonElement?.focus();
    navigate(url);
  }

  return (
    <div>
      <Menu
        open={isOpened}
        anchorEl={buttonElement}
        onClose={() => {setIsOpened(false)}}
      >
        <MenuItem onClick={() => handleMenuClick('/products')}>
          Home
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick('/shopping-cart')}>
          ShoppingCart
        </MenuItem>
      </Menu>
      <IconButton
        onClick={handleButtonClick}
        ref={updateAnchor}
        type="button"
      >
        <MenuIcon />
      </IconButton>
    </div>
  )
};

export default Navigation;
