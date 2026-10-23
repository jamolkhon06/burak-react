import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "./css/index.css";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";

// Global integrations: Redux, ReactQuery ...
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

// Production uchun yordam beradigan 3 xil components: Screen, Sectional, Common

// Publishing uchun yordam beradigan 3 xil components, ya'ni ularning ko'rinishi mavjud emas: Container, Stack, Box 