import { FC, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { Outlet } from "react-router";
import waves from "../assets/svg/waves.svg";
import book from "../assets/svg/book-image.svg";
import cone from "../assets/svg/cone.svg";
import { AnimatePresence, useAnimate, usePresence } from "motion/react";

export const Layout: FC = () => {
  const [menuHovered, setMenuHovered] = useState(false);
  const [innerMenuHovered, setInnerMenuHovered] = useState(false);
  const timeoutRef = useRef(0);

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setInnerMenuHovered(menuHovered),
      300
    );
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [menuHovered]);

  const menuIconEnter = () => {
    if (!menuHovered) {
      setMenuHovered(true);
    }
  };
  const menuIconLeave = () => setMenuHovered(false);

  return (
    <>
      <div className="flex absolute top-[13px] left-[14px]">
        {innerMenuHovered ? null : (
          <img
            src={waves}
            alt="Waves"
            className="scale-x-[-1]"
            onMouseEnter={menuIconEnter}
          />
        )}
      </div>
      <div className="p-2 w-lvh h-lvh flex flex-wrap bg-gray-800">
        <div className="w-full h-full flex flex-col">
          <AnimatePresence mode="wait" initial={false}>
            {menuHovered ? (
              <span onMouseLeave={menuIconLeave}>
                <MenuOpened innerMenuHovered={innerMenuHovered} />
              </span>
            ) : null}
          </AnimatePresence>
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuOpened: FC<{
  innerMenuHovered: boolean;
}> = ({ innerMenuHovered }) => {
  const [isMenuPresent, safeToMenuRemove] = usePresence();
  const [menuScope, menuAnimate] = useAnimate();

  useEffect(() => {
    if (isMenuPresent) {
      const enterAnimation = () => {
        menuAnimate(menuScope.current, {
          height: ["0px", "auto"],
        });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        await menuAnimate(menuScope.current, { height: "0px" });
        safeToMenuRemove();
      };

      exitAnimation();
    }
  });

  return (
    <div
      ref={menuScope}
      className="flex w-100 p-1 mb-2 rounded-md border bg-white h-0"
    >
      <Link to="/">
        <img src={waves} alt="Waves" />
      </Link>
      <AnimatePresence mode="wait" initial={false}>
        {innerMenuHovered ? <MenuExpanded key="menuExpanded" /> : null}
      </AnimatePresence>
    </div>
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
