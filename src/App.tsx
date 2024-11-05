import { useState, Routes, Route } from 'react'
import AllAnime from './pages/AllAnime'

function App() {
  return (
      <Routes>
        <Route path="/" element={<AllAnime />} />
      </Routes>
  )
}

export default App
