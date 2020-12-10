<template>
  <div class="containers">
    <v-parallax src="../assets/backpic.jpg" class="itpararllax" height="400"></v-parallax>
    <div id="leftmain">
      <a @click="delayTo('#/profile')" class="avatar">
        <img
          src="../assets/avatar.png"
          alt="user-avatar"
          class="user-image"
          :id="avatars"
          @mouseenter="goin(avatars)"
          @mouseleave="goout(avatars)"
        />
      </a>
      <a
        @click="delayTo('#/profile')"
        class="username"
        :id="usernames"
        @mouseenter="goin(usernames)"
        @mouseleave="goout(usernames)"
      >
        Pamaforce
      </a>
      <img src="../assets/wechat.png" alt="wechat-icon" class="wechat-icon" />
      <img src="../assets/wechats.png" alt="wechat-icon" class="wechats-icon" />
      <p class="wechat-status">微信：已绑定</p>
      <a
        @click="delayTo('#/account')"
        class="changewechat"
        :id="changewechats"
        @mouseenter="goin(changewechats)"
        @mouseleave="goout(changewechats)"
      >
        <img
          src="../assets/changewechat.png"
          alt="changewechat-icon"
          class="changewechat-icon"
        />
      </a>
      <a
        href="https://party.twt.edu.cn/"
        class="party"
        target="_blank"
        :id="partys"
        @mouseenter="goin(partys)"
        @mouseleave="goout(partys)"
      >
        <img src="../assets/party.png" alt="party-icon" class="party-icon" />
      </a>
      <a
        href="http://mall.twt.edu.cn/"
        class="shop"
        target="_blank"
        :id="shops"
        @mouseenter="goin(shops)"
        @mouseleave="goout(shops)"
      >
        <img src="../assets/shop.png" alt="shop-icon" class="shop-icon" />
      </a>
      <a
        href="https://news.twt.edu.cn/news"
        class="twt"
        target="_blank"
        :id="twts"
        @mouseenter="goin(twts)"
        @mouseleave="goout(twts)"
      >
        <img src="../assets/logo.png" alt="twt-icon" class="twt-icon" />
      </a>
    </div>
    <div id="division">
      <p>功能</p>
    </div>
    <div id="rightmain">
      <div
        class="setprofile btnteam"
        id="setprofiles"
        @mouseenter="btnin(0)"
        @mouseleave="btnout(0)"
      >
        <a class="btnas" @click="delayTo('#/profile')" 
          ><img src="../assets/setprofile.png"  />
          <p>资料设置</p></a
        >
      </div>
      <div
        class="setaccount btnteam"
        id="setaccounts"
        @mouseenter="btnin(1)"
        @mouseleave="btnout(1)"
      >
        <a class="btnas" @click="delayTo('#/account')" 
          ><img src="../assets/setaccount.png" />
          <p>账户设置</p></a
        >
      </div>
      <div
        class="upgrade btnteam"
        id="upgrades"
        @mouseenter="btnin(2)"
        @mouseleave="btnout(2)"
      >
        <a class="btnas" @click="delayTo('#/upgrade')"
          ><img src="../assets/upgrade.png" />
          <p>账号升级</p></a
        >
      </div>
      <div
        class="organization btnteam"
        id="organizations"
        @mouseenter="btnin(3)"
        @mouseleave="btnout(3)"
      >
        <a
          @click="delayToblank('https://login.twt.edu.cn/register/organization')"
          class="btnas"
          target="_blank"
          ><img src="../assets/organization.png" />
          <p>注册账号</p></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data: () => ({
    avatars: "avatars",
    usernames: "usernames",
    changewechats: "changewechats",
    partys: "partys",
    shops: "shops",
    twts: "twts",
    setprofiles: "setprofiles",
    setaccounts: "setaccounts",
    upgrades: "upgrades",
    organizations: "organizations",
    btns: ["setprofiles", "setaccounts", "upgrades", "organizations"],
  }),
  methods: {
    goin(s) {
      document.getElementById(s).classList.add("user-image-in");
      document.getElementById(s).classList.remove("user-image-out");
    },
    goout(s) {
      document.getElementById(s).classList.add("user-image-out");
      document.getElementById(s).classList.remove("user-image-in");
    },
    btnin(s) {
      document.getElementById(this.btns[s]).classList.add("btn-in");
      document.getElementById(this.btns[s]).classList.remove("btn-out");
    },
    btnout(s) {
      document.getElementById(this.btns[s]).classList.add("btn-out");
      document.getElementById(this.btns[s]).classList.remove("btn-in");
    },
    delayTo(u) {
      setTimeout("top.location.href='"+u+"'",300);
      document.getElementsByClassName('containers')[0].classList.add("all-out");
    },
    delayToblank(u) {
      setTimeout("window.open('"+u+"')",300);
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
a:hover {
  color: #0ab0c2;
}
#leftmain {
  position: absolute;
  display: inline-block;
  left: 50px;
  top: 55px;
  height: 360px;
  width: 300px;
  transition: 0.3s;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  border: 1px solid rgb(235, 235, 235);
}
#division {
  position: absolute;
  left: 372px;
  top: 135px;
  background-color: rgb(235, 235, 235);
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px/50%;
  box-shadow: 1px 1px 4px rgb(230, 230, 230) inset;
  width: 4px;
  height: 200px;
  transition: 0.3s;
  animation-name: ofdivision;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.24, 0.75, 0.13, 0.98);
}
#division p {
  display: none;
  position: absolute;
  left:50%;
  top:50%;
  font-size: 18px;
  font-weight: 700;
  color:rgb(12, 187, 213);
  transform: translate(-50%,-50%);
}
#rightmain {
  transition: 0.3s;
  position: absolute;
  display: inline-block;
  left: 400px;
  top: 55px;
  height: 360px;
  width: 550px;
  background-color: rgb(248, 248, 248);
  border-radius: 10px;
  box-shadow: 1px 1px 5px #ccc;
  border: 1px solid rgb(235, 235, 235);
  overflow: hidden;
}
.containers {
  position: relative;
  display: block;
  transition: 0.3s;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(250, 250, 250);
  border: 1px solid #ddd;
  box-shadow: 1px 1px 5px #ccc;
  border-radius: 6px;
  border: 2px;
  width: 1000px;
  height: 470px;
}
.avatar {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  left: 90px;
  top: 35px;
}
.username {
  display: block;
  width: 120px;
  text-align: center;
  position: absolute;
  left: 90px;
  top: 185px;
}
.user-image {
  width: 120px;
  height: 120px;
  transform: scale(0);
  border-radius: 50%;
  animation-name: beout;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.24, 0.75, 0.13, 0.98);
}
.wechat-icon {
  width: 35px;
  height: 35px;
  position: absolute;
  left: 60px;
  top: 230px;
  display: inline-block;
}
.wechats-icon {
  width: 35px;
  height: 35px;
  position: absolute;
  left: 60px;
  top: 230px;
  display: none;
}
.wechat-status {
  position: absolute;
  left: 105px;
  top: 235px;
}
.changewechat {
  width: 25px;
  height: 25px;
  position: absolute;
  left: 207px;
  top: 233px;
}
.changewechat-icon {
  width: 25px;
  height: 25px;
}
.party {
  width: 35px;
  height: 35px;
  position: absolute;
  left: 40px;
  top: 300px;
  animation-name: beout;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.24, 0.75, 0.13, 0.98);
}
.party-icon {
  width: 35px;
  height: 35px;
}
.shop {
  width: 35px;
  height: 35px;
  position: absolute;
  left: 132.5px;
  top: 300px;
  animation-name: beout;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.24, 0.75, 0.13, 0.98);
}
.shop-icon {
  width: 35px;
  height: 35px;
}
.twt {
  width: 35px;
  height: 35px;
  position: absolute;
  left: 225px;
  top: 300px;
  animation-name: beout;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.24, 0.75, 0.13, 0.98);
}
.twt-icon {
  width: 35px;
  height: 35px;
}
.user-image-in {
  animation: ofimage 0.5s both;
}
.user-image-out {
  animation: ofimages 0.5s both;
}
.btn-in {
  animation: btnin 0.5s both;
}
.btn-out {
  animation: btnout 0.5s both;
}
.btnas {
  display: block;
  width: 160px;
  height: 80px;
}
.btnas p {
  position: absolute;
  bottom: 10px;
  left: 65px;
}
.btnas img {
  position: absolute;
  left: 15px;
  bottom: 20px;
  width: 40px;
  height: 40px;
}
.btnteam {
  width: 160px;
  height: 80px;
  transition: 0.3s;
  font-size: 18px;
  border: 1px solid #bbb;
  border-radius: 3px;
  box-shadow: 0px 1.5px 5px #aaa;
  overflow: hidden;
  animation-name: beout;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.24, 0.75, 0.13, 0.98);
}
.btnteam:after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform .3s, opacity .5s;
}
.btnteam:active:after {
  transform: scale(0, 0);
  opacity: .3;
  transition: 0s;
}
.setprofile {
  position: absolute;
  left: 90px;
  top: 75px;
}
.setaccount {
  position: absolute;
  left: 300px;
  top: 75px;
}
.upgrade {
  position: absolute;
  left: 90px;
  top: 205px;
}
.organization {
  position: absolute;
  left: 300px;
  top: 205px;
}
#organizations:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
}
#organizations:active:after {
    transform: scale(0, 0);
    opacity: .3;
    //设置初始状态
    transition: 0s;
}
.itpararllax {
  display: none;
}
.all-out {
  transition: all 0.4s ease-in;
  transform:translateX(10px);
  opacity: 0;
}

