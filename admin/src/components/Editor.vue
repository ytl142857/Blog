<template>
  <mavon-editor
    class="editor"
    v-model="articleContent"
    :toolbars="toolbar"
    :boxShadow="false"
    @change="markdownChange()"
  ></mavon-editor>
</template>

<script>
export default {
  data() {
    return {
      value: this.mdContent,
      toolbar: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
      },
    };
  },
  props: {
    mdContent: String,
  },
  methods: {
    markdownChange() {
      this.$emit("change", this.value);
    },
  },
  computed: {
    articleContent: {
      get() {
        return this.mdContent;
      },
      set(val) {},
    },
  },
};
</script>

<style lang="scss" scoped>
.editor {
  border: 1px solid #000000;
  z-index: inherit;
}
</style>