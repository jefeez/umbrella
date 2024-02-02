import Icon from '../../../../../components/Icon';
import Name from '../../../../../components/Name';
import Bar from '../../../../../layouts/bar';
import Insider from '../../../../../layouts/insider';

export default function Aside() {
  return (
    <div className="sidebar">
      <Insider>
        <Bar>
          <div className="h-full flex items-center">
            <Icon awesome="fa-solid fa-bars" />
            <Name>ASIDE</Name>
          </div>
        </Bar>
        <div className="w-full h-full p-2" />
      </Insider>
    </div>
  );
}
