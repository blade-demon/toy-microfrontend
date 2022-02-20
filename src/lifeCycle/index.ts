import { ILifeCycle } from 'src/types'

let lifeCycleList: ILifeCycle[] = []

export const setLifeCycleList = (list: ILifeCycle[]) => {
  lifeCycleList = list
}

export const getLifeCycleList = () => {
  return lifeCycleList
}
