interface IUser {
  id: string
  name: string
}
interface IUserState {
  user: IUser | null
}
export const user = {
  state: {
    id: 'u7df25c588m73',
    name: 'yasunari',
  },
  reducers: {
    setUser(state: IUserState, payload: IUser | null) {
      return payload
    },
  },
  effects: (dispatch: any) => ({
    logIn(payload: any, rootState: any) {
      dispatch.user.setUser(payload)
    },
    logOut() {
      dispatch.user.setUser(null)
    },
  }),
}
