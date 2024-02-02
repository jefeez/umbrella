import Avatar from '../../../components/Avatar';
import Umbrella from '../../../components/Umbrella';
import Toolbar from '../../../layouts/toolbar';
import Sidetab from './sidetab';

export default function Sidebar() {
  return (
    <div className="h-full flex">
      <Toolbar>
        <Umbrella />
        <div className="w-full h-full flex flex-col items-center" />
        <Avatar />
      </Toolbar>
      <Sidetab />
    </div>
  );
}
