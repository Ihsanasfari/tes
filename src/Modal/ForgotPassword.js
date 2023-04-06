import Button from "../components/Button";

import { MdClose } from "react-icons/md";
const ForgotPassword = ({ Visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "closebutton") onClose();
  };

  if (!Visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="z-10 fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center
        "
    >
      <div className="flex bg-white justify-between items-center px-[96px] py-[72px] rounded-2xl relative">
        <div
          className="w-8 h-8 rounded-full flex absolute bg-white -top-4 -right-4 cursor-pointer"
          onClick={handleOnClose}
          id="closebutton"
        >
          <MdClose className="m-auto" />
        </div>

        <div className="flex flex-col w-[352px] items-center">
          <h4 className="text-black text-3xl text-center items-center font-semibold ">
            Lupa Password ?
          </h4>
          <div className="mt-8 w-full">
            <div className="flex w-[352px]  items-center text-center justify-center ">
              <input
                className="bg-white border rounded-full w-full h-12 px-4"
                placeholder="Masukan email kamu"
              />
            </div>
            <div className="mt-4">
              <div className="mt-2">
                <div>
                  <Button>Reset Password</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
