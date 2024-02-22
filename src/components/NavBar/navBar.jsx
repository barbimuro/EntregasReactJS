import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
return(
<nav>
    <h2>Mi tienda de maquillaje</h2>
    <div>
        <button>Pre-Makeup</button>
        <button>Bases y correctores</button>
        <button>Sombras</button>
    </div>
    <CartWidget/>
</nav>
)
}
export default NavBar 