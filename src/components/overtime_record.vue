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
                  <button
                    type="button"
                    class="btn btn-primary btn-create"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                  >新建</button>
                </div>
                <div>
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      更多操作
                      <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="#">启动</a>
                      </li>
                      <li role="separator" class="divider"></li>
                      <li>
                        <a href="#">禁用</a>
                      </li>

                      <li role="separator" class="divider"></li>
                      <li>
                        <a href="#">删除</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <!-- <th style="width: 10px">ID</th> -->
                    <td>
                      <input type="checkbox" />
                    </td>
                    <th>区域名称</th>

                    <th>endpoint 公有云参数</th>
                    <th>accesskey 公有云参数</th>
                    <th>secretkey 公有云参数</th>
                    <th>vmware ip</th>
                    <th>vmware 账号</th>
                    <th>vmware 密码</th>
                    <th>云类型</th>
                    <th>portal入口</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in list" :key="index">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td
                      class="diff_btm"
                      @click="name_click(item.type,index)"
                      data-toggle="modal"
                      data-target="#exampleModal2"
                    >{{item.name}}</td>

                    <td>{{item.endpoint}}</td>
                    <td>{{item.accesskey}}</td>
                    <td>{{item.secretkey}}</td>
                    <td>{{item.ip}}</td>
                    <td>{{item.username}}</td>
                    <td>{{item.password}}</td>
                    <td>{{item.type}}</td>
                    <td>{{item.url}}</td>
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

    <div
      class="modal fade"
      id="exampleModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">请选择区域</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal_body">
            <div class="main1">
              <span>
                <div>区域名称:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span>
                <div>选择云类型:</div>
                <select v-model="fromdata.option" @change="selectchange(fromdata)">
                  <option
                    v-for="(item,index) in selectdata"
                    :key="index"
                    :value="item.name"
                  >{{item.value}}</option>
                  <!-- <option value="腾讯">金山</option>
                  <option value="aliyun">阿里</option>
                  <option value="vmware">vmware</option>-->
                </select>
              </span>
              <span v-if="selectFlag">
                <div>endpoint:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span v-if="selectFlag">
                <div>accesskey:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span v-if="selectFlag">
                <div>secretkey:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span v-if="!selectFlag">
                <div>vmware ip:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span v-if="!selectFlag">
                <div>vmware 账号:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span v-if="!selectFlag">
                <div>vmware 密码:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
              <span>
                <div>portal:</div>
                <input type="text" placeholder="请输入区域名称" />
              </span>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="createinfo">确认</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog1" role="document">
        <div class="modal-content">
          <ul class="nav nav-tabs">
            <li role="presentation" class="active">
              <a class="nav-link active" href="#activity" data-toggle="tab">详情</a>
            </li>
            <li role="presentation" v-if="this.tabflag">
              <a class="nav-link active" href="#VPC" data-toggle="tab">VPC</a>
            </li>
            <li role="presentation" v-if="this.tabflag">
              <a class="nav-link active" href="#sub" data-toggle="tab">子网</a>
            </li>
            <li role="presentation" v-if="this.tabflag">
              <a class="nav-link active" href="#safe" data-toggle="tab">安全组</a>
            </li>
            <li role="presentation" v-if="!this.tabflag">
              <a class="nav-link active" href="#DataCenter" data-toggle="tab">DataCenter</a>
            </li>
            <li role="presentation" v-if="!this.tabflag">
              <a class="nav-link active" href="#DataStore" data-toggle="tab">DataStore</a>
            </li>
            <li role="presentation" v-if="this.tabflag">
              <a class="nav-link active" href="#settings" data-toggle="tab">机型</a>
            </li>
            <li role="presentation" v-if="!this.tabflag">
              <a class="nav-link active" href="#PortGroup" data-toggle="tab">PortGroup信息</a>
            </li>
          </ul>
          <!-- <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#activity" data-toggle="tab">Activity</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#timeline" data-toggle="tab">Timeline</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#settings" data-toggle="tab">Settings</a>
            </li>
          </ul>-->
          <div class="modal-body">
            <div class="card">
              <div class="card-header p-2"></div>
              <!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">
                  <div class="active tab-pane" id="activity">
                    <div class="main1">
                      <span>
                        <div>区域名称:</div>
                        <input type="text" placeholder="请输入区域名称" v-model="changedata.name" />
                      </span>
                      <span>
                        <div>选择云类型:</div>
                        <select v-model="changedata.type" @change="selectchange(changedata)">
                          <option
                            v-for="(item,index) in selectdata"
                            :key="index"
                            :value="item.name"
                          >{{item.value}}</option>
                        </select>
                      </span>
                      <span v-if="selectFlag">
                        <div>endpoint:</div>
                        <input type="text" placeholder="请输入endpoint" v-model="changedata.endpoint" />
                      </span>
                      <span v-if="selectFlag">
                        <div>accesskey:</div>
                        <input
                          type="text"
                          placeholder="请输入accesskey"
                          v-model="changedata.accesskey"
                        />
                      </span>
                      <span v-if="selectFlag">
                        <div>secretkey:</div>
                        <input
                          type="text"
                          placeholder="请输入secretkey"
                          v-model="changedata.secretkey"
                        />
                      </span>
                      <span v-if="!selectFlag">
                        <div>vmware ip:</div>
                        <input type="text" placeholder="请输入vmware ip" v-model="changedata.ip" />
                      </span>
                      <span v-if="!selectFlag">
                        <div>vmware 账号:</div>
                        <input type="text" placeholder="请输入vmware 账号" v-model="changedata.username" />
                      </span>
                      <span v-if="!selectFlag">
                        <div>vmware 密码:</div>
                        <input type="text" placeholder="请输入vmware 密码" v-model="changedata.password" />
                      </span>
                      <span>
                        <div>portal:</div>
                        <input type="text" placeholder="请输入portal" v-model="changedata.url" />
                      </span>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
                    </div>
                  </div>
                  <div class="tab-pane" id="VPC">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>Id</th>
                            <th>名称</th>
                            <th>CidrBlock</th>
                            <th>默认</th>
                            <th>创建时间</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>vpc-p5sf61yj</td>
                            <td>test_vpc</td>
                            <td>10.0.0.0/16</td>
                            <td>否</td>
                            <td>2018-01-13 19:26:33</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div class="tab-pane" id="sub">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>Id</th>
                            <th>名称</th>
                            <th>CidrBlock</th>
                            <th>VpcId</th>
                            <th>创建时间</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>vpc-p5sf61yj</td>
                            <td>test_vpc</td>
                            <td>10.0.0.0/16</td>
                            <td>vpc-p5sf61yj</td>
                            <td>2018-01-13 19:26:33</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="safe">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>Id</th>
                            <th>名称</th>
                            <th>备注</th>
                            <th>创建时间</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>sg-3g7ftkp3</td>
                            <td>TestGroup</td>
                            <td>test-group-desc</td>
                            <td>2018-01-13 19:26:33</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="DataCenter">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>data-centere-1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="DataStore">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>名称</th>
                            <th>DataCenter</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>VMFS-Datastore</td>
                            <td>data-centere-1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="settings">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>机型</th>
                            <th>CPU</th>
                            <th>Memory</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>I1.MEDIUM8</td>
                            <td>4</td>
                            <td>8</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="tab-pane" id="PortGroup">
                    <div class="main2">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <!-- <th style="width: 10px">ID</th> -->

                            <th>PortGroupName</th>
                            <th>DataCenter</th>
                            <th>Vlan</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item,index) in list" :key="index">
                            <td>VMFS-Datastore</td>
                            <td>data-centere-1</td>
                            <td>data-centere-1</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 1 -->
  </div>
