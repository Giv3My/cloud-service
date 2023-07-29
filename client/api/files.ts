import axios from '@/core/axios';
import { FileItem } from './dto/files.dto';

type FileType = 'all' | 'photos' | 'trash';

export const getAll = async (type: FileType = 'all') => {
  const { data } = await axios.get<FileItem[]>(`/files?type=${type}`);

  return data;
};

export const uploadFile = async (options: any) => {
  const { file, onSuccess, onError, onProgress } = options;

  const formData = new FormData();
  formData.append('file', file);

  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    onProgress: (event: ProgressEvent) => {
      onProgress({ percent: (event.loaded / event.total) * 100 });
    },
  };

  try {
    const { data } = await axios.post<FileItem>('files', formData, config);

    onSuccess();
    return data;
  } catch (err) {
    onError({ err });

    throw err;
  }
};

export const remove = (ids: number[]) => {
  return axios.delete(`/files?ids=${ids}`);
};
