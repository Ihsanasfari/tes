import { BsHouse } from "react-icons/bs";

import { FaChevronDown } from "react-icons/fa";

import coin from "../assets/icon/coin_icon.png";
import wifi from "../assets/icon/wifi_icon.png";
import car from "../assets/icon/car_icon.png";

import benefit from "../assets/images/benefit.png";
import how from "../assets/images/how.png";
import bghousehero from "../assets/images/rumahHero.png";
import landscape from "../assets/images/landscape09.jpg";
import kontrakanDummy from "../assets/images/kontrakanDummy.png";
import summer from "../assets/images/Summer.png";
import calendar from "../assets/images/calendar.png";
import check from "../assets/images/check.png";
import dollar from "../assets/images/dollar.png";

import Button from "../components/Button";
import Search from "../components/Search";
const Home = () => {
  return (
    <>
      {/**hero */}
      <div className="px-[80px] pb-[136px] ">
        <div className="flex static justify-between items-center p-[80px] bg-[#F4F5F6] rounded-3xl">
          <div className="-mt-40 flex flex-col gap-4">
            <h1 className="text-[96px] font-semibold">Cari Kosan</h1>
            <p className="text-2xl">
              Bersama tekos, dapatkan tempat tinggal impianmu!
            </p>
            <p className="w-[247px]">
              <Button>Coba cari kosan sekarang</Button>
            </p>
          </div>
          <img width={514} src={bghousehero} />
          <div className=" absolute justify-center shadow-lg rounded-3xl bg-[#FCFCFD] p-[40px]  left-1/2 -translate-x-1/2 -bottom-[40px] w-[60%]">
            <div className="flex flex-col gap-8 divide-y-2">
              <ul className="flex gap-12 ">
                <a href="/" className="text-base font-bold">
                  Home
                </a>
                <a href="/asrama" className="text-base">
                  Asrama
                </a>
                <a href="/kosan" className="text-base">
                  Kosan
                </a>
                <a href="/kontrakan" className="text-base">
                  Kontrakan
                </a>
              </ul>

              <Search />
            </div>
          </div>
        </div>
      </div>
      {/** Layanan */}
      <div className="w-full py-[136px]">
        <h1 className="text-[48px] text-center font-semibold">Layanan</h1>
        <p className="text-[#777E91] text-[24px] text-center">
          Layanan yang tersedia di Tekos saat ini
        </p>
        <div className="flex gap-32 justify-center mt-12">
          <div className="flex items-center gap-4">
            <img src={summer} width={160} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">Asrana Tel-U</h4>
              <div className="text-xs px-4 py-2 bg-[#E6E8EC] w-fit rounded-full">
                9,326 Kamar
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={summer} width={160} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">Kosan</h4>
              <div className="text-xs px-4 py-2 bg-[#E6E8EC] w-fit rounded-full">
                9,326 Kamar
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src={summer} width={160} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-base">Kontrakan</h4>
              <div className="text-xs px-4 py-2 bg-[#E6E8EC] w-fit rounded-full">
                9,326 Kamar
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Kenapa harus tekos */}
      <div className="w-full py-[56px]">
        <h1 className="text-[48px] text-center font-semibold">
          Kenapa harus tekos?
        </h1>
        <p className="text-[#777E91] text-[24px] text-center">
          - Permudah hidupmu -
        </p>
        <div className="mt-28 px-40 flex justify-between">
          <div className="flex flex-col gap-[40px] ">
            <div className="w-80 flex flex-col gap-4">
              <div className="bg-[#8BC5E5] px-4 py-1 w-fit rounded-full text-white">
                01
              </div>
              <h4 className="font-bold text-2xl">Hemat Waktu</h4>
              <p className="text-[#777E91] text-sm">
                Kamu tidak perlu survei langsung ke kosan, cukup dengan rebahan
                dapatkan kosan impianmu
              </p>
            </div>
            <div className="w-[352px] flex flex-col gap-4">
              <div className="bg-[#92A5EF] px-4 py-1 w-fit rounded-full text-white">
                02
              </div>
              <h4 className="font-bold text-2xl">Hemat tenaga</h4>
              <p className="text-[#777E91] text-sm">
                Kamu tidak perlu mengeluarkan tenaga lebih untuk survei langsung
                kosan, cukup dengan rebahan dapatkan kosan impianmu
              </p>
            </div>
            <div className="w-[352px] flex flex-col gap-4">
              <div className="bg-[#58C27D] px-4 py-1 w-fit rounded-full text-white">
                03
              </div>
              <h4 className="font-bold text-2xl">Hemat biaya</h4>
              <p className="text-[#777E91] text-sm">
                Kamu tidak perlu mengeluarkan biaya transportasi untuk mencari
                kosan, cukup dengan rebahan dapatkan kosan impianmu
              </p>
            </div>
            <Button>Coba cari kosan sekang</Button>
          </div>
          <img width={454} src={benefit} />
        </div>
      </div>
      {/** Cara memesan kosan */}
      <div className="py-[56px]">
        <h1 className="text-[48px] text-center font-semibold">
          Cara memesan kosan <br /> impianmu di Tekos
        </h1>
        <p className="text-[#777E91] text-[24px] text-center">
          Yuk tunggu apa lagi, pesan sekarang
        </p>
        <div className="flex gap-32 justify-center mt-12">
          <div className="flex flex-col items-center gap-4 w-[256px]">
            <img src={calendar} width={256} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl text-center">Sukabirus</h4>
              <p className="text-sm text-center text-[#777E91]">
                Cari kosan sesuai keinginanmu
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-[256px]">
            <img src={check} width={256} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl text-center">
                Tunggu konfirmasi
              </h4>
              <p className="text-sm text-center text-[#777E91]">
                Tunggu konfirmasi dari pemilik kosan
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 w-[256px]">
            <img src={dollar} width={256} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl text-center">
                Lakukan pembayaran
              </h4>
              <p className="text-sm text-center text-[#777E91]">
                Lakukan pembayaran dan mulai ngekos ditempat yang kamu ajukan
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** kosan terdekat */}
      <div className="py-[56px]">
        <h1 className="text-[48px] text-center font-semibold">
          Kosan terdekat
        </h1>
        <p className="text-[#777E91] text-[24px] text-center">
          Cari kosan impianmu
        </p>
        <div className="flex gap-[32px] justify-center mt-12">
          <div className="flex flex-col gap-4 w-[352px]">
            <img className="rounded-3xl" src={landscape} width={352} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl ">Sukabirus</h4>
              <p className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse />
                650,596
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[352px]">
            <img className="rounded-3xl" src={landscape} width={352} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl ">Sukabirus</h4>
              <p className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse />
                650,596
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-[352px]">
            <img className="rounded-3xl" src={landscape} width={352} />
            <div className="flex flex-col">
              <h4 className="font-semibold text-2xl ">Sukabirus</h4>
              <p className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse />
                650,596
              </p>
            </div>
          </div>
        </div>
      </div>
      {/** Rekomendasi kosan */}
      <div className="py-[56px]">
        <div className="flex flex-col justify-center items-center">
          <div className=" flex flex-col items-center p-[80px] gap-[64px] h-fit bg-[#F4F5F6] rounded-[24px] border">
            <div className="  flex flex-col gap-[12px]  w-[1120px]  h-[100px] ">
              <h1 className="   font-[700]   text-[48px]   leading-[56px]  text-[#23262F] ">
                Rekomendasi Kosan
              </h1>
              <h2 class="  font-[400]   text-[24px]  leading-[32px]  text-[#777E91] ">
                Cari kosan impianmu
              </h2>
            </div>

            <div className=" flex flex-col items-start gap-[48px] w-[1120px] h-[858px]">
              <div
                alt="filter"
                className=" flex flex-row justify-between items-center gap-[138px] w-full h-[48px] "
              >
                <div
                  alt="subnav"
                  className="flex flex-row justify-center items-center gap-16px w-[511px] h-[28px]  font-[700]  tex-[14px]  leading-[16px] text-[#777E90]
                       "
                >
                  <div className="  flex flex-row justify-center items-center  px-[6px] py-[12px] gap-[8px]  w-[110px] h-[28px] bg-[#353945] rounded-[100px] font-[550]  text-[#FCFCFD] ">
                    <img alt="logo" src={coin} />
                    <p>Featured</p>
                  </div>

                  <div className="  flex flex-row justify-center items-center px-[6px] py-[12px] gap-[8px]  w-[152px] h-[28px] rounded-[100px] ">
                    <img alt="logo" src={coin} />
                    <p>Family-friendly</p>
                  </div>

                  <div className="  flex flex-row justify-center items-center  px-[6px] py-[12px] gap-[8px] w-[99px] h-[28px] rounded-[100px] ">
                    <img alt="logo" src={coin} />
                    <p>On sale</p>
                  </div>

                  <div className="  flex flex-row justify-center items-center px-[6px] py-[12px] gap-[8px] w-[102px] h-[28px] rounded-[100px] ">
                    <img alt="logo" src={coin} />
                    <p>Sub nav</p>
                  </div>
                </div>
                <div className=" flex flex-row justify-between items-center px-[8px] pl-[8px] pr-[16px] gap-[18px] w-[256px] h-[48px] bg-[#FCFCFD] rounded-[12px] ">
                  <p className=" w-[70px]  h-[24px] font-poppins font-[600] text-[14px] leading-[24px] flex items-center text-[#23262F] ">
                    Termurah
                  </p>
                  <button className=" flex flex-row justify-center items-center  p-[4px]  gap-[10px]  w-[32px] h-[32px] border border-[2px] rounded-[100px] ">
                    <FaChevronDown />
                  </button>
                </div>
              </div>
              <div className=" grid grid-cols-4 items-center w-fit gap-8 h-[429px] justify-center">
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px] rounded-t-3xl">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" container flex flex-col w-[256px] h-[365px] bg-[#FCFCFD] border border-[1px] border-solid shadow-[0px_40px_32px_-24px_rgba(15,15,15,0.12)] rounded-[24px] ">
                  <img
                    className="flex-none order-[0px] w-[352px] h-[241px] rounded-t-3xl"
                    src={kontrakanDummy}
                  />
                  <div className=" flex flex-col items-center p-[24px] gap-[16px] w-[350px] h-[187px]">
                    <div className=" flex flex-row gap-[32px] w-[302px] h-[92px] ">
                      <div className="flex flex-col gap-[24px] ">
                        <div className=" w-[170px] h-[48px] font-poppins font-[700] text-[16px] leading-[24px]text-[#141416]">
                          Kontrakan pak Rizal
                        </div>
                        <div className=" -mt-5 flex flex-row items-start gap-[12px] w-fit h-[20px] font-poppins font-[400] text-[12px] leading-[20px] text-[#777E91]">
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={wifi} />

                            <p>Free wifi</p>
                          </div>
                          <div className="flex flex-row justify-center gap-[8px] w-fit h-[20px]">
                            <img src={car} />

                            <p>Parkir mobil</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Cari kosan sambil rebahan */}
      <div className="container mx-auto py-[56px]">
        <div className="mt-auto px-40 flex justify-between">
          <div className="pt-64 flex flex-col gap-[40px] ">
            <p className="text-5xl font-sans font-semibold">
              Cari kosan sambil <br />
              rebahan
            </p>
            <p className="text-base text-[#777E91]">
              Ga perlu survei langsung, disini tempat kosannya selalu update!
            </p>
          </div>
          <img width={640} src={how} />
        </div>
      </div>
      {/**pemilik kosan terbaik */}
    </>
  );
};

export default Home;
