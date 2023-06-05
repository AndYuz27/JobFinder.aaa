export default function Carousel({children, width}) {
    return (
        <div className="carousel-item" style={{width: width}}>
            {children}
        </div>
    )
}