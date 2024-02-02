import Bar from '../../../../layouts/bar';
import Insider from '../../../../layouts/insider';

export default function Sidetab() {
  return (
    <div className="sidebar">
      <Insider>
        <Bar />
        <div className="w-full h-full p-2" />
      </Insider>
    </div>
  );
}
