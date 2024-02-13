
import wk from '../../img/wk.svg';
import tg from '../../img/tg.svg';
import ok from '../../img/ok.svg';

function Footer() {
    return ( 
        <footer>
            <nav>
                <ul>
                    <li>
                        <img src={wk} alt="1"/>

                    </li>
                    <li>
                        <img src={tg} alt="2"/>
                    </li>
                    <li>
                        <img src={ok} alt="3"/>
                    </li>
                </ul>
            </nav>
            <p>Copyright ©2020 All rights reserved </p>
        </footer>
     );
}

export default Footer;