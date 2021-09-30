import React, { Component } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Input extends Component {
  state = {
    disabled: true,
  };

  handleChange = (e) => {
    if (e.target.value.length >= 1) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };
  render() {
    return (
      <div className="flex flex-col justify-center items-center text-center space-y-8">
        <div className="w-96 px-5 md:px-0">
          <h1 className="font-medium text-2xl text-gray-800 leading-loose">
            {this.props.title}
          </h1>
          <h6>{this.props.subtitle}</h6>
        </div>
        <div className="flex flex-col space-y-6">
          <form>
            <textarea
              name="message"
              rows="10"
              cols="30"
              className="border-2 w-72 h-28 p-1 outline-none"
              onChange={this.handleChange}
            />
          </form>
          {this.props.q1 ? (
            <>
              {this.state.disabled ? (
                <Link
                  to={{
                    pathname: this.props.r1,
                    state: {
                      s1: this.props.s1,
                    },
                  }}
                >
                  <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400 ml-4">
                    {this.props.q1}
                    <FiArrowRight />
                  </div>
                </Link>
              ) : (
                <Link to={this.props.r2}>
                  <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400 ml-4">
                    {this.props.q2}
                    <FiArrowRight />
                  </div>
                </Link>
              )}
            </>
          ) : (
            <>
              {this.state.disabled ? (
                <></>
              ) : (
                <Link
                  to={{
                    pathname: this.props.r2,
                    state: {
                      s2: this.props.s2,
                    },
                  }}
                >
                  <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400 ml-4">
                    {this.props.q2}
                    <FiArrowRight />
                  </div>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    );
  }
}
