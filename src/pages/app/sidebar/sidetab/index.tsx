import Icon from '../../../../components/Icon';
import Name from '../../../../components/Name';
import Bar from '../../../../layouts/bar';
import Insider from '../../../../layouts/insider';

export default function Sidetab() {
  return (
    <div className="sidebar">
      <Insider>
        <Bar>
          <Bar>
            <div className="h-full flex items-center">
              <Icon awesome="fa-solid fa-filter" />
              <Name>SIDETAB</Name>
            </div>
          </Bar>
        </Bar>
        <div className="w-full h-full p-2" />
      </Insider>
    </div>
  );
}
