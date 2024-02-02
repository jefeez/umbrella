function Sign() {
  return (
    <div className="wrapper">
      <div className="h-full flex">
        <div className="toolbar" />
        <div className="sign">
          <div className="bar" />
          <form className="form">
            <div className="w-full">
              <div className="text-xs font-semibold pb-2 px-2">
                <span>USERNAME:&nbsp;</span>
              </div>
              <input type="text" name="username" className="input" />
            </div>
            <div className="w-full">
              <div className="text-xs font-semibold pb-2 px-2">
                <span>EMAIL:&nbsp;</span>
              </div>
              <input type="email" name="email" className="input" />
            </div>
            <div className="w-full">
              <div className="text-xs font-semibold pb-2 px-2">
                <span>PASSWORD:&nbsp;</span>
              </div>
              <input type="password" name="password" className="input" />
            </div>
            <div className="w-full">
              <button
                type="submit"
                className="w-full py-4 text-white font-bold text-xs rounded-sm bg-indigo-500 hover:bg-indigo-600">
                SIGN
              </button>
            </div>
          </form>
          <div className="bar" />
        </div>
      </div>
    </div>
  );
}

export default Sign;
