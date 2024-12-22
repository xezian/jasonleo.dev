import { FC } from "react";
import { Outlet } from "react-router";

export const Home: FC = () => {
  return (
    <div className="p-2 w-screen h-screen flex flex-wrap gap-2 bg-gray-200">
      <div className="w-full h-full rounded-md border bg-white">
        <Outlet />
      </div>
    </div>
  );
};
