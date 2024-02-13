import { NavLink } from "react-router-dom";
function Header() {
    return ( 
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={'/'}>Main</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/works'}>Works</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/blog'}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        
     );
}

export default Header;