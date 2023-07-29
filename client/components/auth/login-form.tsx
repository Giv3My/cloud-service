import React from 'react';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';

import * as Api from '@/api';
import { LoginFormDto } from '@/api/dto/auth.dto';

import { Button, Form, Input, notification } from 'antd';
import styles from './auth.module.scss';

export const LoginForm = () => {
  const router = useRouter();

  const onSubmit = async (values: LoginFormDto) => {
    try {
      const { token } = await Api.auth.login(values);

      notification.success({
        message: 'Success!',
        description: 'Redirecting to the dashboard...',
        duration: 2,
      });

      setCookie(null, '_token', token, {
        path: '/',
      });

      router.replace('/dashboard');
    } catch (err: any) {
      notification.error({
        message: 'Auth error!',
        description: err.response.data.message,
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="E-Mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Enter email',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Enter password',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Sign in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
