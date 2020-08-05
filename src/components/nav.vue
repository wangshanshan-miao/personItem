<template>
  <div class="nav-model">
    <div class="logo-box"></div>
    <ul class="nav-box">
      <li v-for="(item, index) in menuList" :key="index">{{ item.name }}</li>
    </ul>
    <button class="btn">自助页面</button>
    <div class="right">
      <img class="book" src="../assets/images/book.png" >
      <img class="car" src="../assets/images/car.png" >
      <img class="touxiang" src="../assets/images/timg.jpg" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      menuList: [{
        name: '關於我們'
      }, {
        name: '產品目錄'
      }, {
        name: '風格圖庫'
      }, {
        name: '留言評價'
      }, {
        name: '過往作品'
      }, {
        name: '合作機構'
      }, {
        name: '聯絡我們'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .nav-model {
    width: 74%;
    padding: 0 11% 0 15%;
    height: 118px;
    line-height: 118px;
    box-shadow:7px 7px 5px rgba(35,24,21,0.15);
    display: flex;
    align-items: center;
    background: #fff;
    .logo-box {
      width: 17%;
      padding-bottom: 6%;
      background: url('../assets/images/logo.png') no-repeat;
      margin-right: 2%;
      background-size: 100% 100%;
      display: inline-block;
      float: left;
    }
    .nav-box {
      display: inline-block;
      width: 48%;
      li {
        margin-right: 1.4%;
        font-size: 17px;
        // min-width: 70px;
        float: left;
        color: #6A6A6A;
      }
    }
    .btn {
      display: inline-block;
      width: 9.4%;
      height: 52px;
      background:rgba(227,89,104,1);
      opacity:1;
      border-radius:26px;
      font-size:22px;
      color: #fff;
      border: none;
      margin-right: 3%;
    }
    .right {
      display: inline-flex;
      align-items: center;
      img {
       display: inline-block;
       margin-right: 18px;
      }
      .book {
        width: 36px;
        height: 35px;
      }
      .car {
        width: 40px;
        height: 40px;
      }
      .touxiang {
        width: 57px;
        height: 57px;
        border-radius: 50px;
      }
    }
  }
</style>
