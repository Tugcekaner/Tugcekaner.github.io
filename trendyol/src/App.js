
import AllNav from './components/AllNav';
import Help from './components/Help';
import OwlTop from './components/OwlTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.css';
import Help2 from './components/Help2';
import UrunCardRow from './components/UrunCardRow';
import OwlUrunler from './components/OwlUrunler';
import AllBlogs from './components/AllBlogs';
import AllPopuler from './components/AllPopuler';
import Footer from './components/Footer';





function App() {
  return (
    <div className="App">
      <AllNav id="topHead"></AllNav>
      <Help></Help>
      <OwlTop></OwlTop>
      <Help2></Help2>
      <UrunCardRow></UrunCardRow>
      <OwlUrunler></OwlUrunler>
      <UrunCardRow></UrunCardRow>
      <OwlUrunler></OwlUrunler>
      <UrunCardRow></UrunCardRow>
      <UrunCardRow></UrunCardRow>
      <AllBlogs></AllBlogs>
      <hr className='my-3' />
      <AllPopuler></AllPopuler>
      <Footer></Footer>
    </div>
  );
}

// const upButton = document.getElementById('up-button');
// upButton.addEventListener('click', () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// });



export default App;
