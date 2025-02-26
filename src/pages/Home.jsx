import { Link } from "react-router-dom"
import { ImagesCharge } from "../components/ImagesCharge"


export const Home = () => {
  return (
    <>
      <section className="border-background-logo">
        <img src="/img/logo-simbolic-black.png" alt="Logo" style={{ filter: 'invert(1)', width:"40%", padding:"10px 0px" }} />
      </section>


      <section className="py-3">
        <h4 className="gothic-cursive font-light">Lo más destacado</h4>
        <ImagesCharge/>
        <div className="d-flex justify-content-center">
          <Link className="text-decoration-none gothic p-2" to="/services">
            <p className="bg-black text-white m-0 p-2 rounded">Ver Todo</p>
          </Link>
        </div>
      </section>

      {/* <section className="d-flex justify-content-between px-5">
        <img src="/img/gotic-background/hoja-horizontal-02.png" style={{width:"200px", height:"150px"}} alt="decoracion-01" />
        <img src="/img/gotic-background/hoja-horizontal-03.png" style={{width:"200px", height:"150px"}} alt="decoracion-02" />
      </section> */}


      <section className="bg-black rounded p-3 mx-auto" style={{maxWidth:"800px"}}>
        <h4 className="gothic-cursive font-light mb-4" >Conoce nuestro local</h4>
        <div className="p-0">
          <img src="/img/store-img/store-img-01.jpg" style={{maxWidth:"200px", margin:"20px"}} alt="imagen 01" />
          <img src="/img/store-img/store-img-02.jpg" style={{maxWidth:"200px", margin:"20px"}} alt="imagen 02" />
          <img src="/img/store-img/store-img-03.jpg" style={{maxWidth:"200px", margin:"20px"}} alt="imagen 03" />
          <img src="/img/store-img/store-img-04.jpg" style={{maxWidth:"200px", margin:"20px"}} alt="imagen 04" />
          <img src="/img/store-img/store-img-05.jpg" style={{maxWidth:"200px", margin:"20px"}} alt="imagen 05" />
          <img src="/img/store-img/store-img-06.jpg" style={{maxWidth:"200px", margin:"20px"}} alt="imagen 06" />
        </div>
      </section>



      {/* <div>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1740438530255!6m8!1m7!1sWHEBFx6u0yf3ZpgGu53A0w!2m2!1d-31.41350833492745!2d-64.18759099133182!3f276.8081910138623!4f3.589658214694481!5f0.5689138056040307" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div> */}


      

    </>
  )
}
