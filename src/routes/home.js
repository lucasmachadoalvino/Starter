import Home from '../screens/Home';

//const Home = lazy(() => import('../containers/Home'))
const route = [
  {
    path: '/',
    main: Home,
    exact: true
  }
]

export default route