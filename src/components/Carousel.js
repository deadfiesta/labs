import React, { useState, useEffect, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import Arrow from './CarouselArrows'

const EmblaCarousel = ({ slides }) => {
    const duration = 700;
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [time, setTime] = useState(duration);
    const percentage = time/duration * -100 + '%';

    const scrollTo = useCallback((index) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect  = useCallback(() => {
        if (!emblaApi) return;
        setTime(duration);
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi])


    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on('select', onSelect)
        const timer = time > 0 && setInterval(()=> setTime(time - 1), 10);
        if (time === 0) {
            setTime(duration);
            scrollNext();
        }
        return () => {
            clearInterval(timer)};
    }, [emblaApi, onSelect, time, scrollNext])

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((slide) => (
                        <div key={slide.id} style={{ backgroundImage: "url(" + slide.url + ")" }} className="embla__slide">
                            <h1 className="title">{slide.title}</h1>
                            <h2>{slide.description}</h2>
                        </div>
                    ))}
                </div>
                <div className="arrow__container">
                    <Arrow onClick={scrollPrev} direction={'arrow__prev'} svg={'M32.2843 60.5686L4.00003 32.2843L32.2843 4.00006'} />
                    <Arrow onClick={scrollNext} direction={'arrow__next'} svg={'M32.2843 4L60.5686 32.2843L32.2843 60.5685'}/>
                    <ul className="dot__container">
                    {slides.map((slide, index) => (
                        <li className={index === selectedIndex ? "selected" : ""} key={slide.id} onClick={() => scrollTo(slide.id)}><span style={{transform: index === selectedIndex ? `translatex(${percentage})` : ""}} className={index === selectedIndex ? "" : "inactive"}></span></li>
                    ))}
                </ul>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel