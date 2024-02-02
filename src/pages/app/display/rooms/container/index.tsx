import Bar from '../../../../../layouts/bar';
import Handler from './handler';
import Messages from './messages';

function Container() {
  return (
    <div className="container">
      <Bar />
      <Messages />
      <Handler />
    </div>
  );
}

export default Container;
