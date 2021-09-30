import React, { Component } from "react";
import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class Choices extends Component {
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
          {this.props.q1 && (
            <Link
              to={{
                pathname: this.props.r1,
                state: {
                  s1: this.props.s1,
                  s4: this.props.s4,
                  s: this.props.s,
                },
              }}
            >
              <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
                {this.props.q1}
                <FiCircle />
              </div>
            </Link>
          )}
          {this.props.q2 && (
            <Link
              to={{
                pathname: this.props.r2,
                state: {
                  s2: this.props.s2,
                  s5: this.props.s5,
                  s: this.props.s,
                },
              }}
            >
              <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
                {this.props.q2}
                <FiCircle />
              </div>
            </Link>
          )}
          {this.props.q3 && (
            <Link
              to={{
                pathname: this.props.r3,
                state: {
                  s3: this.props.s3,
                  s6: this.props.s6,
                  s: this.props.s,
                },
              }}
            >
              <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
                {this.props.q3}
                <FiCircle />
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
