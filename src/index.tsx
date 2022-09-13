import { render } from "react-dom";
import React from 'react';
import { Counter } from "./components/Counter";

render(
  <div>
    <Counter />
  </div>,
  document.getElementById('root')
)
