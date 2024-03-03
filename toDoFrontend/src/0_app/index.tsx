import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import router from "./router"
import store from "./store"

import './index.scss'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App

export {
  router,
  store
}