import {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  Button,
  Table,
} from 'antd';
import { AxiosError } from 'axios';

import { useApolloClient } from '@apollo/client';

import { AuthContext } from './providers/auth.provider';
import {
  UserDto,
  UsersGql,
} from './proxy/.generated/type';

/* 一个简单的登录表单, 明文传递了数据, 固定了登录地址
生产环境中应当使用redirect来实现后端登录(OAuth2.0)
*/
const Users = () => {
  const { setAccessToken } = useContext(AuthContext)
  const client = useApolloClient();
  const [users, setUsers] = useState<UserDto[]>([]);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
  ];

  useEffect(() => {
    client.query({
      query: UsersGql
    })
      // axios.get(`${import.meta.env.VITE_API_URL}/users`, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`,
      //   }
      // })
      .then((response) => {
        const users = response.data.users;
        setUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            setAccessToken("");
          }
        }
      });
  }, [])


  return (
    <>
      <Table pagination={false} columns={columns} dataSource={users} />
      <Button type="primary" onClick={() => {
        setAccessToken("");
      }}>Logout</Button>
    </>
  );
};

export default Users;
