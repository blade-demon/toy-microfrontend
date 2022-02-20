import { IAppInfo, ILifecycle } from './types'

import { setAppList } from './appList'
import { setLifeCycleList } from './lifeCycle'

export const registerMicroApp = (
  appList: IAppInfo[],
  lifecycle?: ILifecycle
) => {
  appList && setAppList(appList)
  lifecycle && setLifeCycleList(lifecycle)
}

export const start = () => {}
