import React, { useState } from "react";
import logoTekos from "../assets/images/logo.png";
import avatar from "../assets/icon/avatar_icon.png";
import notiff from "../assets/icon/notbell_icon.png";

import InitialModal from "../Modal/InitialModal";

const NavigationBar = () => {
  const [showInitialModal, setShowInitialModal] = useState(false);
  const handleOnClosee = () => setShowInitialModal(false);
  return (
    <>
      <nav className="  top-0 bg-[#FCFCFD]">
        <div
          className="h-[88px] text-[14px] 
            font-[700]  
            "
        >
          <div className="flex flex-row items-center gap-[40px]  absolute w-[325px] h-[48px] left-[160px] top-[20px]">
            <div>
              <a href="/">
                <img src={logoTekos} alt="logo" className="md:cursor-pointer" />
              </a>
            </div>

            <div>
              <div className=" w-[1px] h-[48px] bg-[#E6E8EC]"></div>
            </div>

            <div>Cari Tempat</div>
          </div>

          <ul className="flex flex-row justify-center items-center gap-[26px] absolute w-[189px] h-[40px] right-[160px] top-[20px]">
            <div>Bantuan</div>

            <div>
              <img src={notiff} alt="logo" className="md:cursor-pointer" />
            </div>

            <div onClick={() => setShowInitialModal(true)}>
              <img src={avatar} alt="logo" className="md:cursor-pointer" />
            </div>
          </ul>
        </div>
      </nav>

      <InitialModal onClose={handleOnClosee} Visible={showInitialModal} />
    </>
  );
};
export default NavigationBar;
