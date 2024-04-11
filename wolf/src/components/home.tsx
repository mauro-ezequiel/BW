import { Carousel } from "./Caru";
import { Bar } from "./bar";
import { Buttom } from "./buttom";
import { Materials } from "./material";

export const Home = () => {
  return (
    <>
      <Bar />
      <Carousel />

      <div>
        <Materials />
      </div>
      <Buttom />
    </>
  );
};
