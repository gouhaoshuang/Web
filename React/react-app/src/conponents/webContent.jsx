import React, { Component } from "react";
import { Link, useSearchParams } from "react-router-dom";

class WebContent extends Component {
  state = {
    searchParams : this.props.params[0],
    setSearchParams : this.props.params[1],
  };
  render() {
    console.log(this.state.searchParams.get('chapter'));

    return (
      <div>
        <h1>WEb - {this.state.searchParams.get('section')}</h1>
        <div>内容</div>
        <hr></hr>
        <Link to="/Web">返回</Link>
      </div>
    );
  }
}

export default (props) => <WebContent {...props} params={useSearchParams()} />;
