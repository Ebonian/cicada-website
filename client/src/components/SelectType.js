import React, { Component } from "react";
import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

export default class SelectType extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center text-center space-y-8">
        <div className="w-96">
          <h1 className="font-medium text-2xl text-gray-800 leading-loose">
            {this.props.title}
          </h1>
          <h6>{this.props.subtitle}</h6>
        </div>
        <div className="flex flex-col space-y-6">
          <Link
            to={{
              pathname: this.props.r,
              state: {
                s1: this.props.s1,
                s10: this.props.s10,
                s19: this.props.s19,
                s28: this.props.s28,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 1
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s2: this.props.s2,
                s11: this.props.s11,
                s20: this.props.s20,
                s29: this.props.s29,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 2
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s3: this.props.s3,
                s12: this.props.s12,
                s21: this.props.s21,
                s30: this.props.s30,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 3
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s4: this.props.s4,
                s13: this.props.s13,
                s22: this.props.s22,
                s31: this.props.s31,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 4
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s5: this.props.s5,
                s14: this.props.s14,
                s23: this.props.s23,
                s32: this.props.s32,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 5
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s6: this.props.s6,
                s15: this.props.s15,
                s24: this.props.s24,
                s33: this.props.s33,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 6
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s7: this.props.s7,
                s16: this.props.s16,
                s25: this.props.s25,
                s34: this.props.s34,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 7
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s8: this.props.s8,
                s17: this.props.s17,
                s26: this.props.s26,
                s35: this.props.s35,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 8
              <FiCircle />
            </div>
          </Link>

          <Link
            to={{
              pathname: this.props.r,
              state: {
                s9: this.props.s9,
                s18: this.props.s18,
                s27: this.props.s27,
                s36: this.props.s36,
              },
            }}
          >
            <div className="flex w-64 justify-between items-center text-lg border-2 bg-transparent border-gray-500 p-3 rounded-2xl cursor-pointer text-gray-700 duration-300 hover:bg-gray-400 hover:text-white hover:border-gray-400">
              ลักษณ์ 9
              <FiCircle />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
