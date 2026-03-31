import { FaMoon } from "react-icons/fa";
import { ModeEnum } from "../types/types";
import CursorHover from "./CursorHover";
import useColorMode from "../context/useColorMode";

const ColorModeIcon = () => {
  const { mode, setMode } = useColorMode();

  return (
    <CursorHover>
      <div
        className="bg-secondary/20 p-2 rounded-full"
        onClick={() => {
          if (mode == ModeEnum.DARK) setMode(ModeEnum.LIGHT);
          else setMode(ModeEnum.DARK);
        }}
      >
        <FaMoon size={16} />
      </div>
    </CursorHover>
  );
};

export default ColorModeIcon;
