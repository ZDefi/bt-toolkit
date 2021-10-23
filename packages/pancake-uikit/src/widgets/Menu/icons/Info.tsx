import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33049 2.00043H16.6695C20.0705 2.00043 21.9905 3.92943 22.0005 7.33043V16.6704C22.0005 20.0704 20.0705 22.0004 16.6695 22.0004H7.33049C3.92949 22.0004 2.00049 20.0704 2.00049 16.6704V7.33043C2.00049 3.92943 3.92949 2.00043 7.33049 2.00043ZM12.0495 17.8604C12.4805 17.8604 12.8395 17.5404 12.8795 17.1104V6.92043C12.9195 6.61043 12.7705 6.29943 12.5005 6.13043C12.2195 5.96043 11.8795 5.96043 11.6105 6.13043C11.3395 6.29943 11.1905 6.61043 11.2195 6.92043V17.1104C11.2705 17.5404 11.6295 17.8604 12.0495 17.8604ZM16.6505 17.8604C17.0705 17.8604 17.4295 17.5404 17.4805 17.1104V13.8304C17.5095 13.5094 17.3605 13.2104 17.0895 13.0404C16.8205 12.8704 16.4805 12.8704 16.2005 13.0404C15.9295 13.2104 15.7805 13.5094 15.8205 13.8304V17.1104C15.8605 17.5404 16.2195 17.8604 16.6505 17.8604ZM8.21949 17.1104C8.17949 17.5404 7.82049 17.8604 7.38949 17.8604C6.95949 17.8604 6.59949 17.5404 6.56049 17.1104V10.2004C6.53049 9.88943 6.67949 9.58043 6.95049 9.41043C7.21949 9.24043 7.56049 9.24043 7.83049 9.41043C8.09949 9.58043 8.25049 9.88943 8.21949 10.2004V17.1104Z" fill="#ff7750"/>
    </Svg>
  );
};

export default Icon;
