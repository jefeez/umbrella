export default function Icon({ awesome }: { awesome: string }) {
  return (
    <div className="w-12 h-12 flex justify-center items-center">
      <i className={awesome} />
    </div>
  );
}
