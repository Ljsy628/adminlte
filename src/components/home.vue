<!-- attendance.vue -->
<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <content-header v-bind:menuList="menuList"></content-header>
    <div class="index_main">
      <div class="index_main_box">
        <div class="index_main_box_head">
          <span>华南地区(广州)</span>
        </div>
        <div class="index_main_box_mid">
          <div class="index_main_box_mid_center">
            <img src="../../static/VMECS.png" alt />
            <span>云服务器</span>
          </div>
        </div>
        <div class="index_main_box_footer">
          <div>
            <span>数量</span>
            <br />
            <i>0</i>
          </div>
          <div>
            <span>运行中</span>
            <br />
            <i class="green">0</i>
          </div>
          <div>
            <span>已隔离</span>
            <br />

            <i>0</i>
          </div>
        </div>
      </div>
      <div class="index_main_box">
        <div class="index_main_box_head">
          <span>华南地区(广州)</span>
        </div>
        <div class="index_main_box_mid">
          <div class="index_main_box_mid_center">
            <img src="../../static/VMECS.png" alt />
            <span>云服务器</span>
          </div>
        </div>
        <div class="index_main_box_footer">
          <div>
            <span>数量</span>
            <br />
            <i>0</i>
          </div>
          <div>
            <span>运行中</span>
            <br />
            <i class="green">0</i>
          </div>
          <div>
            <span>已隔离</span>
            <br />

            <i>0</i>
          </div>
        </div>
      </div>
      <div class="index_main_box">
        <div class="index_main_box_head">
          <span>华南地区(广州)</span>
        </div>
        <div class="index_main_box_mid">
          <div class="index_main_box_mid_center">
            <img src="../../static/VMECS.png" alt />
            <span>云服务器</span>
          </div>
        </div>
        <div class="index_main_box_footer">
          <div>
            <span>数量</span>
            <br />
            <i>0</i>
          </div>
          <div>
            <span>运行中</span>
            <br />
            <i class="green">0</i>
          </div>
          <div>
            <span>已隔离</span>
            <br />

            <i>0</i>
          </div>
        </div>
      </div>
    </div>
    <!-- 1 -->
  </div>
</template>
<script>
import $ from "jquery";

import contentHeader from "./content_header";
export default {
  data() {
    return {
      msg: "数据",
      menuList: [
        {
          text: "首页",
          isActive: true
        },
        {
          text: "首页",
          isActive: false
        }
      ]
    };
  },
  components: {
    contentHeader
  },

  methods: {
    changepz() {},
    createinfo() {
      $("#exampleModal1").modal("hide");
      this.$router.push({ path: "/create" });
    }
  },
  mounted() {
    if ($ && $.AdminLTE && $.AdminLTE.layout) {
      $.AdminLTE.layout.fix();
    }
    // alert("抓取到vuex数据："+this.$store.state.test)
    $('input[name="daterange"]').daterangepicker(
      {
        ranges: {
          今天: [moment(), moment()],
          最近7天: [moment().subtract(6, "days"), moment()],
          最近30天: [moment().subtract(29, "days"), moment()],
          上个月: [
            moment()
              .subtract(1, "month")
              .startOf("month"),
            moment()
              .subtract(1, "month")
              .endOf("month")
          ]
        },
        opens: "right",
        autoclose: true,
        // buttonClasses : [ 'btn btn-default' ],
        applyClass: "btn-small btn-primary",
        cancelClass: "btn-small",
        locale: {
          applyLabel: "确定",
          cancelLabel: "取消",
          daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
          monthNames: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          firstDay: 1,
          customRangeLabel: "选择起止日期"
        }
      },
      function(start, end, label) {
        console.log(
          "改变" +
            start.format("YYYY-MM-DD") +
            " to " +
            end.format("YYYY-MM-DD") +
            " (predefined range: " +
            label +
            ")"
        );
      }
    );
  },
  beforeDestroy() {
    // alert(1);
    $("#exampleModal").modal("hide");
    $("#exampleModal1").modal("hide");
    $("#exampleModal2").modal("hide");
  }
};
</script>
<style scoped>
.index_main {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.index_main_box {
  width: 45%;
  height: 300px;
  border: 1px solid #ccc;
  background: #fff;
  margin-top: 40px;
  margin-left: 3%;
}
.index_main_box_head {
  width: 100%;
  height: 40px;
  background: rgba(43, 72, 167, 0.342);
  line-height: 40px;
}
.index_main_box_head span {
  padding-left: 10px;
  font-size: 17px;
  color: #000;
}
.index_main_box_mid {
  display: flex;
  flex-direction: row;
}
.index_main_box_mid img {
  width: 30px;
  height: 30px;
}
.index_main_box_mid_center {
  width: 120px;
  margin-left: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
.index_main_box_mid_center span {
  font-size: 16px;
  font-weight: bold;
  color: #000;
}
i {
  font-style: normal;
}
.index_main_box_footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;
}
.index_main_box_footer div span {
  font-size: 16px;
  color: #777;
}
.index_main_box_footer div i {
  font-size: 22px;
  color: #777;
}
.green {
  color: green !important;
}
</style>
