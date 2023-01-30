import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import './style.css';

export default function Topo() {
    return(
        <header>
            <div className="limitar-secao">
                <img src={logo} alt="logo" title="Logo da empresa"/>
                <nav>
                    <Link className="link-topo" to="/">Home</Link>
                    <Link className="link-topo" to="/sabores">Sabores</Link>
                    <Link className="link-topo" to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )    
}
