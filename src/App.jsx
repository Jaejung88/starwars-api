import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import { Router, navigate } from '@reach/router';
// import Axios from 'axios';
import DisplayCard from './components/DisplayCard';
import Nothing from './components/Nothing'

function App() {

  // const [starwarsApis, setStarwarsApis] = useState([]);
  const [id, setId] = useState(0);
  const [apiCategory, setApiCategory] = useState("");
  const categories = ["---------------Select Category---------------", "films", "people", "planets", "species", "starships", "vehicles"]
  // const [info, setInfo] = useState([]);

  // useEffect(() => {
  //   Axios("https://swapi.dev/api/")
  //     .then(res => setStarwarsApis(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const handleQuery = (e) => {
    e.preventDefault();
    navigate(`/${apiCategory}/${id}`)
    setId(0);
    setApiCategory("");
  }

  return (
    <div className="App">
      <form className="col-5 mx-auto" onSubmit={handleQuery}>
        <div className="form-group">
          <select className="form-control" value={apiCategory} onChange={(e) => setApiCategory(e.target.value)}>
            {
              categories.map((category, i) => <option value={category} key={i}>{category}</option>)
            }
          </select>
          <label>ID:</label>
          <input className="form-control" type="number" value={id} onChange={(e) => setId(e.target.value)}/>
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <Router>
        <DisplayCard path="/:apiCategory/:id" />
        <Nothing default />
      </Router>
    </div>
  );
}

export default App;
