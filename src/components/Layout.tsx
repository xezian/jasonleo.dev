import { FC } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import waves from "../assets/svg/waves.svg";
import book from "../assets/svg/book-image.svg";

export const Layout: FC = () => {
  return (
    <>
      <div className="p-2 w-lvh h-lvh flex flex-wrap gap-2 bg-gray-200">
        <div className="w-full h-full flex flex-col">
          <div className="flex  p-1 mb-2 rounded-md border bg-white">
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
