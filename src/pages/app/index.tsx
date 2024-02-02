import Wrapper from '../../layouts/wrapper';
import Display from './display';
import Sidebar from './sidebar';

function App() {
  return (
    <Wrapper>
      <div className="ghost">
        <Sidebar />
        <Display />
      </div>
    </Wrapper>
  );
}

export default App;
