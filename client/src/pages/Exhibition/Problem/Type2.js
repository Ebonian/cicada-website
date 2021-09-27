import React, { Component } from "react";

export default class Type2 extends Component {
  componentDidMount() {
    const { pluem } = this.props.location.state;
    console.log(pluem);
  }

  render() {
    return (
      <div>
        <h1>Type2!</h1>
      </div>
    );
  }
}
