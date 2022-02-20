export interface IAppInfo {
  name: string
  entry: string | {}
  container: string
  activeRule: string
}

export interface ILifecycle {
  beforeLoad?: Lifecycle | Lifecycle[]
  mounted?: Lifecycle | Lifecycle[]
  unmounted?: Lifecycle | Lifecycle[]
}

type Lifecycle = (app: IAppInfo) => Promise<any>
