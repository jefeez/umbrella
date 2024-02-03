import Icon from '../../components/Icon';
import Name from '../../components/Name';
import Umbrella from '../../components/Umbrella';
import Bar from '../../layouts/bar';
import Sign from '../../layouts/sign';
import Toolbar from '../../layouts/toolbar';
import Wrapper from '../../layouts/wrapper';
import Form from './form';

export default function Avatar() {
  return (
    <Wrapper>
      <div className="h-full flex">
        <Toolbar>
          <Umbrella />
        </Toolbar>
        <Sign>
          <Bar>
            <div className="h-full flex items-center">
              <Icon awesome="fa-solid fa-filter" />
              <Name>AVATAR</Name>
            </div>
          </Bar>
          <Form />
          <Bar />
        </Sign>
      </div>
    </Wrapper>
  );
}