@media screen and (min-width: 1025px) {
  @keyframes ofrightmain {
    from {
      width: 0px;
    }
    to {
      width: 550px;
    }
  }
  @keyframes btnin {
    from {
      transform: translateY(0px);
      border: 1px solid #bbb;
      box-shadow: 0px 1.5px 5px #aaa;
      font-size: 18px;
    }
    to {
      transform: translateY(-3px);
      border: 1px solid #0ab0c2;
      box-shadow: 0px 1.5px 5px#0ab0c2;
      font-size: 19px;
    }
  }
  @keyframes btnout {
    from {
      transform: translateY(-3px);
      border: 1px solid #0ab0c2;
      box-shadow: 0px 1.5px 5px#0ab0c2;
      font-size: 19px;
    }
    to {
      transform: translateY(0px);
      border: 1px solid #bbb;
      box-shadow: 0px 1.5px 5px #aaa;
      font-size: 18px;
    }
  }
}
@media screen and (max-width: 1024px) {
  .containers {
    width: 728px;
  }
  #leftmain {
    left: 35px;
    width: 270px;
  }
  .avatar {
    left: 75px;
  }
  .username {
    left: 75px;
  }
  .wechat-icon {
    left: 45px;
  }
  .wechats-icon {
    left: 45px;
  }
  .wechat-status {
    left: 90px;
  }
  .changewechat {
    left: 192px;
  }
  .party {
    left: 25px;
  }
  .shop {
    left: 117.5px;
  }
  .twt {
    left: 210px;
  }
  #rightmain {
    left: 355px;
    width: 337px;
  }
  #division {
    left: 328px;
  }
  .btnteam {
    width: 140px;
    height: 120px;
    border-radius: 6px;
    font-size: 16px;
  }
  .btnas {
    width: 140px;
    height: 120px;
  }
  .btnas p {
    position: absolute;
    bottom: 32px;
    left: 60px;
  }
  .btnas img {
    position: absolute;
    left: 10px;
    bottom: 40px;
  }
  .setprofile {
    left: 18.5px;
    top: 50px;
  }
  .setaccount {
    left: 178.5px;
    top: 50px;
  }
  .upgrade {
    left: 18.5px;
    top: 190px;
  }
  .organization {
    left: 178.5px;
    top: 190px;
  }
  @keyframes ofrightmain {
    from {
      width: 0px;
    }
    to {
      width: 337px;
    }
  }
  @keyframes btnin {
    from {
      transform: translateY(0px);
      border: 1px solid #bbb;
      box-shadow: 0px 1.5px 5px #aaa;
      font-size: 16px;
    }
    to {
      transform: translateY(-3px);
      border: 1px solid #0ab0c2;
      box-shadow: 0px 1.5px 5px#0ab0c2;
      font-size: 17px;
    }
  }
  @keyframes btnout {
    from {
      transform: translateY(-3px);
      border: 1px solid #0ab0c2;
      box-shadow: 0px 1.5px 5px#0ab0c2;
      font-size: 17px;
    }
    to {
      transform: translateY(0px);
      border: 1px solid #bbb;
      box-shadow: 0px 1.5px 5px #aaa;
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 768px) {
  .containers {
    margin: 0;
    left: -2%;
    width: 104%;
    border-radius: 0px;
    height: 700px;
    animation: none;
  }
  .itpararllax {
    display: block;
  }
  #leftmain {
    margin: 0;
    left: 50%;top: 10px;
    height: 390px;display: block;
    transform: translate(-50%);
    background: none;
    border-radius: 0px;
    box-shadow: none;
    border: 0px;
    animation: none;
    animation-name: backani;
    animation-duration: 0.5s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }
  #division {
    left: 50%;
    top: 375px;
    transform: translateX(-50%);
    background-color: #fff;
    border: 0px;
    border-radius: 25px/50%;
    box-shadow: 1px 2px 8px rgb(12, 130, 209);
    width: 150px;
    height: 50px;
    transition: 0.3s;
    animation: none;
  }
  #division p {
    display: block;
  }
  #rightmain {
    left: 50%;
    top: 410px;
    height: 360px;
    transform: translateX(-50%);
    display: absolute;
    background: none;
    border-radius: 0px;
    box-shadow: none;
    border: 0px;
    animation: none;
  }
  .wechat-icon {
    display: none;
  }
  .wechats-icon {
    display: inline-block;
  }
  .btnteam {
    width: 140px;
    height: 60px;
    transition: 0.3s;
    font-size: 16x;
    background-color: rgb(92, 187, 246);
    border: 0px;
    border-radius: 8px;
    box-shadow: 0px 2px 2px rgb(177,177,177);
    overflow: hidden;
  }
  .btnas {
    display: block;
    width: 140px;
    height: 60px;
    color: white;
  }
  .btnas p {
    bottom: 0px;
  }
  .btnas img {
    bottom: 10px;
    width: 40px;
    height: 40px;
  }
 .setprofile {
    left: 12.5px;
    top: 55px;
  }
  .setaccount {
    left: 184.5px;
    top: 55px;
  }
  .upgrade {
    left: 12.5px;
    top: 145px;
  }
  .organization {
    left: 184.5px;
    top: 145px;
  }
  @keyframes btnin {
    from {
      transform: translateY(0px);
      font-size: 16px;
    }
    to {
      transform: translateY(-1px);
      font-size: 17px;
    }
  }
  @keyframes btnout {
    from {
      transform: translateY(-1px);
      font-size: 17px;
    }
    to {
      transform: translateY(0px);
      font-size: 16px;
    }
  }
}
@keyframes ofdivision {
  from {
    height: 0px;
  }
  to {
    height: 200px;
  }
}
@keyframes beout {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes ofimage {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes ofimages {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}
@keyframes backani {
  from {
    background-image: url("../assets/border.png");
    background-position: 5px 20px;
    background-repeat: no-repeat;
    background-size: 258px 344px;
  }
  to{
    background-image: url("../assets/border.png");
    background-position: 5px 20px;
    background-repeat: no-repeat;
    background-size: 252px 336px;
  }
}
</style>
