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
                    <th>网络</th>
                    <th>IP地址</th>
                    <th>子网掩码</th>
                    <th>组名</th>
                    <th>宿主机</th>
                    <th>存储</th>
                    <th>过期时间</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td class="diff_btm" data-toggle="modal" data-target="#exampleModal2">1</td>
                    <td>KFC Preorder</td>
                    <td>金山</td>
                    <td>2</td>
                    <td>4</td>
                    <td>50G</td>
                    <td>EC DMZ</td>
                    <td>172.25.50.215</td>
                    <td>172.25.50.215</td>
                    <td>172.25.50.215</td>
                    <td>172.25.50.215</td>
                    <td>255.255.255.0</td>
                    <td>KSSHVIP06196</td>
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
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">镜像:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">类型:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">网络:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">IP地址:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">子网掩码:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">网关地址:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">字段1:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">机器名:</div>
              <div class="modal-body_right">
                <input type="text" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">机器组:</div>
              <div class="modal-body_right">
                <input type="text" />
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
            <select class="custom-select" id="inputGroupSelect01">
              <option selected>华东</option>
              <option value="1">华中</option>
              <option value="2">华北</option>
              <option value="3">海外</option>
            </select>
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
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">机器名:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">区域:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">CPU:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">内存:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">系统盘:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">存储盘:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">网络:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">IP地址:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">子网掩码:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">组名:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">宿主机:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">存储:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
              </div>
            </div>
            <div class="modal-body_main">
              <div class="modal-body_left">过期时间:</div>
              <div class="modal-body_right">
                <input type="text" v-model="listinfo.a" />
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

import contentHeader from "./content_header";
export default {
  data() {
    return {
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
