import React from 'react'
import { Card } from "semantic-ui-react";

export default function EpisodeCard (props) {
  return (
  <Card>
    <Card.Content>
      <h2>{props.name}</h2>
      <h3>{props.episode}</h3>
      <h3>{props.air_date}</h3>
    </Card.Content>
  </Card>
  );
};