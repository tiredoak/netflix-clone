import './App.css';
import Row from './Row';
import requests from './requests';

const App = () => {
  return (
    <div>
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
};

export default App;
