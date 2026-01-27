import CartWidget from './CartWidget';
import { NavLink } from 'react-router';

export default function NavBar({ }) {
  return (
    <nav>
      <NavLink to="/">
        <h2>TECNOWORLD</h2>
      </NavLink>
      <img width="200" src="https://static.vecteezy.com/system/resources/previews/005/696/554/non_2x/digital-world-technology-logo-vector.jpg" alt="" />

      <ul>
        <li>
          <NavLink to="/category/samsung">Samsung</NavLink>
        </li>



        <li>
          <NavLink to="/category/lg">Lg</NavLink>
        </li>



        <li>
          <NavLink to="/category/lenovo">Lenovo</NavLink>
        </li>



        <li>
          <NavLink to="/category/apple">Apple</NavLink>
        </li>



        <li>
          <NavLink to="/category/ryzen">Ryzen</NavLink>
        </li>



        <li>
          <NavLink to="/category/intel">Intel</NavLink>
        </li>



        <li>
          <NavLink to="/category/hp">Hp</NavLink>
        </li>

      </ul>


<div className="cart-container-nav">
   <CartWidget />
</div>

    </nav>
  )
}