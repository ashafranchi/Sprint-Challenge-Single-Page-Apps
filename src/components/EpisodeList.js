import React, { useEffect, useState } from 'react';
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/episode/`)
    .then(res => {
      setEpisodes(res.data.results)})
    .catch(err => console.log(err));
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
if (episodes) {
  return (
  <section className='episode-list grid-view'>
    {episodes.map((episode) => (
    <EpisodeCard
      name={episode.name}
      episode={episode.episode}
      air_date={episode.air_date}
    />))}
  </section>
  )
}
else {
  return null
}
}
