import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import { Aws } from './config/Aws';
import router from './router/index';

import "./assets/css/app.scss";

// @ts-ignore
const aws = new Aws();

ReactDOM.render(<RouterProvider router={router} />, document.querySelector('#root'));
