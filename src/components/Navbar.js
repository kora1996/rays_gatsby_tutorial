import { Link } from 'gatsby'
import React from 'react'
import {FaAlignJustify} from 'react-icons/fa'
import {logo} from '../assets/images/logo.svg'
import {big} from '../assets/images/big.jpg'
import {dog} from '../assets/images/dog.jpg'

const Navbar = () => {

  const [show, setShow] = React.useState(false)

  return (

    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={big} alt="simply recipe" />
          </Link>

          <button className="nav-btn" onClick={()=>setShow(!show)}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show?'nav-links show-links': 'nav-links'}>
          <Link to='/' className='nav-link' activeClassName='active-link'onClick={()=>setShow(false)}>home</Link>
          <Link to='/recipe' className='nav-link' activeClassName='active-link'onClick={()=>setShow(false)}>recipe</Link>
          <Link to='/about' className='nav-link' activeClassName='active-link'onClick={()=>setShow(false)}>about</Link>
          <Link to='/tags' className='nav-link' activeClassName='active-link'onClick={()=>setShow(false)}>tags</Link>
          <div className="nav-link contact-link"><Link to='/contact' className='btn'onClick={()=>setShow(false)}>contact</Link></div>
        </div>
      </div>
    </nav>
    // <div>
      /* <nav>
        < FiAlignJustify />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/tags'>Tags</Link></li>
          <li><Link to='/recipe'>Recipes</Link></li>
        </ul>
      </nav> */
    // </div>
  )
}

export default Navbar