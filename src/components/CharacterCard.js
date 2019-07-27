import React from 'react'

export default function CharacterCard (props) {
  return (
  <span>
<div>
  <img src={props.image} alt={props.name}/>
  <h2>{props.name}</h2>
  <h3>{`${props.species} ${props.status}`}</h3>
</div>
  </span>
  );
};
