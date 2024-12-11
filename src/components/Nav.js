import { useState } from 'react';
import logo from '../assets/Logo.svg';

const Nav = () =>{

    const [menuOpen,setMenuOpen] = useState(false);


    const toogleMenu = () =>{
        setMenuOpen(!menuOpen);
        console.log("clicked menu")
    }

    return(
        <nav>


            {/* desktop menu */}
            <div className='nav-menu'>
                <a href='#'>
                    <img className='logoImg' src={logo} alt='logo-image' />
                </a>

                <ul>
                    <li>
                        <a href='#'>Home</a>
                    </li>

                    <li>
                        <a href='#'>About</a>
                    </li>

                    <li>
                        <a href='#'>Menu</a>
                    </li>

                    <li>
                        <a href='#'>Reservations</a>
                    </li>

                    <li>
                        <a href='#'>Order Online</a>
                    </li>

                    <li>
                        <a href='#'>Login</a>
                    </li>
                </ul>

                {/* mobile menu */}
                <div className={`mobile-menu ${menuOpen ? "visible" : ""}`} onClick={toogleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>

                <div className={`mobile-link ${menuOpen ? "visible" : ""}`}>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>

                        <li>
                            <a href='#'>About</a>
                        </li>

                        <li>
                            <a href='#'>Menu</a>
                        </li>

                        <li>
                            <a href='#'>Reservations</a>
                        </li>

                        <li>
                            <a href='#'>Order Online</a>
                        </li>

                        <li>
                            <a href='#'>Login</a>
                        </li>
                    </ul>
                </div>
                {/* mobile menu end*/}
            </div>
        </nav>
    )
}

export default Nav;