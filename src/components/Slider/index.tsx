import { ReactNode, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { CaretLeft, CaretRight } from "phosphor-react";

type Props = {
  children: ReactNode;
};

export function Slider({ children }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },

      breakpoints: {
        "(min-width: 500px)": {
          slides: {
            perView: 2,
            spacing: 50,
          },
        },
      },
    },
    []
  );

  return (
    <div className="">
      <div className="relative px-7 sm:px-[100px]">
        <div ref={sliderRef} className="keen-slider relative z-20">
          {children}
        </div>

        {loaded && instanceRef.current && (
          <div className="absolute left-0 right-0 flex justify-between top-1/2 -translate-y-1/2 z-10">
            <button
              type="button"
              onClick={(e) => instanceRef.current?.prev()}
              // disabled={currentSlide === 0}
              aria-label="slide anterior"
              className="cursor-pointer"
            >
              <CaretLeft
                className="text-primary-500 text-xl sm:text-[51px]"
                weight="bold"
              />
            </button>

            <button
              type="button"
              onClick={(e) => {
                instanceRef.current?.next();
              }}
              // disabled={currentSlide === 0}
              aria-label="slide seguinte"
              className="cursor-pointer"
            >
              <CaretRight
                className="text-primary-500 text-xl sm:text-[51px]"
                weight="bold"
              />
            </button>
          </div>
        )}
      </div>

      {loaded && instanceRef.current && (
        <div className="flex justify-center gap-5 sm:gap-9 mt-10">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={
                  "w-3 h-3 sm:w-5 sm:h-5 rounded-full" +
                  (currentSlide === idx
                    ? " bg-primary-500 active"
                    : " bg-gray-50")
                }
              ></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
