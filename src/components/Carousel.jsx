

export const Carousel = ({images}) => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide mx-auto carousel-fade" data-bs-ride="carousel" style={{width:"50%"}}>
        <div className="carousel-inner rounded">
            {images?.map((image, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img src={image} className="d-block w-100" alt={`Imagen ${index + 1}`} />
                </div>
            ))}
            {/* <div className="carousel-item active">
            <img src="/img/destacado/remera-01.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="/img/destacado/remera-03.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="/img/destacado/remera-02.jpg" className="d-block w-100" alt="..."/>
            </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}
