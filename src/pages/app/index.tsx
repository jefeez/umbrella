function App() {
  return (
    <div className="w-screen h-screen dark ">
      <div className="w-full h-full flex p-2 dark:bg-dark-1000 text-gray-300 font-jetbrains">
        <div className="w-full h-full flex border border-dark-500">
          {/* leftbar */}
          <div className="h-full flex">
            {/* toolbar */}
            <div className="w-18 shrink-0 h-full flex flex-col border-r dark:border-dark-500 dark:bg-dark-800 ">
              {/* umbrella */}
              <div className="w-18 h-18 shrink-0 flex justify-center items-center">
                <i className="fa-solid fa-umbrella text-3xl" />
              </div>
              {/* nav */}
              <div className="w-full h-full" />
              {/* avatar */}
              <div className="w-18 h-18 flex shrink-0 items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 border border-dark-500 p-1 overflow-hidden rounded-full">
                  <img
                    className="rounded-full"
                    alt=""
                    src="https://res.cloudinary.com/drrsfzeci/image/upload/v1706804268/ghost/uxyir8wi10u3xmnjgeem.png"
                  />
                </div>
              </div>
            </div>
            {/* tab */}
            <div className="w-72 shrink-0 flex flex-col h-full border-r dark:border-dark-500 dark:bg-dark-800 ">
              {/* bar */}
              <div className="w-full h-12 flex items-center shrink-0 border-b dark:border-dark-500 dark:bg-dark-700 ">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-filter" />
                </div>
                <div className="flex items-center font-extrabold text-xs">FILTERS</div>
              </div>
            </div>
          </div>
          {/* display */}
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-12 shrink-0 border-b dark:border-dark-500 dark:bg-dark-700 ">
              {/* bar */}
              <div className="w-full h-12 flex items-center shrink-0 border-b dark:border-dark-500 dark:bg-dark-700 ">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-at" />
                </div>
                <div className="flex items-center font-extrabold text-xs">GLOBALS</div>
              </div>
            </div>
            {/* messages */}
            <div className="w-full h-full dark:bg-dark-800  scrollbar-thin overflow-y-scroll  scrollbar-thumb-indigo-500 scrollbar-track-dark-900 ">
              {/* body */}
              <div className="p-2 pb-3 flex mb-2">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <div className="flex items-center justify-center w-10 h-10 border border-dark-500 p-1 overflow-hidden rounded-full">
                    <img
                      className="rounded-full"
                      alt=""
                      src="https://res.cloudinary.com/drrsfzeci/image/upload/v1706804268/ghost/uxyir8wi10u3xmnjgeem.png"
                    />
                  </div>
                </div>

                <div className="w-full px-2 flex flex-col ">
                  <div className="h-10 flex items-center text-xs justify-between font-extrabold">
                    <span>JE7Z</span>
                    <span>14:16</span>
                  </div>
                  <div className="w-full text-sm font-medium">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sequi officia
                    numquam error dolorem porro, temporibus iste recusandae voluptatem, cumque
                    fugiat, nobis iusto modi aliquam.
                  </div>
                </div>
              </div>
            </div>
            {/* typing */}
            <div className="w-full h-10 shrink-0 border-t dark:border-dark-500 dark:bg-dark-800" />
            {/* handler */}
            <div className="w-full h-12 flex shrink-0 border-t dark:border-dark-500 dark:bg-dark-800">
              <input
                type="text"
                className="w-full h-full bg-dark-800 focus:ring-0 border-none outline-none"
                value=""
              />
              <div className="w-12 h-12 flex r justify-center items-center cursor-pointer hover:text-indigo-500">
                <i className="fa-solid fa-face-smile-wink " aria-hidden="true" />
              </div>
            </div>
          </div>
          {/* rightbar */}
          <div className="w-72 shrink-0 h-full flex flex-col border-l dark:border-dark-500 dark:bg-dark-800">
            <div className="w-full h-12 shrink-0 border-b dark:border-dark-500 dark:bg-dark-700 ">
              {/* bar */}
              <div className="w-full h-12 flex items-center shrink-0 border-b dark:border-dark-500 dark:bg-dark-700 ">
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="fa-solid fa-at" aria-hidden="true" />
                </div>
                <div className="flex items-center font-extrabold text-xs">ONLINES</div>
              </div>
            </div>
            {/* onlines */}
            <div className="w-full h-full flex flex-col p-2">
              {/* user */}
              <div className="w-full flex items-center border-dark-500">
                <div className="flex items-center justify-center w-8 h-8 ml-1 border border-dark-500 p-1 overflow-hidden rounded-full">
                  <img
                    className="rounded-full"
                    alt=""
                    src="https://res.cloudinary.com/drrsfzeci/image/upload/v1706804268/ghost/uxyir8wi10u3xmnjgeem.png"
                  />
                </div>
                <div className="h-10 flex ml-2 items-center text-xs font-extrabold">Jeferson</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
