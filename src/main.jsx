import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, createBrowserRouter, RouterProvider, useLocation } from 'react-router';
import { Provider } from 'react-redux';
import HomeView from './pages/HomeView.jsx';
import MasterLayout from './MasterLayout.jsx'
import { store } from './store.js';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import Header from './others/Header.jsx';
import Skill from './pages/Skill.jsx';



export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
};


const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <>
          <MasterLayout />
          <ScrollToTop />
        </>,
      children: [
        {
          path: '/header',
          element: <Header />
        },
        {
          path: '/',
          element: <HomeView />
        },
        {
          path: '/about-section',
          element: <About />
        },
        {
          path: '/about-section',
          element: <About />
        },
        {
          path: '/resume-section',
          element: <Resume />
        },
        {
          path: '/skill-section',
          element: <Skill />
        },
        {
          path: '/contact-section',
          element: <Contact />
        },
      ]
    }
  ]
)


const roots = createRoot(document.getElementById('root'));
roots.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)