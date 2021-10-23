import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3975 7.24207C11.3975 6.45885 10.7906 5.82481 10.041 5.82481L3.48828 5.43408C2.53299 5.43408 1.75958 6.24395 1.75958 7.24207C1.75958 8.2402 2.53299 9.04829 3.48828 9.04829L10.041 8.65934C10.7906 8.65934 11.3975 8.0253 11.3975 7.24207Z" fill="#ff7750"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6025 16.7579C12.6025 17.5412 13.2094 18.1752 13.959 18.1752L20.5117 18.5659C21.467 18.5659 22.2404 17.7561 22.2404 16.7579C22.2404 15.7598 21.467 14.9517 20.5117 14.9517L13.959 15.3407C13.2094 15.3407 12.6025 15.9747 12.6025 16.7579Z" fill="#ff7750"/>
      <ellipse cx="17.4213" cy="7.24116" rx="3.61421" ry="4.81894" transform="rotate(90 17.4213 7.24116)" fill="#ff7750"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.7924 18.705C2.22209 18.705 1.75977 19.0784 1.75977 19.539C1.75977 19.9996 2.22209 20.373 2.7924 20.373L5.89029 20.373L6.57871 20.373L6.92292 20.373C9.39424 20.373 11.3976 18.7549 11.3976 16.7588C11.3976 14.7628 9.39424 13.1446 6.92292 13.1446L6.57871 13.1446L5.89029 13.1446L2.7924 13.1446C2.22209 13.1446 1.75977 13.518 1.75977 13.9787C1.75977 14.4393 2.22209 14.8127 2.7924 14.8127L5.20187 14.8127C5.58207 14.8127 5.89029 15.0617 5.89029 15.3688C5.89029 15.6758 5.58207 15.9248 5.20187 15.9248L2.7924 15.9248C2.22209 15.9248 1.75977 16.2982 1.75977 16.7588C1.75977 17.2195 2.22209 17.5929 2.7924 17.5929L5.20187 17.5929C5.58207 17.5929 5.89029 17.8418 5.89029 18.1489C5.89029 18.456 5.58207 18.705 5.20187 18.705L2.7924 18.705Z" fill="#ff7750"/>
    </Svg>
  );
};

export default Icon;