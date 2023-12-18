// import  React from 'react'
import { Link } from 'react-router-dom';
import water_logo from '../../assets/img/water_logo_image.jpg';
import juice_logo from '../../assets/img/juice_image.jpg';
import dairy_logo from '../../assets/img/dairy_image.jpg';
import acces_logo from '../../assets/img/acces_image.jpg';


import './NavBar.css';


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-tabs">
        <div className="tab">
            <Link to={'/products/water'} className='tab-link'>
                <img className='tab-img' src={water_logo} width={45} height={45} />
                <span className='tab-text'>Water</span>
            </Link>
        </div>
        <div className="tab">
            <Link to={'/products/juice'} className='tab-link'>
                <img className='tab-img' src={juice_logo} width={45} height={45} />
                <span className='tab-text'>Juice</span>
            </Link>
        </div>
        <div className="tab">
            <Link to={'/products/dairy'} className='tab-link'>
                <img className='tab-img' src={dairy_logo} width={45} height={45} />
                <span className='tab-text'>Dairy</span>
            </Link>
        </div>
        <div className="tab">
            <Link to={'/products/accessories'} className='tab-link'>
                <img className='tab-img' src={acces_logo} width={45} height={45} />
                <span className='tab-text'>Accessories</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
