import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    //console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div id='galery'>
            <div className='galery-container'>
                <section className='slider'>
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} alt="cat image" className='image' />)}
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    )
}

export default ImageSlider