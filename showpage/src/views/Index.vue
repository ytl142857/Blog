<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <v-card class="pa-4" flat>
          <v-container>
            <v-row justify="center">
              <img src="@/assets/logo.jpg" alt="" />
            </v-row>
            <!-- 自我介绍 -->
            <v-row>
              <v-card flat>
                <v-card-title :class="titleClass">
                  关于我 / About Me
                </v-card-title>
                <v-card-text>
                  <p v-for="(intro, index) in introduction" :key="index">
                    {{ intro }}
                  </p>
                  <a
                    href="https://github.com/ytl142857"
                    class="text-decoration-none"
                    target="_blank"
                    ><v-icon color="myPrimay" large>mdi-github</v-icon></a
                  >
                </v-card-text>
              </v-card>
            </v-row>

            <!-- 项目列表 -->
            <v-row>
              <v-card flat>
                <v-card-title :class="titleClass">
                  我的项目 / My Projects
                </v-card-title>
                <v-row class="mx-2">
                  <v-col
                    cols="12"
                    sm="6"
                    v-for="(project, index) in projects"
                    :key="index"
                  >
                    <ProjectShow :projectContent="project" />
                  </v-col>
                </v-row>
              </v-card>
            </v-row>
            <!-- 网站建设 -->
            <!-- <v-row
              ><v-card flat>
                <v-card-title :class="titleClass">
                  TodoList
                </v-card-title></v-card
              >
            </v-row> -->
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProjectShow from "@/components/ProjectShow.vue";

export default {
  name: "Home",

  components: { ProjectShow },
  data() {
    return {
      titleClass:
        "font-weight-bold myPrimary--text my-title text-decoration-underline",
      introduction: [
        "你好，我的名字是 Yang Tianli ，重庆人儿，一个非典型大学生",
        "为什么有本网站？我现在在生活中大多数时间都是在不停地输入，输入知识，输入各种各样庞杂的信息，但却很少向外界输出，希望通过本网站，记录自己的生活与工作，向外输出一些东西，不论价值与多少",
      ],
      projects: [
        {
          title: "个人博客网站开发",
          introduction: "本网站开发源码",
          link: "https://github.com/ytl142857/Blog",
          tags: ["Vue", "Express", "MongoDB"],
        },
        {
          title: "数据脱敏系统",
          introduction: "实现并改进数据脱敏算法，使用 Django 搭建系统展示界面",
          tags: ["Python", "Django"],
        },
      ],
    };
  },
  methods: {},
};
</script>
