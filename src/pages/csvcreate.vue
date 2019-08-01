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
                <div class="input-group" style="width:220px;">
                  <div class="form-group myupload">
                    <input type="file" id="exampleInputFile" />
                  </div>
                </div>
                <button type="button" class="btn btn-primary btn-create">上传</button>
              </form>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <!-- <th style="width: 10px">ID</th> -->
                    <th>机器名</th>
                    <th>CPU</th>
                    <th>内存</th>
                    <th>系统盘</th>
                    <th>数据盘</th>
                    <th>网络</th>
                    <th>IP地址</th>
                    <th>子网掩码</th>
                    <th>网关</th>
                    <th>宿主机</th>
                    <th>存储</th>
                    <th>过期时间</th>
                    <th>业务组</th>
                    <th>成本中心</th>
                    <th>用户</th>

                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in list" :key="index">
                    <td v-for="(item1,index1) in item.clist" :key="index1">
                      <input type="text" :class="item1.name" v-model="item1.value" />
                    </td>
                    <td>
                      <span @click="del(index)" class="b">删除</span>

                      <span @click="cp(index)" class="b">复制</span>
                    </td>
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
              <div class="ckbox">
                <button type="button" class="btn btn-primary btn-create">创建</button>
                <button type="button" class="btn btn-default btn-create">取消</button>
              </div>
            </div>
          </div>
          <!-- /.box -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import contentHeader from "../components/content_header";
export default {
  data() {
    return {
      msg: "数据",
      list: [
        {
          clist: [
            { name: "my_input75", value: "copn1" },
            { name: "my_input75", value: "2" },
            { name: "my_input54", value: "4g" },
            { name: "my_input62", value: "50g" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "EC DMZ" },
            { name: "my_input93", value: "192.168.1.23" },
            { name: "my_input73", value: "255.255.255.0" },
            { name: "my_input107", value: "192.111.123.144" },
            { name: "my_input93", value: "172.25.50.215" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "2018-11-25" },
            { name: "my_input73", value: "业务组问题待定" },
            { name: "my_input107", value: "5512" },
            { name: "my_input68", value: "张三" }
          ]
        },
        {
          clist: [
            { name: "my_input75", value: "copn1" },
            { name: "my_input75", value: "2" },
            { name: "my_input54", value: "4g" },
            { name: "my_input62", value: "50g" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "EC DMZ" },
            { name: "my_input93", value: "192.168.1.23" },
            { name: "my_input73", value: "255.255.255.0" },
            { name: "my_input107", value: "192.111.123.144" },
            { name: "my_input93", value: "172.25.50.215" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "2018-11-25" },
            { name: "my_input73", value: "业务组问题待定" },
            { name: "my_input107", value: "5512" },
            { name: "my_input68", value: "张三" }
          ]
        },
        {
          clist: [
            { name: "my_input75", value: "copn1" },
            { name: "my_input75", value: "2" },
            { name: "my_input54", value: "4g" },
            { name: "my_input62", value: "50g" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "EC DMZ" },
            { name: "my_input93", value: "192.168.1.23" },
            { name: "my_input73", value: "255.255.255.0" },
            { name: "my_input107", value: "192.111.123.144" },
            { name: "my_input93", value: "172.25.50.215" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "2018-11-25" },
            { name: "my_input73", value: "业务组问题待定" },
            { name: "my_input107", value: "5512" },
            { name: "my_input68", value: "张三" }
          ]
        },
        {
          clist: [
            { name: "my_input75", value: "copn1" },
            { name: "my_input75", value: "2" },
            { name: "my_input54", value: "4g" },
            { name: "my_input62", value: "50g" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "EC DMZ" },
            { name: "my_input93", value: "192.168.1.23" },
            { name: "my_input73", value: "255.255.255.0" },
            { name: "my_input107", value: "192.111.123.144" },
            { name: "my_input93", value: "172.25.50.215" },
            { name: "my_input93", value: "150g" },
            { name: "my_input93", value: "2018-11-25" },
            { name: "my_input73", value: "业务组问题待定" },
            { name: "my_input107", value: "5512" },
            { name: "my_input68", value: "张三" }
          ]
        }
      ],
      menuList: [
        {
          text: "首页",
          isActive: false
        },
        {
          text: "上传CSV文件",
          isActive: true
        }
      ]
    };
  },
  components: {
    contentHeader
  },

  methods: {
    createinfo() {
      this.$router.push({ path: "/create" });
    },
    del(idx) {
      console.log(idx);
      this.list.splice(idx, 1);
    },
    cp(idx) {
      console.log(this.list[idx]);

      this.list.push(this.list[idx]);
    },
    addbtn() {
      let clist = {
        clist: [
          { name: "my_input75", value: "" },
          { name: "my_input75", value: "" },
          { name: "my_input54", value: "" },
          { name: "my_input62", value: "" },
          { name: "my_input93", value: "" },
          { name: "my_input93", value: "" },
          { name: "my_input93", value: "" },
          { name: "my_input73", value: "" },
          { name: "my_input107", value: "" },
          { name: "my_input68", value: "" }
        ]
      };
      this.list.push(clist);
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
  }
};
</script>
<style scoped>
.myupload {
  float: right;
}
.form-inline {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.addbtn {
  float: right;
  color: blue;
  padding-right: 25px;
  margin-top: 10px;
  cursor: pointer;
}
.form-inline {
  display: flex;
  flex-direction: row;
}
.btn-create {
  width: 100px;
  height: 25px;
  line-height: 25px;
  padding: 0px;
}
.btn-group {
  margin-left: -50px;
}
.my_input75 {
  width: 75px;
  height: 25px;
}
.my_input54 {
  width: 54px;
  height: 25px;
}
.my_input62 {
  width: 62px;
  height: 25px;
}
.my_input93 {
  width: 93px;
  height: 25px;
}
.my_input73 {
  width: 73px;
  height: 25px;
}
.my_input107 {
  width: 107px;
  height: 25px;
}
.my_input68 {
  width: 68px;
  height: 25px;
}
.b {
  color: #66ccff;
  cursor: pointer;
}
.ckbox {
  width: 230px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  float: right;
  margin-right: 20px;
}
.ckbox button {
  height: 30px;
}
</style>
