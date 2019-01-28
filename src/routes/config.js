import App from 'pages/App'
import Home from 'pages/Home'
import About from 'pages/About'

const ROUTES = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/about',
        component: About
      }
    ]
  }
]

export default ROUTES