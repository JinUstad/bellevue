import logo from './logo.svg';
import './App.css';
import HeroImage from './Component/HeroImage';
import MoreInfo from './Component/MoreInfo';
import Description from './Component/Description';
import Video from './Component/Video';
import Amenties from './Component/Amenties';
import Theme from './Component/Theme';
import Plan from './Component/Plan';
import Star from './Component/Star';
import Bookready from './Component/Bookready';
import Question from './Component/Question';

function App() {
  return (
    <>
        <HeroImage/>
        <MoreInfo/>
        <Description/>
        <Video/>
        <Amenties/>
        <Theme/>
        <Plan/>
        <Star/>
        <Bookready/>
        <Question/>
    </>
  );
}

export default App;
