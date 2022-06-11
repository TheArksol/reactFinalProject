import React from 'react';
import Style from './Header.css';

const PageHeader = ({ }) => {


  return (
    <div id='header' className='header'>
      <div>
        <p>ICON</p>
        <p>TITLE</p>
        <p>CONTACT</p>

      </div>
      <div>
        <p>NEW_POST</p>
        <p>LOGIN</p>
      </div>


    </div>
  )
}

export default PageHeader;