import './App.css';
import { Navbar, Footer, Skills, Loader } from './components'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Skills />
      <Footer />
    </div>
  );
}
// const cursor = document.querySelector('#cursor');

// const moveCursor = (e)=> {
//   const mouseY = e.clientY;
//   const mouseX = e.clientX;
   
//   cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
// }

// window.addEventListener('mousemove', moveCursor)
export default App
