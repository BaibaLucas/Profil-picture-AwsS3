import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import SnackBar from './components/snackbar/snackbar';
import SimpleBackdrop from "./components/backdrop/backdrop";

ReactDOM.render(
  <SnackBar>
    <SimpleBackdrop>
      <App />
    </SimpleBackdrop>
  </SnackBar>
, document.getElementById("root"));
