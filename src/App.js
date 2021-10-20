import { BrowserRouter, Route } from "react-router-dom";
import FullPost from "./Pages/FullPost";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/:id" exact component={FullPost} />
    </BrowserRouter>
  );
}

export default App;
