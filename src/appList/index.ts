import { IAppInfo } from 'src/types'

let appList: IAppInfo[] = []

export const setAppList = (list: IAppInfo[]) => {
  appList = list
}

export const getAppList = () => {
  return appList
}

// 应用全局生命周期处理
