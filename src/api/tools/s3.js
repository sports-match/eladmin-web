import request from '@/utils/request'

export function get() {
  return request({
    url: 'api/s3Content/config',
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'api/s3Content/config',
    data,
    method: 'put'
  })
}

export function download(id) {
  return request({
    url: 'api/s3Content/download/' + id,
    method: 'get'
  })
}

export function sync() {
  return request({
    url: 'api/s3Content/synchronize',
    method: 'post'
  })
}

export function del(ids) {
  return request({
    url: 'api/s3Content',
    method: 'delete',
    data: ids
  })
}

export default { del, download, sync }
