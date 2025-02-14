import { FC } from "react";
import HeadManager from "../components/HeadManager";

import cone from "../assets/svg/cone.svg";

export const Observations: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo - Observations" favicon={cone} />
      <div className="p-1 h-full w-full flex flex-wrap gap-2 bg-black rounded-md">
        <div className="rounded-md border grow bg-pink-200 grid place-items-center">
          <img src={cone} alt="cone icon" />
        </div>
      </div>
    </>
  );
};
