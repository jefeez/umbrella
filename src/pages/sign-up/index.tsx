import Umbrella from '../../components/Umbrella';
import Bar from '../../layouts/bar';
import Sign from '../../layouts/sign';
import Toolbar from '../../layouts/toolbar';
import Wrapper from '../../layouts/wrapper';
import Form from './form';

export default function SignUp() {
  return (
    <Wrapper>
      <div className="h-full flex">
        <Toolbar>
          <Umbrella />
        </Toolbar>
        <Sign>
          <Form />
        </Sign>
      </div>
    </Wrapper>
  );
}
