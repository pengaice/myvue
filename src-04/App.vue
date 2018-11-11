<template>
  <div>
    <h2 v-if="!repoName">LOADING</h2>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repoName: '',
        repoUrl: ''
      }
    },

    async mounted () {
      const url = 'https://api.github.com/search/repositories?q=u&sort=stars'

      try {
        const response =  await axios.get(url)
        const result = response.data
        const mostRepo = result.items[0]
        // 更新状态数据
        this.repoName = mostRepo.name
        this.repoUrl = mostRepo.html_url
      } catch (e) {
        alert('请求出错了ba')
      }

    }
  }
</script>

<style>
</style>
