//import logo from './logo.svg';
import './App.css';

//import {Helmet} from "react-helmet";


import '../src/css/bootstrap.min.css';
import '../src/css/font-awesome.min.css';
import '../src/css/shortcode/shortcodes.css';
import '../src/css/slick.css';
import '../src/style.css';
import '../src/css/responsive.css';

//import MenuHeader from './component/MenuHeader/MenuHeader';
import HomePageSlider from './component/HomePageSlider/HomePageSlider';


function App() {
  return (
    <div className="App">      
      <HomePageSlider></HomePageSlider>
    </div>
  );
}

export default App;
