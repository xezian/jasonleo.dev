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
      <div className="p-2 w-screen h-screen flex flex-wrap gap-2 bg-gray-200">
        <div className="w-full h-full rounded-md border bg-white">
          <div className="flex">
            <Link to="/">
              <img src={waves} alt="Waves" />
            </Link>
            <Link to="/premises">
              <img src={book} alt="Book" />
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};
