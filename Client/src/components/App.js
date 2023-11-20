import '../styles/App.css';

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'

/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import User from './User';
import { CheckUserExist } from '../helper/helper';

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },

  {
    path : '/quiz',
    element : <CheckUserExist><Quiz /></CheckUserExist>
    //element : <Quiz></Quiz>
  },

  {
    path : '/result',
    element : <CheckUserExist><Result /></CheckUserExist>
    //element : <Result></Result>
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
