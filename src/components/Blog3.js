import React, { Component } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../styles/App.css";
import "../styles/Blog3.css";

class Blog3 extends Component {
  render() {
    return (
      <div className="blog3">
        <div className="logo">
          <Link to="/">
            <img src={require("../assets/images/logo.jpg")} alt="logo" />
          </Link>
        </div>
        <h1 className="bold">Coding Interview Crash Course: The Must - Know</h1>
        <p className="date"> 14 November 2019 </p>
        <p className="bold" id="intro">
          Introduction
        </p>
        <p>
          When preparing for a coding interview, the common way to practice is
          to do as many leetcode questions as you can. This method works in
          theory, but where it lacks is having a full understanding in all
          possible types of questions. You might do and understand the first 100
          most liked questions on leetcode, but get stuck when your interviewer
          asks you a Dynamic Programming question. <br />
          This article will help you understand the main types of coding
          problems and algorithms you should know and understand. Each section
          has an explantion of the main concepts for that type of problem and
          has 5 of my favorite leetcode problems for that type of problem.
        </p>
        <p className="bold"> Table of Contents: </p>
        <ol>
          <li>
            <HashLink smooth to="#bigo">
              Big O
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#array_strings">
              Arrays & Strings
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#linkedlists">
              Linked Lists
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Stacks & Queues
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Trees and Graphs
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Binary(Bit Manipulation)
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Math & Logic
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Recursion
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Dynamic Programming
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Sorting & Searching
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              System Design
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Testing
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#intro">
              Useful Resources
            </HashLink>
          </li>
        </ol>

        <p className="bold" id="intro">
          Big O
        </p>
        <p>
          I chose to talk about Big O first because it is such an important
          concept in understanding for all types of problems. <br />
          When solving a problem, not only do you want your algorithm to work
          but you want it to run optimally and efficiently. <br />
          Your algorithm will have a time and space complexity and Big O is the
          language that we use to describe that complexity. <br />
        </p>

        <p className="sub-bold">Time Complexity</p>

        <p>An algorithm runs...</p>

        <p className="bold" id="intro">
          Arrays & Strings
        </p>

        <p className="sub-bold">Arrays</p>

        <p>
          An array is a collection of items stored sequentially. <br />
          Before you even start working on a problem with arrays, always figure
          out if the array is sorted and if it's worth sorting the array first.
          Trying to figure out an algorithm for an unsorted array is a lot
          harder than a sorted one. <br />
          <br />
          Always be mindful of the costs of operations on an array. <br />
          <span className="sub-bold">Worst Case:</span>
          <ul>
            <li>lookup: O(1)</li>
            <li>append: O(1)</li>
            <li>insert: O(n)</li>
            <li>delete: O(n)</li>
            <li>space: O(n)</li>
          </ul>
          Inserting and deleting are very costly so when you need to insert and
          delete, consider using a Hash Table
        </p>

        {/* <p className="bold" id="intro">
          Linked Lists
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Stacks & Queues
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Trees and Graphs
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Binary Bit(Bit Manipulation)
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Math & Logic
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Recursion
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Dynamic Programming
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Sorting & Searching
        </p>
        <p> </p>
        <p className="bold" id="intro">
          System Design
        </p>
        <p> </p>
        <p className="bold" id="intro">
          System Design
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Testing
        </p>
        <p> </p>
        <p className="bold" id="intro">
          Useful Resources
        </p>
        <p> 
          https://yangshun.github.io/tech-interview-handbook/algorithms/array
          https://www.interviewcake.com/table-of-contents
          https://www.interviewcake.com/data-structures-reference

        </p>
        <p className="code-box"> </p> */}
      </div>
    );
  }
}

export default Blog3;
