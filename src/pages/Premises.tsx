import { FC } from "react";
import HeadManager from "../components/HeadManager";

import book from "../assets/svg/book-image.svg";

export const Premises: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo - Premises" favicon={book} />
      <div className="p-1 h-full w-full flex flex-wrap gap-2 bg-black rounded-md">
        <div className="rounded-md border bg-emerald-200 flex w-full flex-col justify-end items-center">
          <img src={book} alt="book icon" className="mb-[50vh]" />
        </div>
      </div>
    </>
  );
};
