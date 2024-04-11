import { Bar } from "./bar";

interface gym {}

export const Gym: React.FC<gym> = ({}: gym) => {
  return (
    <div id="container">
      <Bar />
      gym
    </div>
  );
};
