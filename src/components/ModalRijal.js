import React from "react";

function ModalRijal({ isVisible, onClick }) {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center
          "
    >
      <div className="flex flex-col">
        <div>
          <div className="grid grid-cols-1 bg-[#353945]">
            <div class="grid justify-items-center pt-8 pb-8">
              <div class="bg-[#f7f7f7] rounded-lg p-6 shadow-xl w-[544px]">
                <h1>Lupa Password?</h1>
                <label class="block">
                  <input
                    type="email"
                    name="email"
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    placeholder="masukan email kamu"
                  />
                </label>
                <button class="bg-indigo-500 opacity-100  ">ini button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalRijal;
