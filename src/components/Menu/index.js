import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";

import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { actionItemClick, menuItemClick } from "@/slice/menuSlice";
import { MENU_ITEMS } from "@/constants";

const menuIcons = [
  { icon: faPencil, name: "PENCIL" },
  { icon: faEraser, name: "ERASER" },
  { icon: faRotateLeft, name: "UNDO" },
  { icon: faRotateRight, name: "REDO" },
  { icon: faFileArrowDown, name: "DOWNLOAD" },
];

const Menu = () => {
  const dispatch = useDispatch();
  const { activeMenuItems, actionMenuItems } = useSelector(
    (state) => state.menu
  );

  const handleMenuClick = (iconName) => {
    if (iconName === MENU_ITEMS.PENCIL || iconName === MENU_ITEMS.ERASER) {
      dispatch(menuItemClick(iconName));
    } else {
      handleActionItemClick(iconName);
    }
  };

  const handleActionItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  return (
    <div className={styles.menuContainer}>
      {menuIcons.map(({ icon, name }) => (
        <div
          key={icon}
          onClick={() => handleMenuClick(name)}
          className={cx(styles.iconWrapper, {
            [styles.active]:
              (name === "PENCIL" && activeMenuItems === "PENCIL") ||
              (name === "ERASER" && activeMenuItems === "ERASER"),
          })}
        >
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
