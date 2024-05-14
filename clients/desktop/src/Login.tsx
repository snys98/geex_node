import {
  useContext,
  useState,
} from 'react';

import {
  Button,
  Form,
  Input,
  message,
} from 'antd';
import { AxiosError } from 'axios';
import md5 from 'md5';

import { useApolloClient } from '@apollo/client';

import { LoginGql } from '../src/proxy/.generated/type';
import { AuthContext } from './providers/auth.provider';

/* 一个简单的登录表单, 明文传递了数据, 固定了登录地址
生产环境中应当使用redirect来实现后端登录(OAuth2.0)
*/
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setAccessToken } = useContext(AuthContext)
  const client = useApolloClient();

  const onFinish = async ({ username, password }: { username: string, password: string }) => {
    setLoading(true);
    try {
      const request = { username, passwordHash: md5(password) };
      const response = await client.mutate({
        mutation: LoginGql,
        variables: request
      }); // 为了触发ApolloProvider的初始化
      // const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, request);
      const token = response.data!.login.accessToken;
      if (token) {
        message.success('Login success.');
        setAccessToken(token);
      }
      else {
        throw new Error(response.errors?.at(0)?.message || "Login failed.");
      }

    } catch (error) {
      if (error instanceof AxiosError) {
        message.error(error.response?.data?.message || "Login failed.");
      }
      else {
        message.error("Login failed.");
      }
    }
    setLoading(false);
  };

  return (
    <Form name="login-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'please enter username' }]}
      >
        <Input placeholder="username: admin" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'please enter password' }]}
      >
        <Input.Password placeholder="password: admin" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
