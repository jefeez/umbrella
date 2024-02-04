export default function Online({ avatar, username }: { avatar: string; username: string }) {
  return (
    <div className="w-full flex items-center p-1">
      <div className="flex items-center justify-center w-10 h-10 border border-dark-500 p-1 overflow-hidden rounded-full">
        <img className="rounded-full" alt="" src={avatar} />
      </div>
      <div className="h-10 flex ml-2 items-center text-xs font-extrabold">{username}</div>
    </div>
  );
}
