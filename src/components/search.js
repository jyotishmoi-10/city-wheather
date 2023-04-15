import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import {geoURL, geoOptions } from "../API";

  
  const Search= ({onSearchChange})=>{

    const [search,setSearch] =useState(null);

    const handleOnChange= (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);

    }

    const loadoptions=(inputData)=>{
        return fetch(
            `${geoURL}/cities?minPopulation=1000000&namePrefix=${inputData}`,
            geoOptions
        )
        .then((response) => response.json())
        .then((response)=> {
            return {
                options:response.data.map((city)=>{
                    return {
                        value:`${city.latitude},${city.longitude}`,
                        label:`${city.name},${city.countryCode}`,
                    }
                })
            }
        })
        .catch((err) => console.error(err));
              
    };

    return (<AsyncPaginate 
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadoptions}
    />
    )
  }

  export default Search;