import '../styles/App.css';

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import User from './User';

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },

  {
    path : '/quiz',
    element : <Quiz></Quiz>
  },

  {
    path : '/result',
    element : <Result></Result>
  },

  {
    path : '/user',
    element : <User></User>
  },
])


function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
