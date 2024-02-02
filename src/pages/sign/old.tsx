function Sign() {
  return (
    <div className="w-screen h-screen dark ">
      <div className="w-full h-full flex p-2 dark:bg-dark-1000 text-gray-300 font-jetbrains">
        <div className="h-full flex border border-dark-500">
          {/* toolbar */}
          <div className="w-18 h-full flex flex-col bg-dark-800">
            {/* umbrella */}
            <div className="w-18 h-18 shrink-0 flex justify-center items-center">
              <i className="fa-solid fa-umbrella text-3xl" />
            </div>
          </div>
          {/* sign */}
          <div className="w-[27rem] h-full flex flex-col bg-dark-800 border-l border-dark-500">
            {/* bar */}
            <div className="w-full h-12 flex shrink-0 border-b border-dark-500 bg-dark-700 shadow-dark-900">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="fa-solid fa-caret-right" aria-hidden="true" />
              </div>
              <div className="flex items-center font-extrabold text-xs">SIGN-IN</div>
            </div>
            <div className="w-full h-full flex flex-col gap-2 p-10">
              {/* input */}
              <div className="w-full">
                <div className="text-xs font-semibold py-2">
                  <span>USERNAME:&nbsp;</span>
                </div>
                <input
                  name="username"
                  className="w-full border border-dark-500 focus:border-indigo-500  py-3 focus:ring-0  bg-dark-900"
                  type="password"
                />
              </div>
              {/* input */}
              <div className="w-full">
                <div className="text-xs font-semibold py-2">
                  <span>E-MAIL:&nbsp;</span>
                </div>
                <input
                  name="email"
                  className="w-full border border-dark-500 focus:border-indigo-500  py-3 focus:ring-0  bg-dark-900"
                  type="email"
                />
              </div>
              {/* input */}
              <div className="w-full">
                <div className="text-xs font-semibold py-2">
                  <span>E-MAIL:&nbsp;</span>
                </div>
                <input
                  name="email"
                  className="w-full border border-dark-500 focus:border-indigo-500  py-3 focus:ring-0  bg-dark-900"
                  type="email"
                />
              </div>
              {/* button */}
              <div className="w-full my-4">
                <button
                  type="submit"
                  className="w-full text-center flex justify-center items-center font-semibold text-xs text-white rounded-sm bg-indigo-500 hover:bg-indigo-600 p-4">
                  SIGN-IN
                </button>
              </div>
              <div className="w-full flex flex-col py-2">
                <div className="w-full text-xs font-bold pl-5">
                  Don&apos;t have an account yet?&nbsp;&nbsp;
                  <a className="text-indigo-500 hover:text-indigo-400" href="/sign-up">
                    SIGN-UP
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex" />
      </div>
    </div>
  );
}

export default Sign;
