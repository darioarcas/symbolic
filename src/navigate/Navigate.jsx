import { Link } from 'react-router-dom'

export const Navigate = () => {
  return (
    <nav>
        <ul className='navbar gothic font-light'>
            <li>
                <Link style={{textDecoration: "inherit"}} to="/home"><p className="m-0">Inicio</p></Link>
            </li>
            <li>
                <Link style={{textDecoration: "inherit"}} to="/services"><p className="m-0">Productos</p></Link>
            </li>
            <li>
                <Link style={{textDecoration: "inherit"}} to="/location"><p className="m-0">Ubicación</p></Link>
            </li>
            <li>
                <Link style={{textDecoration: "inherit"}} to="/contact"><p className="m-0">Contácto</p></Link>
            </li>
            <li>
                <Link style={{textDecoration: "inherit"}} to="/about-us"><p className="m-0">Nosotros</p></Link>
            </li>
        </ul>
    </nav>
  )
}