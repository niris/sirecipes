import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import SearchRecipes from "./SearchRecipes";
import BudgetTracker from "./BudgetTracker";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<SearchRecipes />} />
        <Route path="/tracker" element={<BudgetTracker />} />
        {/* <Route path="/profile/:userId" element={<Recipe />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
