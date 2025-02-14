import { FC } from "react";
import HeadManager from "../components/HeadManager";

import waves from "../assets/svg/waves.svg";

export const Home: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo - Home" favicon={waves} />
      <div className="p-1 h-full w-full flex flex-wrap gap-2 bg-black rounded-md">
        <div className="rounded-md border grow bg-cyan-200 grid place-items-center">
          <img src={waves} alt="waves icon" />
        </div>
      </div>
    </>
  );
};
