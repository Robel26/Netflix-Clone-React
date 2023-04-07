import "./App.css";
import Banner from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";
import Row from "./Component/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="TopRateedMovies" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="ActionMovies" fetchURL={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchURL={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
