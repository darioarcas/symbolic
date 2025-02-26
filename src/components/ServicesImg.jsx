

export const ServicesImg = ({images}) => {
  return (
    images.map((img, index) =>{
        return <img src={img} key={`${img} - ${index}`} alt={img} style={{width:"150px", margin:"10px"}} />
    })
  )
}
