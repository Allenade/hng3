import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginPage from "./component/signin";
import { LoginPage } from "./component/signin";

import DragandDrop from "./component/draganddrop";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/gallery" element={<DragandDrop />} />
      </Routes>
    </Router>
  );
}

export default App;
