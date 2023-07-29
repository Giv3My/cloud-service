import React from 'react';

import { Button, Popconfirm } from 'antd';
import styles from './file-actions.module.scss';

interface FileActionsProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}

export const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Share
      </Button>

      <Popconfirm
        title="Remove file(s)?"
        description="All files will be moved to trash"
        okText="Yes"
        cancelText="No"
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type="primary" danger>
          Remove
        </Button>
      </Popconfirm>
    </div>
  );
};
