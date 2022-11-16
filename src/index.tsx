import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import { testCognito } from './config/aws';

import router from './router/index';

import "./assets/css/app.scss";

testCognito();

ReactDOM.render(<RouterProvider router={router} />, document.querySelector('#root'));
