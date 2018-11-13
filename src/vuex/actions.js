/**
 * Created by asus-z on 2018/11/13.
 */

import axios from 'axios'
import {
  REQUESTING,
  REQ_SUCCESS,
  REQ_FAIL
} from './mutation-types'

export default {
  async search({commit},searchName){
  commit(REQUESTING)
    const url = `https://api.github.com/search/users?q=${searchName}`
    try{
       const response = await axios.get(url)
       const result = response.data
       const users = result.items.map((item)=>({
           name: item.login,
           url: item.html_url,
           avatar_url: item.avatar_url
       }))
    //   更新状态数据（成功）
      commit(REQ_SUCCESS,{users})
      //   更新状态数据（失败）
      
    }catch (error){
      commit(REQ_FAIL,{errorMsg:'请求失败'})
    }
  
  }
}
