export type NavigationContextType = {
  solution: React.MutableRefObject<null>;
  webs: React.MutableRefObject<null>;
  home: React.MutableRefObject<null>;
  currentLocation: string;
  setCurrentLocation: (currentLocatio: string) => {};
};

export type CurrentPath = {
  currentLocation: string;
  setCurrentLocation: (currentLocatio: string) => {};
};
