import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 160 42" {...props}>
      <svg width="130" height="46" viewBox="0 0 130 46" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
