import React from "react";
import clsx from "clsx";
import CarouselContext from "./CarouselContext";

export const Carousel = React.forwardRef(
  /**
   *
   * @param {CarouselProps} props
   * @param {CarouselRef} ref
   */
  (props, ref) => {
    const {
      children,
      className,
      initialSlide,
      interval,
      onSlideChange,
      ...rest
    } = props;
    const [slide, setSlide] = React.useState(initialSlide);
    const numberOfSlides = React.Children.count(children);

    const handleChangeslide = (nextslide) => {
      setSlide(nextslide);
      if (onSlideChange) {
        onSlideChange(nextslide);
      }
    };

    const next = () => handleChangeslide((slide + 1) % numberOfSlides);
    const previous = () => {
      handleChangeslide((slide - 1 + numberOfSlides) % numberOfSlides);
    };
    const jump = handleChangeslide;

    React.useImperativeHandle(ref, () => ({ next, previous, jump }));

    React.useEffect(() => {
      const nextslide = (slide + 1) % numberOfSlides;
      const id = setTimeout(() => handleChangeslide(nextslide), interval);
      return () => clearTimeout(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide, interval, numberOfSlides]);

    const transform = `translateX(-${slide * 100}%)`;

    return (
      <CarouselContext.Provider
        value={{ slide, numberOfSlides, next, previous, jump }}
      >
        <div className={clsx("overflow-hidden", className)} {...rest}>
          <div
            className="flex h-full transform"
            style={{ transform, transition: "transform 0.5s ease" }}
          >
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.defaultProps = {
  initialSlide: 0,
  interval: 4000,
};

export default Carousel;

/**
 * @typedef {{
 *   initialSlide?: number;
 *   interval?: number;
 *   onSlideChange?: (slide: number) => void,
 * } & React.ComponentPropsWithoutRef<"div">} CarouselProps
 */

/**
 * @typedef {{
 *   next: () => void;
 *   previous: () => void;
 *   jump: (index: number) => void;
 * }} CarouselRef
 */
