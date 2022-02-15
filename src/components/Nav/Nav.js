import { NavLink } from "react-router-dom";
import "./Nav.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from "react";
import Cart from "../Cart";

const NavBar = ({favouriteCharacter}) => {
  const [showCart, setShowCart] = useState(false)
  function handlerCard(){
    if(showCart){
      setShowCart(false)
    }else{
      setShowCart(true)
    }
  }
  return (
    <nav className="Navigation">
      <NavLink  activeClassName="active" to="/" className="logo" >
          GITHUB
        </NavLink>
      <ul className="List-ul">
        <NavLink activeClassName="active" to="/" className="Link">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/about" className="Link">
          About
        </NavLink>
        <NavLink activeClassName="active" to="/contact" className="Link">
          Contact
        </NavLink>
        <button onClick={handlerCard}>
          <ShoppingCartIcon/>
        </button> 
      </ul>

      {
        showCart
      
        ?

        <Cart favouriteCharacter={favouriteCharacter}/>

        :

        null


      }


      
    </nav>
  );
};

export default NavBar;