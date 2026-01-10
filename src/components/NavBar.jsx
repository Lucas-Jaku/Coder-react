import CartWidget from './Cartwidget';

export default function NavBar({ }) {
  return (
    <nav>
      <h2>TECNOWORLD</h2>
      <img width="200" src="https://static.vecteezy.com/system/resources/previews/005/696/554/non_2x/digital-world-technology-logo-vector.jpg" alt="" />
      <li>
        <a href="#">inicio</a>
      </li> 
      <li>
        <a href="#">Notebooks</a>
      </li>
      <li>
        <a href="#">Pc de escritorio</a>
      </li>
      <li>
        <a href="#">Monitores</a>
      </li>
      <li>
        <a href="#">Celulares</a>
      </li>
      
     <button>{CartWidget ()}</button>
    </nav>
  )
}