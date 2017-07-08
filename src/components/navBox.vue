<template>
  <div class="nav">
    <header>
      <div class="logo">
        <a href="#">
          <img :src="logUrl" width="120" height="20" alt="">
        </a>
      </div>
      <div class="navKey">
        <ul>
          <li v-for="navLi in navKey"><a :href="['/'+navLi.navUrl]">{{navLi.navword}}</a></li>
          <li class="more"><i class="icon iconfont icon-jinlingyingcaiwangtubiao41"></i></li>
        </ul>
      </div>
      <div class="caozuo">
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
        </div>

        <div class="upload">
          <i class="iconfont icon-download"></i>
        </div>
        <div class="login">
          <a href="#" @click='gologin'>登录</a>|<a href="#">注册</a>
        </div>
      </div>

    </header>



  </div>


</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        logUrl: 'http://static.zcool.cn/z/common/images/svg/logo.svg',
        navKey: [
          {navword: '首页', navUrl: ''},
          {navword: '发现', navUrl: 'pageDiscover'},
          {navword: '职位', navUrl: 'Discover2'},
          {navword: '发现3', navUrl: 'Discover3'},
        ],
      }
    },
    methods: {
      gologin(){
        this.$router.replace('/SignIn');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    width: 100%;
    height: 56px;
    background: #ffd100;
  }

  header .logo {
    width: 320px;
    height: 56px;
    float: left;
  }

  header .logo img {
    width: 115px;
    height: 56px;
    margin-left: 40px;
  }

  ul li {
    list-style: none;
  }

  .navKey {
    float: left;
    height: 56px;
  }

  .navKey ul {
    height: 56px;
    margin: 0;
    padding: 0px;
  }

  .navKey ul li {
    height: 56px;
    width: 75px;
    display: block;
    float: left;
    text-align: center;
    line-height: 56px;
  }

  .navKey ul li a {
    height: 56px;
    width: 75px;
    display: block;
    float: left;
    text-align: center;
    line-height: 56px;
    text-decoration: none;
  }

  .navKey ul li a:hover {
    height: 56px;
    width: 75px;
    display: block;
    float: left;
    text-align: center;
    line-height: 56px;
    text-decoration: none;
    background: #000000;
    color: #FFF;
  }

  .more i {
    font-size: 28px;
    height: 56px;
    line-height: 56px;
    color: #3E3E3E;
    cursor: pointer;
  }

  .caozuo {
    float: right;
  }

  .search {
    height: 56px;
    cursor: pointer;
    float: left;

  }

  .upload {
    height: 56px;
    width: 60px;
    float: left;
    cursor: pointer;
  }

  .search i {
    height: 56px;
    width: 60px;
    float: right;
    cursor: pointer;
    line-height: 56px;
    font-size: 24px;
    text-align: center;
  }

  .upload i {
    height: 56px;
    width: 60px;
    float: right;
    font-size: 30px;
    cursor: pointer;
    line-height: 56px;
    text-align: center;
  }

  .upload i:hover, .search i:hover {
    background: #000;
    color: #FFF;
  }

  .login {
    float: right;
    width: 100px;
    line-height: 56px;
    height: 56px;
    margin-left: 20px;
  }

  .login a {
    width: 44px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
  }


</style>
