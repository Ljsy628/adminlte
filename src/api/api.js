// 公共请求接口
import axios from 'axios'

export function postList(url, data) { //post
  return axios.post(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if (res.status === 400) {
        return Promise.reject(res.data.message || "操作失败！")
      } else if (res.status === 500) {
        return Promise.reject("请求异常，请稍后再试！");
      } else if (res.status == 401) {
        document.location.href = '#/login';
        return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}

export function postHeader(url, data) { //header

  return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {

    })
}
export function getList(url, data) { //get
  return axios.get(url, {
      params: data
    })
    .then((res) => {
      console.log(res)
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if (res.status === 400) {
        return Promise.reject(res.data.message || "操作失败！")
      } else if (res.status === 500) {
        return Promise.reject("请求异常，请稍后再试！");
      } else if (res.status == 401) {

        document.location.href = '#/login';
        return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}

export function get(url, data) { //get
  return axios.get(url, {
      params: data
    })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if (res.status === 400) {
        return Promise.reject(res.data.message || "操作失败！")
      } else if (res.status === 500) {
        return Promise.reject("请求异常，请稍后再试！");
      } else if (res.status == 401) {

        document.location.href = '#/login';
        return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })

}
export function deletes(url, data) { //删除
  return axios.delete(url, {
      params: data
    })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if (res.status === 400) {
        return Promise.reject(res.data.message || "操作失败！")
      } else if (res.status === 500) {
        return Promise.reject("请求异常，请稍后再试！");
      } else if (res.status == 401) {
        document.location.href = '#/login';
        return Promise.reject("token失效！");
      } else if (res.status == 409) {
        return Promise.reject("失效");

      }
      return Promise.reject(res)
    })
}
export function deleteData(url, data) { //删除
  return axios.delete(url, {
      data: data
    })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if (res.status === 400) {
        return Promise.reject(res.data.message || "操作失败！")
      } else if (res.status === 500) {
        return Promise.reject("请求异常，请稍后再试！");
      } else if (res.status == 401) {
        document.location.href = '#/login';
        return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })
}
export function respassword(url, data) { //修改密码
  return axios.post(url, data)
    .then((res) => {
      return res.data
    })
}
export function downloadFile(url, param) {
  const form = document.createElement('form')
  form.action = "/template" + url
  form.method = 'POST'
  form.target = '_blank'
  form.style.display = 'none'
  for (const x in param) {
    const opt = document.createElement('input')
    opt.name = x
    opt.value = param[x]
    form.appendChild(opt)
  }
  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}


export function putList(url, data) { //put
  return axios.put(url, data)
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      if (res.status === 400) {
        return Promise.reject(res.data.message || "操作失败！")
      } else if (res.status === 500) {
        return Promise.reject("请求异常，请稍后再试！");
      } else if (res.status == 401) {
        document.location.href = '#/login';
        return Promise.reject("token失效！");
      }
      return Promise.reject(res)
    })

}

export function newUpload(url, data, fn) { //header
  return axios.post(url, data, {
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      onUploadProgress: fn
    })
    .then((res) => {
      return Promise.resolve(res.data)
    })
    .catch((res) => {
      return Promise.reject(res.response.data)
    })
}

// get方法
export function $get(method, data, callback, error) {
  let str = `${method}`

  return axios.get(str, {
      params: data
    })
    .then(function (response) {
      if (response.status === 200) {
        callback(response.data)
      }

    })
    .catch(error)
}

// delete方法
export function $delete(method, data, callback, error) {
  let str = `${method}/${data}`

  return axios.delete(str, {})
    .then(function (response) {
      if (response.status === 200) {
        callback(response.data)
      }
    })
    .catch(error)
}
// post方法
export function $post(method, data, callback, error) {
  let str = `${method}`
  return axios.post(str, data)
    .then(function (response) {
      if (response.status === 200) {
        callback(response.data)
      }
    })
    .catch(error)
}

// put方法
export function $put(method, data, callback, error) {
  let str = `${method}`

  return axios.put(str, data)
    .then(function (response) {
      if (response.status === 200) {
        callback(response.data)
      }
    })
    .catch(error)
}
