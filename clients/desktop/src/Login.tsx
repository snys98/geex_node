import { useContext, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios, { AxiosError } from 'axios';
import md5 from 'md5';
import { AuthContext } from "./providers/AuthContext";
/* 一个简单的登录表单, 明文传递了数据, 固定了登录地址
生产环境中应当使用redirect来实现后端登录(OAuth2.0)
*/
const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setAccessToken } = useContext(AuthContext)


  const onFinish = async ({ username, password }: { username: string, password: string }) => {
    setLoading(true);
    try {
      const request = { username, passwordHash: md5(password) };
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, request);
      const token = response.data.accessToken;
      if (token) {
        message.success('Login success.');
        setAccessToken(token);
      }
      else {
        throw new Error(response.data.message || "Login failed.");
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
