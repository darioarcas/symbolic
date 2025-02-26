import { Link } from "react-router-dom";
import "../index.css";


export const Footer = () => {

    const mensaje = "Hola,%20me%20gustaría%20saber%20sobre...";  // Mensaje predefinido codificado
    const numero = "5493512034249";

    const currentYear = new Date().getFullYear(); 


  return (
    <footer className="mt-5 bg-black w-100">
        <nav>
            <ul className='navbar font-light mb-5'>
                <li>
                    <Link style={{textDecoration: "inherit"}}  to="/home"><p className="navigate-footer">Inicio</p></Link>
                </li>
                <li>
                    <Link style={{textDecoration: "inherit"}} to="/services"><p className="navigate-footer">Servicios</p></Link>
                </li>
                {/* <li>
                    <Link style={{textDecoration: "inherit"}} to="/location"><p className="navigate-footer">Ubicación</p></Link>
                </li> */}
                {/* <li>
                    <Link style={{textDecoration: "inherit"}} to="/contact"><p className="navigate-footer">Contácto</p></Link>
                </li> */}
                <li>
                    <Link style={{textDecoration: "inherit"}} to="/about-us"><p className="navigate-footer">Nosotros</p></Link>
                </li>
            </ul>
        </nav>

        <section className="d-flex justify-content-center gap-3">
            <data className="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#aaaa"}}><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>
                
                <Link style={{textDecoration: "inherit"}} to="/location"><p className="navigate-footer">Tucuman 105</p></Link>
            </data>

            <data className="d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#aaaa"}}><path d="M18 22c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10zm-5-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2z"></path></svg>
                <a href={`https://wa.me/${numero}?text=${mensaje}`} target="_blank" rel="noopener noreferrer" className='icono-whatsapp' style={{cursor:"pointer", textDecoration:"none"}}>
                    <p className="navigate-footer">+54 9 3512 03-4249</p>
                </a>
            </data>

        </section>
        
        
        <h5 className="navigate-footer gothic mt-5">SYMBOLIC {currentYear}</h5>
    </footer>
  )
}
