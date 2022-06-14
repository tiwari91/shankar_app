import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Post from './components/post'
import NotFound from './components/notfound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
