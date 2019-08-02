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
                        <a href="#">开机</a>
                      </li>
                      <li role="separator" class="divider"></li>
                      <li>
                        <div class="off">
                          <span>关机</span>
                          <span>强制关机</span>
                        </div>
                      </li>
                      <li role="separator" class="divider"></li>
                      <li>
                        <div class="off">
                          <span>重启</span>
                          <span>强制重启</span>
                        </div>
                      </li>
                      <li role="separator" class="divider"></li>
                      <li>
                        <a href="#">删除</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
              <div class="selectq">
                <select name id aria-placeholder="输入区域">
                  <option value="华东">请选择筛选区域</option>

                  <option value="华东">华东</option>
                  <option value="华东">华东</option>
                  <option value="华东">华东</option>
                  <option value="华东">华东</option>
                </select>
                <select name id aria-placeholder="输入区域">
                  <option value="华东">请选择宿主机</option>
                  <option value="华东">CT1</option>
                  <option value="华东">CT2</option>
                  <option value="华东">CT3</option>
                </select>
                <select name id aria-placeholder="输入区域">
                  <option value="华东">通过机器名/IP筛选</option>
                  <option value="华东">机器名</option>
                  <option value="华东">IP</option>
                </select>
                <input type="text" placeholder="输入搜索内容" />
                <button type="button" class="btn">查询</button>
              </div>
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
                    <th>实例ID</th>
                    <th>机器名</th>

                    <th>区域</th>
                    <th>CPU</th>
                    <th>内存</th>
                    <th>系统盘</th>
                    <th>存储盘</th>
                    <th>网络</th>
                    <th>IP地址</th>
                    <th>子网掩码</th>
                    <th>组名</th>
                    <th>宿主机</th>
                    <th>存储</th>
                    <th>过期时间</th>
                    <th>用户</th>
                    <th>成本中心</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in listinfo" :key="index">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td
                      class="diff_btm"
                      data-toggle="modal"
                      data-target="#exampleModal2"
                      @click="toname(index)"
                    >{{item.id}}</td>
                    <td>{{item.jiqi}}</td>
                    <td>{{item.quyu}}</td>
                    <td>{{item.cpu}}</td>
                    <td>{{item.ram}}</td>
                    <td>{{item.rom}}</td>
                    <td>{{item.rom1}}</td>
                    <td>{{item.wan}}</td>
                    <td>{{item.ip}}</td>
                    <td>{{item.sub}}</td>
                    <td>{{item.zuming}}</td>
                    <td>{{item.suzhuji}}</td>
                    <td>{{item.rom1}}</td>
                    <td>{{item.endtime}}</td>
                    <td>{{item.user}}</td>
                    <td>{{item.cbzx}}</td>
                    <td
                      class="changepz"
                      @click="changepz"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >修改配置</td>
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">修改配置</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="modal-body_main">
              <div class="modal-body_left">规格:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.guige.value" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">储存盘:</div>
              <div class="modal-body_right">
                <input
                  type="text"
                  v-for="(item,index) in changeSetting.rom.value"
                  :key="index"
                  v-model="changeSetting.rom.value[index]"
                />
                <span class="active" @click="addrom1">+</span>
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">镜像:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.jingxiang.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">类型:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.type.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">网络:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.wan.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">IP地址:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.ip.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">子网掩码:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.sub.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">网关地址:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.lan.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">字段1:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.attr.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">机器名:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.machine.value" disabled />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">机器组:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changeSetting.machineGroup.value" disabled />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">确认</button>
          </div>
        </div>
      </div>
    </div>

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
            <span>
              <input type="radio" name="add" value="0" />
              华东
            </span>
            <span>
              <input type="radio" name="add" value="1" />
              华中
            </span>
            <span>
              <input type="radio" name="add" value="2" />
              华北
            </span>
            <span>
              <input type="radio" name="add" value="3" />
              海外
            </span>
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
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">详情</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="modal-body_main">
              <div class="modal-body_left">实例ID:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.id" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">机器名:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.jiqi" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">区域:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.quyu" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">CPU:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.cpu" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">内存:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.ram" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">系统盘:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.rom" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">存储盘:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.rom1" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">网络:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.wan" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">IP地址:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.ip" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">子网掩码:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.sub" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">组名:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.zuming" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">宿主机:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.suzhuji" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">存储:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.rom1" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">过期时间:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.endtime" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">用户:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.user" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">成本中心:</div>
              <div class="modal-body_right">
                <input type="text" v-model="changelist.cbzx" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">确认</button>
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
      changeSetting: {
        guige: { value: "2C4G", option: true },
        rom: { value: [150], option: true },
        jingxiang: { value: "CentOS", option: false },
        type: { value: "A", option: false },
        wan: { value: "EC DMZ", option: false },
        ip: { value: "172.25.50.215", option: false },
        sub: { value: "255.255.255.0", option: false },
        lan: { value: "172.25.50.1", option: false },
        attr: { value: "250", option: false },
        machine: { value: "KSSHVIP06196", option: false },
        machineGroup: { value: "YUMC073", option: false }
      },
      changelist: "",
      listinfo: [
        {
          id: "1",
          yewu: "KFC Preorder",
          jiqi: "机器名",
          quyu: "金山",
          cpu: "2",
          ram: "4",
          rom: "50G",
          rom1: "150G",
          wan: "EC DMZ",
          ip: "172.25.50.215",
          sub: "255.255.255.0",
          createdtime: "2019-6-29",
          endtime: "2019-6-29",
          zuming: "YUMC073",
          user: "zhangsan",
          cb: "1",
          suzhuji: "192.214.555.11",
          cbzx: "7735"
        }
      ],
      msg: "数据",
      menuList: [
        {
          text: "首页",
          isActive: true
        },
        {
          text: "VM管理",
          isActive: false
        }
      ]
    };
  },
  components: {
    contentHeader
  },

  methods: {
    addrom1() {
      this.changeSetting.rom.value.push("");
    },
    toname(e) {
      console.log(e);
      this.changelist = this.listinfo[0];
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
.modal-body_right {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.modal-body_right input {
  margin-bottom: 2px;
}
.active {
  font-size: 25px;
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.modal_body {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
.modal-body_main:nth-child(2) {
  justify-content: flex-start;
  align-items: flex-start;
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
.selectq {
  float: right;
  /* width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between; */
}
.form-inline {
  float: left;
}
</style>
