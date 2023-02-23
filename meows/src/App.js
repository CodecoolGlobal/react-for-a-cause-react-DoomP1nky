import './App.css';

import WelcomeComponent from './components/welcomeComponent'
import AboutComponent from './components/AboutComponent';
import DonationContactForm from './components/ContactComponent';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';


function App() {

  return (
    <div className="App">
      <WelcomeComponent />
      <AboutComponent />
      <ImageSlider slides={SliderData} />
      <DonationContactForm />
    </div>
  );
}

export default App;
  