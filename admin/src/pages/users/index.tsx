import React, { useEffect, useState } from "react";
import { Card, Form, Input, Button, Space, message, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { registerUser, getUserList } from "./services";
import { sha256 } from "@utils/crypto";

const columns: ColumnsType<{ username: string }> = [
  { title: "用户名", dataIndex: "username", key: "username" },
  {
    title: "操作",
    key: "operation",
    render: () => (
      <Space>
        <Button type="primary">删除</Button>
        <Button>编辑</Button>
      </Space>
    ),
  },
];

export const UserPage = () => {
  const [form] = Form.useForm();
  const [userList, setUserList] = useState<{ username: string }[]>([]);

  useEffect(() => {
    getUserList().then((res) => {
      setUserList(res.data.data.items);
    });
  }, []);

  const onRegister = () => {
    const info = form.getFieldsValue();
    if (
      !info.password ||
      !info.confirmPassword ||
      info.password !== info.confirmPassword
    ) {
      message.error("两次输入密码不一致！");
      return;
    }
    const loginInfo = {
      username: info.username,
      password: sha256(info.password),
    };
    registerUser(loginInfo).then(
      (res) => {
        message.success("新建用户成功！");
        form.resetFields();
      },
      (err) => {}
    );
  };

  return (
    <>
      <Card title="用户列表" style={{ marginBottom: "16px" }}>
        <Table
          rowKey={"username"}
          columns={columns}
          dataSource={userList}
        ></Table>
      </Card>
      <Card title="添加用户" style={{ width: 400 }}>
        <Form
          form={form}
          onFinish={onRegister}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item label="用户名" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item label="重复密码" name="confirmPassword">
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                新建
              </Button>
              <Button onClick={() => form.resetFields()}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
