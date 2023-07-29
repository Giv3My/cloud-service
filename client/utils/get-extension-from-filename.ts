import { Extension } from './get-color-by-extension';

export const getExtensionFromFileName = (filename: string) => {
  return filename.split('.').pop() as Extension;
};
