import React from "react";
import { Button, Card, Layout, Form, Input } from "antd";
import { $storage } from "@utils/storage";
import { useNavigate } from "react-router-dom";
import { login } from "./services";
import { sha256 } from "@utils/crypto";

export const LoginPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onLogin = () => {
    const loginInfo = {
      username: form.getFieldsValue().username,
      password: sha256(form.getFieldsValue().password),
    };

    login(loginInfo).then(
      (res) => {
        $storage.token = res.data.data.token;
        navigate("/");
      },
      (err) => {}
    );
  };

  return (
    <Layout className="w-screen h-screen flex justify-center items-center">
      <Card title="后台管理用户登录" style={{ width: "400px" }}>
        <Form
          form={form}
          onFinish={onLogin}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};
