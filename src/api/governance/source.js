/*
 * @Author: linyhi linyhi@dcits.com
 * @Date: 2023-02-26 14:21:52
 * @LastEditors: linyhi linyhi@dcits.com
 * @LastEditTime: 2023-02-27 16:56:54
 * @FilePath: /XiaoDingDang_ui/src/api/governance/source.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

// 查询数据源列列表
export function listSource(query) {
  return request({
    url: '/governance/source/list',
    method: 'get',
    params: query
  })
}

// 查询数据源列详细
export function getSource(sourceId) {
  return request({
    url: '/governance/source/' + sourceId,
    method: 'get'
  })
}

// 新增数据源列
export function addSource(data) {
  return request({
    url: '/governance/source',
    method: 'post',
    data: data
  })
}

// 修改数据源列
export function updateSource(data) {
  return request({
    url: '/governance/source',
    method: 'put',
    data: data
  })
}

// 删除数据源列
export function delSource(sourceId) {
  return request({
    url: '/governance/source/' + sourceId,
    method: 'delete'
  })
}
