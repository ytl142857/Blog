import React, { useEffect } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import { addArticle, putArticle } from "@pages/articles/services";
import { IArticle, IModalType } from "../../models";

interface IProps {
  visible: boolean;
  type: IModalType;
  onCancel: () => void;
  onSuccess: () => void;
  editArticle?: IArticle;
}

export const ArticleEditModal = ({
  visible,
  type,
  onCancel,
  onSuccess,
  editArticle,
}: IProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editArticle && editArticle.id && type !== "create" && visible) {
      form.setFieldsValue({
        ...editArticle,
        tags: editArticle.tags ? editArticle.tags.join(",") : "",
      });
    }
  }, [form, editArticle, visible]);

  const onFinish = () => {
    form.resetFields();
    onCancel();
  };

  const onSubmit = () => {
    const article = form.getFieldsValue() as IArticle;
    if (!article.title || !article.classfication || !article.link) {
      message.error("请完整填写文章内容！");
      return;
    }
    if (article.tags) article.tags = form.getFieldsValue().tags.split(",");

    if (type === "create") {
      addArticle(article).then(() => {
        message.success("新建文章成功！");
        onFinish();
        onSuccess();
      });
    } else {
      if (!editArticle || !editArticle.id) {
        message.error("文章编辑错误！");
        onFinish();
        onSuccess();
        return;
      }
      putArticle({
        ...article,
        id: editArticle.id,
      }).then(() => {
        message.success("编辑文章成功！");
        onFinish();
        onSuccess();
      });
    }
  };

  return (
    <>
      <Modal
        title={
          type === "create"
            ? "新建文章"
            : type === "detail"
            ? "文章详情"
            : "编辑文章"
        }
        visible={visible}
        onCancel={onFinish}
        footer={
          type === "detail"
            ? null
            : [
                <Button key="confirm" onClick={onSubmit} type="primary">
                  确定
                </Button>,
                <Button key="cancel" onClick={onFinish}>
                  取消
                </Button>,
              ]
        }
      >
        <Form
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          disabled={type === "detail"}
        >
          <Form.Item label="标题" name="title" required>
            <Input />
          </Form.Item>
          <Form.Item label="标签" name="tags">
            <Input placeholder="请输入标签，以 ‘,’ 间隔" />
          </Form.Item>
          <Form.Item label="分类" name="classfication" required>
            <Input />
          </Form.Item>
          <Form.Item label="描述" name="content">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item label="链接" name="link" required>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
