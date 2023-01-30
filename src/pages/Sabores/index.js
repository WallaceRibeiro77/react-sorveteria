import Topo from "../../components/Topo";
import Footer from "../../components/Footer";

import oreo from '../../assets/sabor-oreo.png';
import pistache from '../../assets/sabor-pistache.png';
import cookiesAvela from '../../assets/sabor-cookies-avela.png';
import kiwi from '../../assets/sorbet-kiwi.png';
import morango from '../../assets/sorbet-morango.png';
import limao from '../../assets/sorbet-limao.png';

import './style.css';

export default function Sabores() {
  return(
    <div>
      <Topo />
      <main>
        <section className="secao-banner-sabores">
          <div className="titulo-banner-sabores">
            <h1>NOSSOS SABORES</h1>
          </div>
        </section>

        <section className="limitar-secao secao-sabores">
          <h2>SABORES DE SORVETE</h2>
          <div className="container-sorvetes">
            <div className="box-sorvete">
              <img src={oreo} alt="sorvete sabor oreo"/>
              <h3>Sorvete de Oreo</h3>
              <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
            </div>
            <div className="box-sorvete">
              <img src={pistache} alt="sorvete sabor pistache"/>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
            </div>
            <div className="box-sorvete">
              <img src={cookiesAvela} alt="sorvete sabor cookie com avelã"/>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
            </div>
            <div className="box-sorvete">
              <img src={kiwi} alt="sorbet sabor kiwi"/>
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
            </div>
            <div className="box-sorvete">
              <img src={morango} alt="sorbet sabor morango"/>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
            </div>
            <div className="box-sorvete">
              <img src={limao} alt="sorbet limão siciliano"/>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}