import React from "react";
import { Layout, Menu, Button } from "antd";
import { $storage } from "@utils/storage";
import { MenuItems } from "@constants";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import styles from "./index.module.less";

export const DefaultLayout = () => {
  const navigate = useNavigate();
  const authenticated = $storage.token;

  if (!authenticated) return <Navigate to="/login" replace />;

  const onSelect = (event: { key: string }) => {
    navigate(event.key);
  };

  const onLogOut = () => {
    $storage.clear();
    navigate("/login");
  };

  return (
    <Layout className="w-screen h-screen">
      <Layout.Sider>
        <div className="p-4">
          <div
            className={`${styles["layout-title"]} bg-white text-lg font-semibold text-center`}
          >
            后台管理系统
          </div>
          <div className="flex mt-2">
            <Button size="small" type="primary" onClick={onLogOut}>
              退出登录
            </Button>
          </div>
        </div>
        <Menu
          items={MenuItems}
          onSelect={onSelect}
          defaultSelectedKeys={["home"]}
        />
      </Layout.Sider>
      <Layout.Content className="p-4">
        <div className="w-full h-full bg-white rounded p-4 overflow-auto">
          <Outlet />
        </div>
      </Layout.Content>
    </Layout>
  );
};
