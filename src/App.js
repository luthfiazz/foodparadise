import React, { Component } from 'react';
import Navbar from './components/Navbar'
import FeaturedCities from './components/FeaturedCities'
import ImageAndWelcome from './components/ImageAndWelcome'
// import CityCard from '../componets/CityCard'
// import Navbar from '../componets/Navbar'
// import ImageAndWelcome from '../components/ImageAndWelcome'

class App extends Component {
  constructor(){
    super();
    this.state={
      keyword
    }
  }
  render() {
    const citiesDummy = [
      {id:72, name:"jakarta",country_name:"indonesia"},
      {id:11052, name:"bandung", country_name:"indonesia"},
      {id:170, name:"bali", country_name:"indonesia"}
    ];
      return (
        <div>
        <Navbar />
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
        <FeaturedCities cities={citiesDummy} />
        {/* start of search section */}
  <div className="row" style={{ marginBottom: 30 }}>
    <div className="col">
      <h3>Search City</h3>
      <div className="card">
        <div className="card-body">
          <div className="form-row">
            <div className="col-11">
              <input
                className="form-control"
                type="text"
                placeholder="Type keyword or city name"
                value={this.state.keyword}
                onChange={this.changeKeywordHandler}
              />
            </div>
            <div className="col-1">
              <button
                className="btn btn-primary"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end of search section */}
  
          
        </div>
      </div>
      
      );
  }
}



export default App;
