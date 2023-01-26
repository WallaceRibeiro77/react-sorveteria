import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Topo() {
    return(
        <header>
            <div>
                <img src={logo} alt="logo" title="Logo da empresa"/>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/sabores">Sabores</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )    
}
