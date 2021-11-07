const CarouselArrows = ({ direction, onClick, svg }) => {
    return (
        <div onClick={onClick} className={direction + ' arrow'}>
            <svg width="64" height="64" viewBox="0 0 64 64">
                <path d={svg}/>
            </svg>
        </div>
    )
}

export default CarouselArrows
