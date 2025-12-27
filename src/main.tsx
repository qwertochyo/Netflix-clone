import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Home from './pages/Home.tsx'
import Provider from './components/provider/Provider.tsx'
import MainWrapper from './components/main-wrapper/MainWrapper.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <MainWrapper>
          <Home />
        </MainWrapper>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
