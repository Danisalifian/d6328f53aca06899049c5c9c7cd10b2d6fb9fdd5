import { BrowserRouter } from "react-router-dom";
import Route from "./routes";
import Appbar from "./components/appBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Appbar />
          <Route />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
