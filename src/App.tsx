import { Routes, Route } from 'react-router-dom'
import AllAnime from './pages/AllAnime'

function App() {
  return (
      <Routes>
        <Route path="/" element={<AllAnime />} />
      </Routes>
  )
}

export default App
