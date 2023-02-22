import './App.css';

import WelcomeComponent from './components/welcomeComponent'
import AboutComponent from './components/AboutComponent';
import DonationContactForm from './components/ContactComponent';


function App() {

  return (
    <div className="App">
      <WelcomeComponent />
      <AboutComponent />
      <DonationContactForm />
    </div>
  );
}

export default App;
