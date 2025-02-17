import { FC } from "react";
import * as m from "motion/react-m";
import HeadManager from "../components/HeadManager";

import cone from "../assets/svg/cone.svg";

export const Observations: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo - Observations" favicon={cone} />
      <div className="p-1 h-full w-full flex flex-wrap gap-2 bg-black rounded-md">
        <div className="rounded-md border bg-rose-200 text-pink-500 flex w-full flex-col justify-end items-center">
          <m.div
            className="mb-[50vh]"
            whileHover={{
              rotate: 360,
              transition: {
                repeat: Infinity,
                duration: 0.4,
                ease: "linear",
              },
            }}
          >
            <img src={cone} alt="cone-icon" />
          </m.div>
        </div>
      </div>
    </>
  );
};
