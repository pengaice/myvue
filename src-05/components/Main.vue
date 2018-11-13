<template>
  <div>
    <h2 v-show="firstView">请输入关键字</h2>
    <h2 v-show="loading">请求中......</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-show="users.length">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data () {
      return {
        firstView: true,
        loading: false,
        users: [],
        errorMsg: '',
      }
    },
    mounted () {
      // 订阅
      PubSub.subscribe('search', async (msg, searchName) => {
        // 更新
        this.firstView = false
        this.loading = true
        this.users = []
        this.errorMsg = ''
        // 发ajax请求
        const url = `https://api.github.com/search/users?q=${searchName}`
        try {
          const response = await axios.get(url)
          const result = response.data
          const users = result.items.map(item => ({
            name: item.login,
            url: item.html_url,
            avatar_url: item.avatar_url
          }))
          // 更新状态
          this.loading = false
          this.users = users
        } catch (error) {
          // 失败
          this.loading = false
          this.errorMsg = '请求失败'
        }
      })
    }
  }
</script>
<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
