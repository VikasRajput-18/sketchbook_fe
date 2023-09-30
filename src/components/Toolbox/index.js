import { COLORS, MENU_ITEMS } from "@/constants";
import styles from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeBrushSize, changeColor } from "@/slice/toolboxSlice";

import cx from "classnames";

import { socket } from "@/socket";

const ToolBox = () => {
  const dispatch = useDispatch();

  const { activeMenuItems } = useSelector((state) => state.menu);
  const { color: pencilColor, size } = useSelector(
    (state) => state.toolbox[activeMenuItems]
  );

  const showStrokeToolOption = activeMenuItems === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItems === MENU_ITEMS.PENCIL ||
    activeMenuItems === MENU_ITEMS.ERASER;

  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItems, size: e.target.value }));
    socket.emit("changeConfig", { color: pencilColor, size: e.target.value });
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItems, color: newColor }));
    socket.emit("changeConfig", { color: newColor, size });
  };

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            {COLORS.map(({ color }) => {
              return (
                <div
                  key={color}
                  className={cx(styles.colorBox, {
                    [styles.active]: pencilColor === color,
                  })}
                  style={{
                    background: color,
                    border: "1px solid #ccc",
                    // border: pencilColor === color && "1px solid black",
                  }}
                  onClick={() => updateColor(color)}
                />
              );
            })}
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div>
          <h4 className={styles.toolText}>Brush Size </h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={size}
              onChange={(e) => {
                updateBrushSize(e);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolBox;