</template>
<script>
import $ from "jquery";

import contentHeader from "../components/content_header";
export default {
  data() {
    return {
      changedata: {},
      tabflag: true, //
      list: [
        {
          id: "1",
          name: "name",
          endpoint: "p",
          accesskey: "C1",
          secretkey: "CDS",
          ip: "123.1241.421.33",
          username: "GSDGDSGS",
          password: "saCSV",
          type: "aliyun",
          url: "http://www.baidu.com"
        },
        {
          id: "1",
          name: "name",
          endpoint: "p",
          accesskey: "C1",
          secretkey: "CDS",
          ip: "123.1241.421.33",
          username: "GSDGDSGS",
          password: "saCSV",
          type: "vmware",
          url: "http://www.baidu.com"
        }
      ],
      fromdata: {
        option: "tencentcloud"
      },
      selectFlag: true,
      selectdata: [
        {
          name: "tencentcloud",
          value: "腾讯"
        },
        {
          name: "ksyun",
          value: "金山"
        },
        {
          name: "aliyun",
          value: "阿里"
        },
        {
          name: "vmware",
          value: "vmware"
        }
      ],
      listinfo: {
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1",
        a: "1"
      },
      msg: "数据",
      menuList: [
        {
          text: "区域管理",
          isActive: true
        },
        {
          text: "区域管理",
          isActive: false
        }
      ]
    };
  },
  components: {
    contentHeader
  },

  methods: {
    name_click(e, idx) {
      if (e == "vmware") {
        this.tabflag = false;
      } else {
        this.tabflag = true;
      }
      console.log(this.tabflag);
      this.changedata = this.list[idx];
      console.log(this.changedata);
    },
    selectchange(item) {
      if (item.option == "vmware" || item.type == "vmware") {
        this.selectFlag = false;
      } else {
        this.selectFlag = true;
      }
    },
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
.modal-content {
  min-height: 432px;
}
.modal-dialog1 {
  width: 800px;
}
.main2 table {
  width: 750px;
}
/* .modal-dialog1 .modal-content {
  min-height: 700px !important;
}
.modal-dialog1 .modal-content .modal-body {
  min-height: 700px !important;
}
.modal-dialog1 .modal-content .modal-body .card {
  min-height: 700px !important;
}
.modal-dialog1 .modal-content .modal-body .card .card-body {
  min-height: 700px !important;
}
.modal-dialog1 .modal-content .modal-body .card .card-body .tab-content {
  min-height: 700px !important;
}
.modal-dialog1 .modal-content .modal-body .card .card-body .tab-content .main1 {
  min-height: 700px !important;
  justify-content: space-around;
} */
/* .modal-dialog1
  .modal-content
  .modal-body
  .card
  .card-body
  .tab-content
  .tab-pane {
  min-height: 700px !important;
} */
.main1 {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main1 span {
  margin: 12px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.main1 span div {
  width: 90px;
}
.main1 span select {
  width: 176px;
  height: 25px;
}
.form-inline {
  display: flex;
  flex-direction: row;
}
.btn-create {
  width: 100px;
}
.btn-group {
  margin-left: -50px;
}
.modal-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-body_main {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
.modal-body_main .modal-body_left {
  width: 80px;
}
.changepz {
  color: green;
  cursor: pointer;
}
.off {
  color: #777;
  font-size: 14px;
  padding: 3px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.off span {
  width: 50%;
  text-align: center;
}
.off span:first-child {
  text-align: left;
}
.off span:hover {
  background: #99afd2;
  cursor: pointer;
  color: #333;
}
.diff_btm {
  color: #66ccff;
  cursor: pointer;
}
</style>
