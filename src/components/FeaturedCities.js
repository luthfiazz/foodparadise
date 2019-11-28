import React from 'react'
import CityCard from './CityCard'


const FeaturedCities = (props) =>(
    <div>
        <div className="row">
          <div className="col-12">
            <h3>Featured Cities</h3>
          </div>
        </div>
        <div className="row">

        {props.cities.map(city =>
    <CityCard key={city.id} city={city} />
)}

        </div>
    </div>
    
)

export default FeaturedCities