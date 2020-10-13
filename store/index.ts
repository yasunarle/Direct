import { init, RematchRootState, RematchDispatch } from '@rematch/core'
import authUser from './authUser'

const models = {
  authUser,
}
const store = init({
  models,
})

export default store

export const { dispatch } = store
export type RootState = RematchRootState<typeof models>
export type RootDispatch = typeof store.dispatch
export type Store = typeof store
