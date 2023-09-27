import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ThemeContextWrapper from "./context/ThemeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextWrapper>
    <App />
  </ThemeContextWrapper>
);
