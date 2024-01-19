import { createBrowserRouter } from 'react-router-dom'

import { routesNames, routesNamesApp } from './routes'
import LayoutApp from '../pages/layout';
import SendTransactionPage from '../pages/send';
import RecieveTransactionPage from '../pages/recieve';
import MessageSendSuccess from '../pages/sendMesssageSucces';
import MessageRecieveSuccess from '../pages/recieveMesssageSucces';
import Balance from '../pages/balance';
const routesApp = [
  {
    path: routesNamesApp.sendTransaction,
    element: <SendTransactionPage/>
  },
  {
    path: routesNamesApp.reciveTransaction,
    element: <RecieveTransactionPage/>
  },
  {
    path: routesNamesApp.balance,
    element: <Balance/>
  },
]

const router = createBrowserRouter([
  {
    path: routesNames.init,
    element: <LayoutApp />,
    children: routesApp
  },
  {
    path: routesNames.messageSendSuccess,
    element: <MessageSendSuccess />,
  },
  {
    path: routesNames.messageRecieveSuccess,
    element: <MessageRecieveSuccess />,
  },

  
])

export default router;