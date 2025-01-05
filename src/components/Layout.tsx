import { FC, useEffect, useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import waves from "../assets/svg/waves.svg";
import book from "../assets/svg/book-image.svg";
import cone from "../assets/svg/cone.svg";
import { AnimatePresence, useAnimate, usePresence } from "motion/react";

export const Layout: FC = () => {
  const [menuHovered, setMenuHovered] = useState(false);

  const menuIconEnter = () => {
    if (!menuHovered) {
      setMenuHovered(true);
    }
  };
  const menuIconLeave = () => setMenuHovered(false);

  return (
    <>
      <div className="p-2 w-lvh h-lvh flex flex-wrap gap-2 bg-gray-200">
        <div className="w-full h-full flex flex-col">
          <div
            onMouseEnter={menuIconEnter}
            onMouseLeave={menuIconLeave}
            className="flex w-fit p-1 mb-2 rounded-md border bg-white"
          >
            <Link to="/">
              <img src={waves} alt="Waves" />
            </Link>
            <AnimatePresence mode="wait" initial={false}>
              {menuHovered ? <MenuExpanded key="menuExpanded" /> : null}
            </AnimatePresence>
          </div>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuExpanded: FC = () => {
  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = () => {
        animate(scope.current, {
          width: ["0px", "fit-content"],
          opacity: [0, 1],
        });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await animate(scope.current, { width: "0px", opacity: 0 });
        safeToRemove();
      };

      exitAnimation();
    }
  });

  return (
    <div ref={scope} className="w-0 flex">
      <Link to="/premises">
        <img src={book} alt="Book" className="object-none h-full" />
      </Link>
      <Link to="/observations">
        <img src={cone} alt="Cone" className="object-none h-full" />
      </Link>
    </div>
  );
};
