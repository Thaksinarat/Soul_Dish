import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/section/Home'
import { Quiz } from './components/section/Quiz'

function App() {
  return (
    <Router basename="/soul_dish">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  )
}

export default App
