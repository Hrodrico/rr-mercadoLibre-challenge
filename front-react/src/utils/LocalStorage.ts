export const setPathNameStorage = (_path: string): void => {
  localStorage.setItem('_pathName_', _path);
};

export const getPathNameStorage = (): string | null => {
  return localStorage.getItem('_pathName_');
};
