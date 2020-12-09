type UserId = string
type Language = 'JAPANESE' | 'ENGLISH'
type Country = 'JAPAN' | 'US' | 'UK'
type MessageRoomId = string
type Memo = {
  content: string
  takerId: string
  createdAt: Date
}
type ScheduledTalk = {
  giverId: string
  takerId: string
  startDate: Date
  endDate: Date
  isDeleted: boolean
}

interface IUser {
  uid: string
  userName: string
  fullName: string
  biography: string
  imageUrl: string
  bgImageUrl: string
  MinutesInApp: number
  followings: UserId[] // フォロー中
  followers: UserId[]
  livingInCountry: Country
  nativeLanguages: Language[]
  leaningLanguages: Language[]
  messageRoomIds: MessageRoomId[]
  memos: Memo[]
  scheduledTalks: ScheduledTalk[]
}
