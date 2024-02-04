export default function Emit({
  msg,
  by,
  color,
}: {
  msg: string;
  color: string;
  by: {
    avatar: string;
    username: string;
  };
}) {
  return (
    <div className={`flex w-80 h-10 ${color} items-center rounded-full`}>
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-10 h-10 p-1 overflow-hidden rounded-full">
          <img className="rounded-full" alt="" src={by.avatar} />
        </div>
      </div>
      <div className=" h-10 justify-center items-center rounded-full px-2 flex flex-col ">
        <div className="w-full text-sm  text-white rounded-full font-medium">{msg}</div>
      </div>
    </div>
  );
}
