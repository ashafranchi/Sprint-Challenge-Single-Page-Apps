import React from 'react'
import { Card } from "semantic-ui-react";

export default function LocationCard (props) {
  return (
  <Card>
    <Card.Content>
      <h2>{props.name}</h2>
      <h3>{`${props.type} ${props.dimension}`}</h3>
    </Card.Content>
  </Card>
  );
};