//     *****     Chad[well] Clark 2021     *****     //

import "./Footer.css";
import { Bob } from "./Bob.js";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>&copy;Chad[well] on github</div>
        <div className="bob">
          <Bob />
        </div>
      </div>
    </>
  );
};
