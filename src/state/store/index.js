import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'

import { rootReducer as reducer } from '../reducers'
import { rootEpic } from '../epics'

const epicMiddleware = createEpicMiddleware()
const baseMiddleware = applyMiddleware(epicMiddleware)
const middleware = composeWithDevTools(baseMiddleware)

export default function configureStore () {
  const store = createStore(reducer, middleware)
  epicMiddleware.run(rootEpic)
  return store
}
