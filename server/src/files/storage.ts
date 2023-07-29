import { diskStorage } from 'multer';

const generateId = () => {
  return [...Array(18)].map(() => Math.round(Math.random() * 10).toString(16)).join('');
};

const normalizeFilename = (
  req,
  file: Express.Multer.File,
  callback: (error: Error, filename: string) => void
) => {
  const fileExtName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileExtName}`);
};

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFilename,
});
