import React, { Component } from 'react';

import gql from "graphql-tag";
import './App.css'

export const CatContainerFragment = gql`
fragment CatContainerFragment on Cat {
  id
  name
  rating
  likes
}
`

class CatContainer extends Component {
  render() {
    const { name, rating, likes } = this.props;
    return (
      <div key={name} className="catContainerFragment">
        <h1>{name}</h1>
        <h2>{rating}/5</h2>
        <h3>{likes} likes</h3>
      </div>
    );
  }
}

export default CatContainer;
