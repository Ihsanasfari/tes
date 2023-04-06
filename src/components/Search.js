import { BsSearch } from "react-icons/bs";
import { TbLocation } from "react-icons/tb";

const Search = () => {
  return (
    <div className="font-poppins">
      <div className="flex flex-col mt-6 ">
        <div className="flex  flex-row gap-3 items-center">
          <TbLocation className="w-6 h-6 text-[#B1B5C3]" />
          <span className="font-bold text-2xl">Lokasi</span>
        </div>
        <div className="flex flex-row">
          <input
            className="bg-[#FCFCFD] rounded-full w-full px-8 py-2"
            placeholder="Masukan nama lokasi/area"
          />
          <div className="bg-[#3B71FE] w-fit h-fit rounded-full p-4 cursor-pointer">
            <BsSearch size={24} color={"#FFFFFF"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
