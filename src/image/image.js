const ImageComponent=(nav)=>{
    return (
        <img src={nav.data.image} style={{width:200}}></img>
        // <img src={nav.item.image} style={{width:200}}></img>
    )

}
export default ImageComponent