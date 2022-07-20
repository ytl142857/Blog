import React from "react";
import { Layout, Menu } from "antd";
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

  return (
    <Layout className="w-screen h-screen">
      <Layout.Sider>
        <div className="bg-white text-lg font-semibold text-center p-4">
          <div className={styles["layout-title"]}>后台管理系统</div>
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
