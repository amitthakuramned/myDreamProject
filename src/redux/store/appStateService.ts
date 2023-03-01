export const AppStateService = {
  storeState: (type: string, value: any) => {
    if (localStorage.getItem(type)) {
      localStorage.removeItem(type);
    }
    localStorage.setItem(type, value);
  },
  resetState: (type: string) => {
    if (localStorage.getItem(type)) {
      localStorage.removeItem(type);
    }
  },
  getState: (type: string) => {
    return localStorage.getItem(type);
  },
};

export enum AppStateStores {
  APP_STATE = "@@appStateStores/STATE",
}
