import { FC } from "react";
import HeadManager from "../components/HeadManager";

import book from "../assets/svg/book-image.svg";

export const Premises: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo - Premises" favicon={book} />
      <div className="p-2 w-full h-full flex flex-wrap gap-2 bg-black rounded-md">
        <div className="w-full h-full rounded-md border bg-gray-200"></div>
      </div>
    </>
  );
};
