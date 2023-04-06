import landscape2 from "../assets/images/landscape02.png";
import bgherokontrakan from "../assets/images/bgherokontrakan.jpg";
import bgherokosan from "../assets/images/bgherokosan.jpg";

import Button from "../components/Button";

import { BsSearch, BsHouse } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { HiStar } from "react-icons/hi";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

import Search from "../components/Search";

const Kontrakan = () => {
  return (
    <>
      {/**hero */}
      <div className="px-[80px] pb-[136px] ">
        <div
          style={{
            backgroundImage: ` linear-gradient(130.48deg, rgba(236, 248, 252, 0.84) 22.56%, rgba(236, 248, 252, 0) 69.73%), url(${bgherokontrakan})`,
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
                <a href="/asrama" className="text-base">
                  Asrama
                </a>
                <a href="/kosan" className="text-base">
                  Kosan
                </a>
                <a href="/kontrakan" className="text-base font-bold">
                  Kontrakan
                </a>
              </ul>

              <Search />
            </div>
          </div>
        </div>
      </div>
      {/** Rekomendasi kontrakan */}
      <div className="px-[210px] py-16 mt-2">
        <h4 className="text-3xl  font-semibold">Rekomendasi kontrakan di</h4>
        <div className="flex flex-row gap-12">
          <div className="flex flex-col w-[224px] h-[365px] pt-14">
            <img
              className="flex-none order-[0px] w-[224px] h-fit rounded-b-3xl rounded-t-3xl"
              src={landscape2}
            />
            <div className="mt-5">
              <p className="text-base font-semibold">Sukapura</p>
              <div className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse /> <p>600,000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[224px] h-[365px] pt-14">
            <img
              className="flex-none order-[0px] w-[224px] h-fit rounded-b-3xl rounded-t-3xl"
              src={landscape2}
            />
            <div className="mt-5">
              <p className="text-base font-semibold">Sukapura</p>
              <div className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse /> <p>600,000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[224px] h-[365px] pt-14">
            <img
              className="flex-none order-[0px] w-[224px] h-fit rounded-b-3xl rounded-t-3xl"
              src={landscape2}
            />
            <div className="mt-5">
              <p className="text-base font-semibold">Sukapura</p>
              <div className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse /> <p>600,000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[224px] h-[365px] pt-14">
            <img
              className="flex-none order-[0px] w-[224px] h-fit rounded-b-3xl rounded-t-3xl"
              src={landscape2}
            />
            <div className="mt-5">
              <p className="text-base font-semibold">Sukapura</p>
              <div className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse /> <p>600,000</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[224px] h-[365px] pt-14">
            <img
              className="flex-none order-[0px] w-[224px] h-fit rounded-b-3xl rounded-t-3xl"
              src={landscape2}
            />
            <div className="mt-5">
              <p className="text-base font-semibold">Sukapura</p>
              <div className="flex gap-2 text-sm  text-[#777E91] items-center">
                <BsHouse /> <p>600,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** divider */}
      <div className="divide-y-2">
        <div></div>
        <div></div>
      </div>
      {/** search */}
      <div className="px-60 divide-y pt-10">
        <Search />
        <div className=" mt-10"></div>
      </div>
      {/** search */}
      <div className=""></div>

      <div className=" flex pt-7 font-poppins">
        <div className="w-96  mr-4 divide-y-2">
          <div className=" top-5 py-4">
            <ul className="list-item py-3">
              <li>
                <div className="flex items-center justify-center gap-3  ">
                  <BiFilterAlt className="text-[#777E90]" />{" "}
                  <span className="font-semibold">Filter</span>
                </div>
              </li>
            </ul>
          </div>
          {/**Durasi */}
          <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
            <span className="">Durasi</span>
            <div className="flex flex-col text-sm gap-6 pl-5">
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Harian</label>{" "}
              </div>
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Mingguan</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Bulanan</label>{" "}
              </div>
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Tahunan</label>{" "}
              </div>
            </div>
          </div>
          {/**Jenis Kosan */}
          <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
            <span className="">Jenis Kosan</span>
            <div className="flex flex-col text-sm gap-6 pl-5">
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />
                <label htmlFor="">Laki-Laki</label>{" "}
              </div>
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Perempuan</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Campur</label>{" "}
              </div>
            </div>
          </div>
          {/**Fasilitas Kamar */}
          <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
            <span className="">Fasilitas Kamar</span>
            <div className="flex flex-col text-sm gap-6 pl-5">
              <ul className="list-item list-disc list-outside list-white">
                <li className="flex flex-col gap-6">
                  Ukuran Kamar
                  <div className="flex justify-between items-center gap-3">
                    <label htmlFor="">Panjang</label>{" "}
                    <div className="flex flex-row items-center gap-3">
                      <button className="text-slate-300">
                        {" "}
                        <FiMinusCircle className=" text-slate-300 w-4 h-4" />{" "}
                      </button>
                      <div>0</div>
                      <button className="">
                        {" "}
                        <FiPlusCircle className=" text-slate-600 w-4 h-4" />{" "}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between  items-center gap-3">
                    <label htmlFor="">Lebar</label>{" "}
                    <div className="flex flex-row items-center gap-3">
                      <button className="text-slate-300">
                        {" "}
                        <FiMinusCircle className=" text-slate-300 w-4 h-4" />{" "}
                      </button>
                      <div>0</div>
                      <button className="">
                        {" "}
                        <FiPlusCircle className=" text-slate-600 w-4 h-4" />{" "}
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="list-item list-disc list-outside list-white">
                <li className="flex flex-col gap-6">
                  Isi Kamar
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Kasur</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Springbed</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Bantal</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Guling</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Lemari</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Meja</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Kursi</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Karpet</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Kipas Angin</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">AC</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Wifi</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Listrik Token</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Kamar Mandi Dalam</label>{" "}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      className="accent-slate-500 w-4 h-4"
                      type="checkbox"
                    />{" "}
                    <label htmlFor="">Kamar Mandi Luar</label>{" "}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/**Aturan */}
          <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
            <span className="">Aturan</span>
            <div className="flex flex-col text-sm gap-6 pl-5">
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />
                <label htmlFor="">Akses 24 Jam</label>{" "}
              </div>
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Boleh Merokok</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Bawa Peliharaan</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Tamu Menginap</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">
                  Lawan Jenis Dilarang <br /> Masuk Kamar
                </label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Bebas</label>{" "}
              </div>{" "}
            </div>
          </div>
          {/**Fasilitas Umum */}
          <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
            <span className="">Fasilitas Umum</span>
            <div className="flex flex-col text-sm gap-6 pl-5">
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />
                <label htmlFor="">Ruang Jemur</label>{" "}
              </div>
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Ruang Tamu</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Ruang Dapur</label>{" "}
              </div>{" "}
            </div>
          </div>
          {/**Parkir */}
          <div className="flex flex-col gap-4 py-6 px-8 font-semibold">
            <span className="">Parkir</span>
            <div className="flex flex-col text-sm gap-6 pl-5">
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />
                <label htmlFor="">Parkir Mobil</label>{" "}
              </div>
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Parkir Motor</label>{" "}
              </div>{" "}
              <div className="flex items-center gap-3">
                <input className="accent-slate-500 w-4 h-4" type="checkbox" />{" "}
                <label htmlFor="">Parkir Sepeda</label>{" "}
              </div>{" "}
            </div>
          </div>
        </div>
        {/**Filter button*/}
        <div className="w-full  mr-4 items-center   font-poppins divide-y-2">
          <div className="flex flex-row gap-8  top-5 py-4  text-[#777E90]">
            {" "}
            <button className="border rounded-md border-2 items-center justify-center py-3 px-3">
              Rekomendasi
            </button>{" "}
            <button className="border rounded-md border-2 items-center justify-center py-3 pl-3 pr-28">
              Harga
            </button>{" "}
            <button className="border rounded-md border-2 items-center justify-center py-3 px-3">
              Berdasarkan Ulasan
            </button>{" "}
            <button className="border rounded-md border-2 items-center justify-center py-3 px-3">
              Jarak Ke Tel-U
            </button>{" "}
          </div>
          {/**Scroll Product*/}
          <div
            className="w-full h-[2034px] grid grid-cols-4 gap-6 py-2 overflow-y-scroll overflow-y-hidden 
          "
          >
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold"> kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full  justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col border rounded-3xl w-60 h-[323px]">
              <img
                className=" flex flex-none order-[0px]  h-[172px] rounded-t-3xl"
                src={landscape2}
                alt=""
              />
              <div className="flex flex-col divide-y-2 items-center justify-center">
                <div className="flex flex-col ">
                  <div className="flex px-6 py-5  ">
                    <span className="font-semibold">kontrakan pbb</span>
                    <div className="flex flex-col border border-4 border-[#58C27D] rounded-md px-2 py-0 items-center justify-center text-xs font-semibold ">
                      <span className="text-[#B1B5C3] ">
                        <s>RP.600.000</s>
                      </span>
                      <span className="text-green-600">RP.500.000</span>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 text-sm items-center justify-center pb-1 -mt-2 text-xs">
                    <div className="flex items-center ">
                      <p className="px-1 text-xl text-yellow-400">
                        <HiStar />
                      </p>{" "}
                      <p className="font-semibold">4.8</p>
                    </div>
                    <div className="text-[#777E90] font-light ">
                      (12 reviews)
                    </div>
                  </div>
                </div>
                <div className="flex  w-full justify-center items-center pt-2 text-[#777E90] font-light text-xs  ">
                  <span>700 meter ke telkom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Kontrakan;
