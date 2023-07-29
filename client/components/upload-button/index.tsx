import React from 'react';
import { useRouter } from 'next/router';

import * as Api from '@/api';

import { Button, notification, Upload, UploadFile } from 'antd';
import { CloudUploadOutlined } from '@ant-design/icons';
import styles from '@/styles/home.module.scss';

export const UploadButton: React.FC = () => {
  const [fileList, setFileList] = React.useState<UploadFile[]>([]);
  const router = useRouter();

  const onUploadSuccess = async (options: any) => {
    try {
      await Api.files.uploadFile(options);

      setFileList([]);
      router.reload();
    } catch (err) {
      notification.error({
        message: 'Error!',
        description: 'Failed to upload file',
        duration: 2,
      });
    }
  };

  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}
    >
      <Button type="primary" icon={<CloudUploadOutlined />} size="large">
        Upload file
      </Button>
    </Upload>
  );
};
