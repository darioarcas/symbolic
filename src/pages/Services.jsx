import { ServicesImg } from "../components/ServicesImg"


export const Services = () => {
  const imagesRemeras = [
    "/img/remeras-bandas/remera-banda-01.jpg",
    "/img/remeras-bandas/remera-banda-02.jpg",
    "/img/remeras-bandas/remera-banda-03.jpg",
    "/img/remeras-bandas/remera-banda-04.jpg",
    "/img/remeras-bandas/remera-banda-05.jpg",
    "/img/remeras-bandas/remera-banda-06.jpg",
    "/img/remeras-bandas/remera-banda-07.jpg",
    "/img/remeras-bandas/remera-banda-08.jpg",
    "/img/remeras-bandas/remera-banda-09.jpg",
  ]

  const imagesAccessories = [
    "/img/accesorios/billetera-01.jpg",
    "/img/accesorios/billetera-02.jpg",
    "/img/accesorios/billetera-03.jpg",
    "/img/accesorios/billetera-04.jpg",
    "/img/accesorios/billetera-05.jpg",
    "/img/accesorios/choker-01.jpg",
    "/img/accesorios/choker-02.jpg",
    "/img/accesorios/choker-03.jpg",
    "/img/accesorios/choker-04.jpg",
    "/img/accesorios/choker-05.jpg",
    "/img/accesorios/choker-06.jpg",
    "/img/accesorios/choker-07.jpg",
    "/img/accesorios/arnes-01.jpg",
    "/img/accesorios/arnes-02.jpg",
  ]

  const imagesJoyeria = [
    "/img/joyeria/anillo-01.jpg",
    "/img/joyeria/anillo-02.jpg",
    "/img/joyeria/anillo-03.jpg",
    "/img/joyeria/anillo-04.jpg",
    "/img/joyeria/anillo-05.jpg",
    "/img/joyeria/anillo-06.jpg",
    "/img/joyeria/anillo-07.jpg",
    "/img/joyeria/anillo-08.jpg",
    "/img/joyeria/anillo-09.jpg",
    "/img/joyeria/aros-01.jpg",
    "/img/joyeria/aros-02.jpg",
    "/img/joyeria/aros-03.jpg",
    "/img/joyeria/aros-04.jpg",
    "/img/joyeria/aros-05.jpg",
    "/img/joyeria/aros-06.jpg",
    "/img/joyeria/anillos-varios.jpg",
  ]

  const imagesOutFit = [
    "/img/out-fit/of-01.jpg",
    "/img/out-fit/of-02.jpg",
    "/img/out-fit/of-03.jpg",
    "/img/out-fit/of-04.jpg",
    "/img/out-fit/of-05.jpg",
  ]


  return (
    <>
      <header><h4 className="gothic mt-5">Nuestros Productos</h4></header>
      <section className="gothic p-2 mx-auto" style={{maxWidth:"800px"}}>
        <section className="bg-black my-5 py-4">
          <h5>Remeras de bandas</h5>
          <ServicesImg images={imagesRemeras} />
        </section>
        
        <section className="bg-black my-5 py-4">
          <h5>Accesórios</h5>
          <ServicesImg images={imagesAccessories} />
        </section>
        
        <section className="bg-black my-5 py-4">
          <h5>Joyería</h5>
          <ServicesImg images={imagesJoyeria} />
        </section>
        
        <section className="bg-black my-5 py-4">
          <h5>Out fit</h5>
          <ServicesImg images={imagesOutFit} />
        </section>

      </section>
    </>
  )
}
