import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from "./Heading";
import InputQuery from "./InputQuery";
import SubHeading from "./SubHeading";
import SubmitButton from "./Heading";

const App = () => {
  return (
    <div id="main">
      <Heading></Heading>
      <InputQuery></InputQuery>
      <SubHeading></SubHeading>
      <SubmitButton></SubmitButton>
    </div>
  )
}

export default App;
