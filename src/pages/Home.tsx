import { FC } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import waves from "../assets/svg/waves.svg";
import book from "../assets/svg/book-image.svg";
import HeadManager from "../components/HeadManager";

export const Home: FC = () => {
  return (
    <>
      <HeadManager title="Jason Leo Dot Com" favicon={waves} />
      <div className="p-2 w-lvh h-lvh flex flex-wrap gap-2 bg-gray-200">
        <div className="w-full h-full flex flex-col rounded-md border bg-white">
          <div className="flex">
            <Link to="/">
              <img src={waves} alt="Waves" />
            </Link>
            <Link to="/premises">
              <img src={book} alt="Book" />
            </Link>
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
