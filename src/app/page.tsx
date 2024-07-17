import Banner from './Components/Cbanner';
import Intro from './Components/Cintro';
import FeatureSlider from './Components/CfeatureSlider';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen w-full">   
    <Banner/>
    <Intro />
    <FeatureSlider />
    
    </main>
  );
}
