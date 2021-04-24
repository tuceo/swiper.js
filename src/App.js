import './App.css';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

function App() {
    const slides = [10,11,12,13,14,15]
  return (
    <div className="App">
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation
        >
            {slides.map((item) => {
                return(
                    <SwiperSlide key={item}>
                        <img className="swiper-img" src={"https://picsum.photos/id/" + item + "/550/378"}/>
                        <div className="swiper-title">Lorem ipsum dolor sit amet, consec tetur adipisicing elit.</div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  );
}

export default App;
