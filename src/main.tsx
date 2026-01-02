import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Home from './pages/Home.tsx'
import Provider from './components/provider/Provider.tsx'
import MainWrapper from './components/main-wrapper/MainWrapper.tsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import MediaWrapper from './components/media/MediaWrapper.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/media/:slug" element={<MediaWrapper />} />
          </Routes>
        </MainWrapper>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
