import { Home } from './pages/Home.tsx'
import { DefaultLayout } from './components/DefaultLayout.tsx'
import { Routes, Route } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}