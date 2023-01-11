import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WeatherCard from "../WeatherCard/WeatherCard";

interface CarouselElemProps {
  data: any;
}
const CarouselElem: React.FC<CarouselElemProps> = (props) => {
  const { data } = props;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive} showDots>
      {data.dataseries.map((series: any, i: number) => {
        return <WeatherCard series={series} initDate={data.init} key={i} />;
      })}
    </Carousel>
  );
};

export default CarouselElem;
