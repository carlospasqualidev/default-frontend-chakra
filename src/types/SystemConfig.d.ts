export interface IConfig {
  visibleDock?: boolean;
}

export interface ISystemProvider {
  children: JSX.Element;
}

export interface IContext extends IConfig {
  config: IConfig;
}
