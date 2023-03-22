import './Main.scss';
import { HomeSlider, GridMenu } from '../../StoreComponents/index';

export const Main = () => {
  return (
    <main className="main">
      <HomeSlider/>
      <GridMenu/>
    </main>
  );
};