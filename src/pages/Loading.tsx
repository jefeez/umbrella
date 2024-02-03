import Umbrella from '../components/Umbrella';
import Wrapper from '../layouts/wrapper';

export default function Loading() {
  return (
    <Wrapper>
      <div className="w-full h-full flex justify-center items-center bg-dark-800">
        <Umbrella />
      </div>
    </Wrapper>
  );
}
