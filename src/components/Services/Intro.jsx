import { Component } from "react";
import { BiBrain } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

class Intro extends Component {
  render() {
    return (
      <div className="services__intro">
        <div className="pos-rel">
          <div className="services__intro__image">
            <img
              src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
            />
          </div>
          <Swiper
            className="services__intro__miniSlider"
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>For any IT related problems</p>
            </SwiperSlide>
            <SwiperSlide>
              <div className="icon">
                <BiBrain />
              </div>
              <p>We bring you a solution!</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <div className="services__intro__text">
            <h1>We are the solutions for IT problems</h1>
            <p className="text">
              Welcome to our company, where we specialize in providing
              comprehensive IT solutions. With our expertise and dedication, we
              aim to address your technology challenges and help your business
              thrive in the digital world.
            </p>
            <button className="btn btn-primary">More About</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
