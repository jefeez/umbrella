export default function Body({
  hour,
  by,
  body,
}: {
  hour: string;
  by: {
    avatar: string;
    username: string;
  };
  body: string;
}) {
  return (
    <div className=" flex">
      <div className="w-10 h-10 shrink-0 flex items-center justify-center">
        <div className="flex items-center justify-center w-10 h-10 border border-dark-500 p-1 overflow-hidden rounded-full">
          <img className="rounded-full" alt="" src={by.avatar} />
        </div>
      </div>
      <div className="w-full px-2 flex flex-col ">
        <div className="h-10 flex items-center text-xs  font-extrabold">
          <span>{by.username}</span>
          <span>&nbsp;- {hour}</span>
        </div>
        <div className="w-full text-sm font-medium">{body}</div>
      </div>
    </div>
  );
}
