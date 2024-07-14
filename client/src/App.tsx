import { BrowserRouter as Router , Route , Routes , Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/user/Navbar"
import QuizPage from "./pages/QuizPage"

function App() {

  return (
   <Router >
      < Routes>
        <Route path="/" element={ < Navbar /> } >
          < Route path="home" element={ < Home /> } />
          < Route path="quiz" element={ < QuizPage /> } />
        </Route>
      </Routes>
   </Router>
  )
}

export default App
