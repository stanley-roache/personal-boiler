import { switchMap } from 'redux-observable'

export default function rootEpic (action$, state$) {
  return action$.pipe(switchMap(action => of()))
}
