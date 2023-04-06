import React from "react";
import logoTekos from "../assets/images/logo.png";
const Footer = () => {
  return (
    <>
      <div className=" flex flex-col justify-end items-center px-[160px] pt-[80px] h-[296px] ">
        <div className=" w-[1120px] h-[189px] ">
          <div className=" flex flex-col justify-center gap-[48px]">
            <div className=" flex flex-row flex-start gap-[32px] w-[832px] h-[72px] font-[700] text-[14px] leading-[16px] text-[#777E91] ">
              <div className="flex flex-col items-center w-[256px] h-[32px]">
                <img className="w-[112px] h-[32px]" src={logoTekos} />
              </div>
              <div className=" flex flex-col w-[160px] h-[72px] gap-[32px]">
                <div>About</div> <div>kontrakan</div>
              </div>
              <div className=" flex flex-col w-[160px] h-[72px] gap-[32px]">
                <div>Asrama Tel-U</div> <div>Bantuan</div>
              </div>
              <div className=" flex flex-col w-[160px] h-[72px] gap-[32px]">
                <div>Kosan</div>
              </div>
            </div>
            <hr className="w-[1120px] h-[1px] bg-[#F4F5F6] "></hr>
          </div>
          <div className=" font-poppins font-[400] text-[12px] leading-[20px] pt-[24px] justify-left text-color[#23262F] flex-non ">
            Copyright © 2022 Tekos. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
