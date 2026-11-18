import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import "./css/index.css";
import theme from "./app/MaterialTheme";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element "#root" was not found');
}
const root = createRoot(container)

// Global integrations: Redux, ReactQuery ...
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

// Production uchun yordam beradigan 3 xil components: Screen, Sectional, Common

// Publishing uchun yordam beradigan 3 xil components, ya'ni ularning ko'rinishi mavjud emas: Container, Stack, Box 