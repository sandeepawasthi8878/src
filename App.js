
import MainHeader from './component/Header/MainHeader';
import TopNavBar from './component/TopNavBar/TopNavBar';
import Crosual from './component/Crosual/Carousel';
import Videopart from './component/VideoPart/Videopart'
import Cart from './component/Cart/Cart';
import Paintings from './component/Paintings/Paintings';
import Video from './component/Video/videopart';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <TopNavBar />
      <MainHeader />
      <Crosual/>
      <Videopart/>
      <Cart/>
      <Paintings/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
