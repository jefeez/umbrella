import Icon from '../../../../../components/Icon';
import Name from '../../../../../components/Name';
import Bar from '../../../../../layouts/bar';
import Handler from './handler';
import Messages from './messages';

function Container() {
  return (
    <div className="container">
      <Bar>
        <div className="h-full flex items-center">
          <Icon awesome="fa-solid fa-at" />
          <Name>GLOBALS</Name>
        </div>
      </Bar>
      <Messages />
      <Handler />
    </div>
  );
}

export default Container;
