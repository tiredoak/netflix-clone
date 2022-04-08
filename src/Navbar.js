import React from 'react';

function Navbar() {
  return (
    <div className='nav'>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'
        alt='Netflix Logo'
      />
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Avatar'
      />
    </div>
  );
}

export default Navbar;
