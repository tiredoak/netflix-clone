import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <img
        className='navbar__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netflix Logo'
      />
      <img
        className='navbar__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Avatar'
      />
    </div>
  );
}

export default Navbar;
