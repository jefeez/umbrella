import Bar from '../layouts/bar';

export default function Modal() {
  return (
    <div className=" bg-dark-1000 bg-opacity-50 absolute top-0 right-0 bottom-0 left-0">
      <div className="relative left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] w-[30rem] border-l border-r border-dark-500 ">
        <Bar>
          <div className="w-full h-full flex items-center">
            <div className="w-12 h-12 flex justify-center items-center">
              <i className="fa-solid fa-bars" />
            </div>
            <div className="flex items-center text-xs font-bold text-center">MODEL</div>
          </div>
          <div className="w-12 h-12 shrink-0 flex justify-center items-center cursor-pointer hover:text-indigo-500">
            <i className="fa-solid fa-xmark " />
          </div>
        </Bar>
        <div className="w-full h-96 bg-dark-800" />
        <Bar>
          <div className="w-full p-2 flex flex-row-reverse gap-1">
            <button type="button" className="btn-submit">
              SUBMIT
            </button>
            <button type="button" className="btn-cancel">
              CANCEL
            </button>
          </div>
        </Bar>
      </div>
    </div>
  );
}
