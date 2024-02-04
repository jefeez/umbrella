export default function Avatar({ avatar }: { avatar: string }) {
  return (
    <div className="w-18 h-18 shrink-0 flex items-center justify-center">
      <div className="flex items-center justify-center w-10 h-10 border border-dark-500 p-1 overflow-hidden rounded-full">
        <img className="rounded-full" alt="" src={avatar} />
      </div>
    </div>
  );
}
