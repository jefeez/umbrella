export default function Input() {
  return (
    <div className="w-full">
      <div className="text-xs font-semibold pb-2 px-2">
        <span>USERNAME:&nbsp;</span>
      </div>
      <input type="text" name="username" className="input" />
    </div>
  );
}
