<!-- content_header.vue -->
<template>
  <div class="content-header">
    <h1>{{title}}</h1>
    <ol class="breadcrumb">
      <li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}" :key="index">{{i.text}}</li>
      <!-- <li class="active">异常考勤记录</li> -->
    </ol>
  </div>
</template>
<script>
export default {
  name: "content_header",
  data() {
    return {
      title: "xx管理系统"
    };
  },
  created() {
    console.log((this.title = this.menuList[1].text));
  },
  props: ["menuList"]
};
</script>