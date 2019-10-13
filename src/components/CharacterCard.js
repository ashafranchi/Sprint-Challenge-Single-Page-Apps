import React from 'react'
import { Card, Image } from "semantic-ui-react";

export default function CharacterCard (props) {
  return (
  <Card>
    <img src={props.image} alt={props.name}/>
    <Card.Content>
      <h2>{props.name}</h2>
      <h3>{`${props.status} ${props.species}`}</h3>
    </Card.Content>
  </Card>
  );
};
