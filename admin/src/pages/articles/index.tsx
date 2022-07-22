import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Space,
  Modal,
  Table,
  Tag,
  message,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { getArticleList, deleteArticle } from "./services";
import { ArticleEditModal } from "./components/article-edit-modal";
import { IArticle, IModalType } from "./models";

export const ArticlesPage = () => {
  const [form] = Form.useForm();
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<IModalType>("create");
  const [editArticle, setEditArticle] = useState<IArticle>();

  useEffect(() => {
    onGetArticleList();
  }, []);

  const onGetArticleList = () => {
    getArticleList().then((res) => {
      setArticleList(res.data.data.items);
    });
  };

  const onEditArticle = (type: IModalType, article?: IArticle) => {
    setModalVisible(true);
    setModalType(type);
    if (type !== "create") {
      setEditArticle(article);
    }
  };

  const onDeleteArticle = (article: IArticle) => {
    if (!article || !article.id) {
      message.error("数据错误，将刷新页面");
      onGetArticleList();
    }
    Modal.confirm({
      title: "确定要删除这篇文章吗？",
      content: "该操作不可撤销",
      onOk() {
        deleteArticle({ id: article?.id || "" }).then(() => {
          message.success("删除文章成功！");
          onGetArticleList();
        });
      },
    });
  };

  const columns: ColumnsType<IArticle> = [
    { title: "ID", dataIndex: "id" },
    { title: "标题", dataIndex: "title", ellipsis: true },
    {
      title: "标签",
      dataIndex: "tags",
      render: (tags: string[]) => (
        <span>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </span>
      ),
    },
    { title: "分类", dataIndex: "classfication" },
    { title: "描述", dataIndex: "content", ellipsis: true },
    { title: "链接", dataIndex: "link" },
    {
      title: "操作",
      key: "operation",
      render: (_, article) => (
        <Space>
          <Button
            size="small"
            type="primary"
            onClick={() => onDeleteArticle(article)}
          >
            删除
          </Button>
          <Button size="small" onClick={() => onEditArticle("edit", article)}>
            编辑
          </Button>
          <Button size="small" onClick={() => onEditArticle("detail", article)}>
            详情
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Card
        title="文章列表"
        style={{ marginBottom: "16px" }}
        extra={
          <Button type="primary" onClick={() => onEditArticle("create")}>
            新建文章
          </Button>
        }
      >
        <Table
          size="small"
          rowKey={"id"}
          columns={columns}
          dataSource={articleList}
          pagination={false}
        ></Table>
      </Card>
      <ArticleEditModal
        visible={modalVisible}
        type={modalType}
        editArticle={editArticle}
        onCancel={() => setModalVisible(false)}
        onSuccess={() => onGetArticleList()}
      />
    </>
  );
};
