export default function Body() {
  return (
    <div className="p-2 flex">
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
        <div className="h-10 flex items-center text-xs  font-extrabold">
          <span>JE7Z</span>
          <span>&nbsp;- 14:16</span>
        </div>
        <div className="w-full text-sm font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sequi officia numquam
          error dolorem porro, temporibus iste recusandae voluptatem, cumque fugiat, nobis iusto
          modi aliquam.
        </div>
      </div>
    </div>
  );
}
