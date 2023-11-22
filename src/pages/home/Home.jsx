import Slider from "react-slick";
import { Divider } from "@nextui-org/react";
import Partners from "../../components/Partners/Partners";
import News from "../../components/News/News";
import Statistics from "../../components/Statistics/Statistics";
import Cards from "../../components/Card/Cards";
import SearchComponent from "../../components/Search/Search";

import CarouselComponent from "../../components/Carousel/Carousel";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <SearchComponent />
      <Divider/>
      <Partners />
      <Divider/>
      <CarouselComponent />
      <Statistics />
      <Divider/>

      <Cards />
      <Divider id="divider-section" />
      <Divider id="divider-section" />
      <Divider id="divider-section" />
    </div>
  );
}
