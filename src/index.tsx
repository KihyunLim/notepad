import * as React from "react";
import * as ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

import router from './router/index';

import "./assets/css/app.scss";

ReactDOM.render(<RouterProvider router={router} />, document.querySelector('#root'));
