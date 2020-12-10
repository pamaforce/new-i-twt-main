<template>
  <v-footer app absolute height="160px" color="#424242" class="twt-footer" dark>
    <div class="twt-copyright">
      <p v-text="thisYearcopy"></p>
      <p>
        <a href="http://www.miibeian.gov.cn/" ref="nofollow"
          >津ICP备05004358号-12</a
        >
        / 津教备0767号
      </p>
    </div>
    <img
      src="../../assets/logo.png"
      alt="twt-footer-logo"
      class="twt-footer-logo"
    />
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    thisYearcopy: "© 2000-" + new Date().getFullYear() + " TwT Studio",
  }),
};
</script>

<style lang="scss" scoped>
.twt-footer {
  padding: 0;
  margin: 0;
  font-size: 1rem;
}
.twt-copyright {
  position: absolute;
  top: 30px;
  left: 50%;
  height: 50px;
  width: 100%;
  transform: translate(-50%);
  text-align: center;
}
.twt-copyright p {
  color: #bdbdbd;
  margin-bottom: 0;
}
.twt-copyright a {
  color: #fff;
  text-decoration: none;
}
.twt-footer-logo {
  position: absolute;
  top: 100px;
  left: 50%;
  height: 40px;
  width: 40px;
  transform: translate(-50%);
}
</style>
