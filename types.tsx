export interface IUser {
  id: string
  name: string
}
export interface IUserState {
  user: IUser | null
}
export type RootStackParamList = {
  Root: undefined
  Login: undefined
  NotFound: undefined
}

export type BottomTabParamList = {
  Home: IUser
  Search: undefined
  Talk: IUser
  Settings: IUser
}

export type HomeParamList = {
  Home: undefined
}

export type TalkParamList = {
  Talk: undefined
}
