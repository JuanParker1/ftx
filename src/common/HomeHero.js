import React from "react";
import clsx from "clsx";
import Carousel from "./Carousel";
import Icon from "@mui/material/Icon";
import Hero_1 from "../images/Hero_1.png";
import Hero_2 from "../images/Hero_2.png";
import Hero_3 from "../images/Hero_3.png";
import Hero_4 from "../images/Hero_4.png";
import CarouselSlide from "./CarouselSlide";
import IconButton from "@mui/material/IconButton";

function HomeHero() {
  const ref = React.useRef(null);
  const [slide, setSlide] = React.useState(0);

  return (
    <div className="rounded-3xl relative text-white">
      <Carousel ref={ref} onSlideChange={setSlide}>
        {HERO_SLIDES.map((hero, index) => (
          <CarouselSlide key={index} index={index}>
            <div className="flex relative">
              <img
                src={hero}
                alt={index}
                width="100%"
                height="100%"
                className="md:w-full"
              />
              ​
            </div>
          </CarouselSlide>
        ))}
      </Carousel>
      <div className="flex justify-between w-full absolute top-[50px] md:top-[100px] lg:top-[150px] xl:top-[270px] px-4 md:px-8">
        <div className="bg-[#494949] rounded-full">
          <IconButton
            className="text-white"
            onClick={() => ref.current.previous()}
          >
            <Icon>chevron_left</Icon>
          </IconButton>
        </div>
        <div className="bg-[#494949] rounded-full">
          <IconButton className="text-white" onClick={() => ref.current.next()}>
            <Icon>chevron_right</Icon>
          </IconButton>
        </div>
      </div>
      <div className="flex justify-center mt-[10px] gap-3">
        {HERO_SLIDES.map((item, index) => (
          <div
            key={index}
            className={clsx("w-3 h-3 rounded-full bg-white", {
              ["bg-gray-800"]: slide === index,
            })}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeHero;

const HERO_SLIDES = [Hero_1, Hero_2, Hero_3, Hero_4, Hero_1];
