import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function Carousel() {
  return (
    <Splide
      options={{
        type: "loop",
        drag: "free",
        focus: "center",
        perPage: 3,
        autoScroll: {
          speed: 1,
        },
        AutoScroll,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <p>Test</p>
      </SplideSlide>
      <SplideSlide>
        <p>Test 2</p>
      </SplideSlide>
      <SplideSlide>
        <p>Test 3</p>
      </SplideSlide>
    </Splide>
  );
}
