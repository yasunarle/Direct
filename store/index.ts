import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import authUser from './authUser'

const store = init({
  models: {
    authUser,
  },
})

export default store
export const { dispatch } = store
export type Store = typeof store
