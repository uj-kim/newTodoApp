import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Mainpage from "./pages/Mainpage/Mainpage";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="main" element={<Mainpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
