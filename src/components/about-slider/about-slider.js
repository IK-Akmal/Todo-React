import './about-slider.css'
import Slider from 'react-slick'
import poster1 from '../../images/1.png'
import poster2 from '../../images/2.png'
import poster3 from '../../images/3.png'
import poster4 from '../../images/4.png'
import poster5 from '../../images/5.png'


function AboutSlider() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <h2> Responsive </h2>
            <Slider {...settings}>
                <div>
                    <img src={poster1} alt="" />
                </div>
                <div>
                    <img src={poster2} alt="" />
                </div>
                <div>
                    <img src={poster3} alt="" />
                </div>
                <div>
                    <img src={poster4} alt="" />
                </div>
                <div>
                    <img src={poster5} alt="" />
                </div>
            </Slider>
        </div>
    )
}


export default AboutSlider