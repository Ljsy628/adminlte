<!-- attendance.vue -->
<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <content-header v-bind:menuList="menuList"></content-header>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header with-border">
              <!-- <h3 class="box-title">我的考勤记录</h3> -->
              <form action class="form-inline">
                <button type="button" class="btn btn-default recss">刷新</button>
              </form>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <!-- <th style="width: 10px">ID</th> -->
                    <th>任务组</th>
                    <th>实例ID</th>
                    <th>状态</th>
                    <th>CPU</th>
                    <th>内存</th>
                    <th>磁盘</th>
                    <th>网络</th>
                    <th>IP地址</th>
                    <th>子网掩码</th>
                    <th>机器名</th>
                    <th>组名</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <!-- <td>001</td> -->
                    <td>20190726-143001</td>
                    <td>1</td>
                    <td>active</td>
                    <td>2</td>
                    <td>4</td>
                    <td>50G</td>
                    <td>EC DMZ</td>
                    <td>172.25.50.215</td>
                    <td>255.255.255.0</td>
                    <td>KSSHVIP06196</td>
                    <td>YUMC073</td>
                    <th class="btn">取消</th>
                  </tr>
                  <tr>
                    <!-- <td>001</td> -->
                    <td>20190726-143001</td>
                    <td>1</td>
                    <td>active</td>
                    <td>2</td>
                    <td>4</td>
                    <td>50G</td>
                    <td>EC DMZ</td>
                    <td>172.25.50.215</td>
                    <td>255.255.255.0</td>
                    <td>KSSHVIP06196</td>
                    <td>YUMC073</td>
                    <th class="btn">重启</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.box-body -->
            <div class="box-footer clearfix">
              <ul class="pagination pagination-sm no-margin pull-right">
                <li>
                  <a href="#">&laquo;</a>
                </li>
                <li>
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">&raquo;</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- /.box -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import contentHeader from "./content_header";
export default {
  data() {
    return {
      msg: "数据",
      menuList: [
        {
          text: "任务管理",
          isActive: false
        },
        {
          text: "任务状态",
          isActive: true
        }
      ]
    };
  },
  components: {
    contentHeader
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
  methods: {}
};
</script>
<style scoped>
.recss {
  width: 83px !important;
  height: 31px;
}
.btn {
  color: rgba(129, 216, 207, 1);
}
</style>
