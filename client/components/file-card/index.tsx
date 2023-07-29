import React from 'react';

import { getColorByExtension, getExtensionFromFileName, isImage } from '@/utils';

import { FileTextOutlined } from '@ant-design/icons';
import styles from './file-card.module.scss';

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: React.FC<FileCardProps> = ({ filename, originalName }) => {
  const ext = getExtensionFromFileName(filename);
  const imageUrl =
    ext && isImage(ext) ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${filename}` : '';

  const color = getColorByExtension(ext);

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={styles[color]}>{ext}</i>
        {isImage(ext) ? (
          <img className={styles.image} src={imageUrl} alt="File" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};
