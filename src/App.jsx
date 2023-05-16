import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom"
import Home from "./Pages/Home"
import Project from "./Pages/Project"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route
            path="*"
            element={<h1>Page not found 404</h1>}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
