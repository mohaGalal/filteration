
import About from './about';
import './App.css';
import Recipes from './recipes';
import Intro from './section1';
import Ourwork from './section2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tasty from './testy';
import Contact from './contactUs';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Ourwork/>
      <About/>
      <Recipes/>
      <Tasty/>
      <Contact/>
    </div>
  );
}

export default App;
