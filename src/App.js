import Row from './components/Row';
import './styles/App.css';
import request from './components/request';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Banner fetchUrl={request.action}/>
      <Row title='Netflix Orginals' fetchUrl = {request.originals} isLarge={true}/>
      <Row title='Trending ' fetchUrl = {request.trending}/>
      <Row title='Action ' fetchUrl = {request.ActionMovies}/>
      <Row title='Romance ' fetchUrl = {request.RomanceMovies}/>
      <Row title='Comedy ' fetchUrl = {request.ComedyMovies}/>
      <Row title='Horror ' fetchUrl = {request.HorrorMovies}/>
      <Footer />
    </div>
  );
}

export default App;
