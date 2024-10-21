import { useState, useEffect, useCallback } from 'react'
import banner from "../../../../assets/banner.svg"

export const BannerCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)


    const slides = [
        { id: 1, content: banner, color: 'bg-white' },
        { id: 2, content: banner, color: 'bg-white' }
    ]

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [slides.length])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [slides.length])

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000)
        return () => clearInterval(intervalId)
    }, [nextSlide])

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="relative overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`w-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold ${slide.color}`}
                        >
                            <img src={banner} alt="banner" className="w-[360px] h-[181px] object-cover" />
                        </div>
                    ))}
                </div>
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                    aria-label="Previous slide"
                >
                    &#10094;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
                    aria-label="Next slide"
                >
                    &#10095;
                </button>
            </div>
        </div>
    )
}