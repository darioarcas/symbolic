import { Carousel } from "./Carousel"


export const ImagesCharge = () => {
    // Array de imágenes
    const images = [
        "/img/remeras-bandas/remera-banda-05.jpg",
        "/img/remeras-bandas/remera-banda-06.jpg",
        "/img/remeras-bandas/remera-banda-07.jpg",
        "/img/remeras-bandas/remera-banda-08.jpg",
        "/img/remeras-bandas/remera-banda-09.jpg",
        // Puedes agregar más imágenes según sea necesario
    ];

  return (
    <>
      <Carousel images={images} />
    </>
  )
}
