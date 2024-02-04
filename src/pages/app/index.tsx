import { SocketProvider } from '../../contexts/socket';
import Wrapper from '../../layouts/wrapper';
import Display from './display';
import Sidebar from './sidebar';

function App() {
  return (
    <Wrapper>
      <div className="ghost">
        <SocketProvider>
          <Sidebar />
          <Display />
        </SocketProvider>
      </div>
    </Wrapper>
  );
}

export default App;
