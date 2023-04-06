import Button from "../components/Button";
import Search from "../components/Search";

import bgheroasrama from "../assets/images/bgheroasrama.jpg";

import { BsSearch, BsHouse } from "react-icons/bs";
const Asrama = () => {
  return (
    <>
      {/**hero */}
      <div className="px-[80px] pb-[136px] ">
        <div
          style={{
            backgroundImage: ` linear-gradient(130.48deg, rgba(236, 248, 252, 0.84) 22.56%, rgba(236, 248, 252, 0) 69.73%), url(${bgheroasrama})`,
            backgroundSize: "cover",
          }}
          className="flex justify-between items-center p-[77px] pb-[250px] rounded-3xl "
        >
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[96px] font-semibold leading-[96px]">
              Cari Kontrakan <br />
              dekat <br />
              Tel-U
            </h1>
            <p className="text-2xl">
              Bersama tekos, dapatkan tempat tinggal impianmu!
            </p>
            <div className="w-[283px]">
              <Button>
                Coba cari kosan sekarang <BsSearch className="ml-3" />
              </Button>
            </div>
          </div>

          <div className=" shadow-lg rounded-3xl bg-[#FCFCFD] p-[40px] absolute left-1/2 -translate-x-1/2 -bottom-[40px] w-[60%]">
            <div className="flex flex-col gap-8 divide-y-2">
              <ul className="flex gap-12 ">
                <a href="/" className="text-base ">
                  Home
                </a>
                <a href="/asrama" className="text-base font-bold">
                  Asrama
                </a>
                <a href="/kosan" className="text-base">
                  Kosan
                </a>
                <a href="/kontrakan" className="text-base ">
                  Kontrakan
                </a>
              </ul>

              <Search />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Asrama;
