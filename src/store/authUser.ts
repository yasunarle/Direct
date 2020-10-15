import { createModel } from '@rematch/core'

// Types
interface IAuthUser {
  isLoggedIn: boolean
  id: string
  name: string
}
// interface IAuthUserState {
//   authUser: IAuthUser | null
// }
const sampleState: IAuthUser = {
  isLoggedIn: true,
  name: 'yasunari',
  id: 'hogehoge',
}
const INITIAL_STATE: IAuthUser = {
  isLoggedIn: false,
  id: '',
  name: '',
}
// Note: Setup
const authUser = createModel({
  state: INITIAL_STATE,
  reducers: {
    setUser(_state: IAuthUser, payload: IAuthUser) {
      return payload
    },
  },
  effects: (dispatch: any) => ({
    logIn(payload: IAuthUser, _rootState: any) {
      dispatch.authUser.setUser(sampleState)
    },
    logOut() {
      dispatch.authUser.setUser(INITIAL_STATE)
    },
  }),
})

export default authUser
