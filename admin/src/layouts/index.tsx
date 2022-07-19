import React from "react";
import { Button, Layout, Menu } from "antd";
import { $storage } from "@utils/storage";
import { MenuItems } from "@constants";
import {
  Link,
  Outlet,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";

export const DefaultLayout = () => {
  const navigate = useNavigate();

  const authenticated = $storage.token;
  console.log(authenticated);

  if (!authenticated) return <Navigate to="/login" replace />;

  const onSelect = (event: { key: string }) => {
    navigate(event.key);
  };

  return (
    <Layout className="w-screen h-screen">
      <Layout.Sider>
        <Menu
          items={MenuItems}
          style={{ height: "100%" }}
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
