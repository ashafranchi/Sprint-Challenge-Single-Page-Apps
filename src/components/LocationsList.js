import React, { useEffect, useState } from 'react';
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationList() {
  // TODO: Add useState to track data from useEffect
const [locations, setLocations] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/location/`)
    .then(res => {
      setLocations(res.data.results)})
    .catch(err => console.log(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
if (locations) {
  return (
  <section className='location-list grid-view'>
    {locations.map((location) => (
    <LocationCard
      name={location.name}
      type={location.type}
      dimension={location.dimension}
    />))}
  </section>
  )
}
else {
  return null
}
}
