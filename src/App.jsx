import * as React from 'react'
import { Routes, Route }from 'react-router-dom'
import Spinner from './components/spinner/spinner-component'
import NotFoundPage from './pages/not-found-page/not-found'
import './App.css'

const HomePage = React.lazy(() => import('./pages/home-page/home'))
const BuyingPage = React.lazy(() => import('./pages/buying-page/buying'))
const SellingPage = React.lazy(() => import('./pages/selling-page/selling'))
const ContactUsPage = React.lazy(() => import('./pages/contact-us-page/contact-us'))
const LandPage = React.lazy(() => import('./pages/land-page/land'))
const RentingPage = React.lazy(() => import('./pages/renting-page/renting'))
const AboutUsPage = React.lazy(() => import('./pages/about-us-page/about-us'))
const LoginPage = React.lazy(() => import('./pages/login-page/login'))
const SignUpPage = React.lazy(() => import('./pages/sign-up-page/sign-up'))


const App = () => (
  <>
    <React.Suspense
      fallback={<Spinner/>}
    >
      <Routes>
        <Route
          path='/'
          element={<HomePage/>} 
        />
        <Route
          path='/buying-page/'
          element={<BuyingPage/>} 
        />
        <Route
          path='/selling-page/'
          element={<SellingPage/>}
        />
        <Route
          path='/renting-page/'
          element={<RentingPage/>} 
        />
        <Route
          path='/contact-us-page/'
          element={<ContactUsPage/>}
        />
        <Route
          path='/land-page/'
          element={<LandPage/>}
        />
        <Route
          path='/about-us-page/'
          element={<AboutUsPage/>}
        />
        <Route
          path='/login-page/'
          element={<LoginPage/>}
        />
        <Route
          path='/sign-up-page/'
          element={<SignUpPage/>}
        />
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </React.Suspense>
  </>
)

export default App
