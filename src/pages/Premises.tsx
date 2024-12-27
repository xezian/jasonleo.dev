import { FC } from "react";
import HeadManager from "../components/HeadManager";

import book from "../assets/svg/book-image.svg";

export const Premises: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo - Premises" favicon={book} />
      <div className="p-2 h-full w-full flex flex-wrap gap-2 bg-black rounded-md">
        <div className="rounded-md border grow bg-cyan-200 grid place-items-center">
          <img src={book} alt="book icon" />
        </div>
      </div>
    </>
  );
};
