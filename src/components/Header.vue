<template>
  <div class="layout_header">
    <div class="progress"></div>
    <div class="container layout_grid">
      <div class="slide">
        <Slide>
          <a id="home" href="#"><h1>首頁</h1></a>
          <a id="home" href="#"><h1>暖文集錦</h1></a>
          <a href="">暖心故事</a>
          <a href="">齊心抗疫</a>
          <a href="">勵志人物</a>
          <a href="">國際暖文</a>
          <a href="">療癒毛孩</a>
          <a href="">公益送暖</a>

          <a id="home" href="#"><h1>精選影音</h1></a>
        </Slide>
      </div>
      <div class="row">
        <div class="col-9 col-lg-10 logod">
          <p @click="linkToHome">
            <img :src="logo" />
            <span>{{ title }}</span>
          </p>
        </div>
        <div class="col-1 "></div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 col-lg-11"></div>
      <div class="col-1  col-lg-1 icon ">
        <!-- line -->
        <a
          href="https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/soldier/"
          target="_blank"
        >
          <span
            id="social_line"
            data-href="https://www.ftvnews.com.tw/topics/soldier/"
          >
            <i class="fa-brands fa-line fa-2xl"></i
          ></span>
        </a>
        <br />
        <!-- facebook -->
        <a
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Fsoldier%2F&amp;src=sdkpreparse"
          class="fb-xfbml-parse-ignore"
          ><i class="fa-brands fa-facebook-square fa-2xl"> </i
        ></a>
        <br />
        <!-- localUrl -->
        <i
          id="social_link"
          @click="getLocalUrl"
          class="fa-solid fa-square-share-nodes fa-2xl"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";

export default {
  name: "Header",
  components: {
    Slide,
  },
  data() {
    return {
      title: `民視新聞網`,
      logo: require("../assets/logo_ftv.svg"),
    };
  },

  methods: {
    scroll() {
      window.addEventListener("scroll", () => {
        this.moveBar("#4d482e");
      });
    },

    moveBar(color = "#4d482e") {
      let bar = document.querySelector(".progress");
      let w = Math.ceil(
        (Math.round(window.pageYOffset) /
          (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      bar.style.width = w + "%";
      bar.style.background = color;
    },

    linkToHome() {
      window.open("https://www.ftvnews.com.tw/", "_blank");
    },

    getLocalUrl() {
      let e = document.createElement("input"),
        t =
          window.location.href + "?utm_source=topicpage&utm_medium=copybutton";
      document.body.appendChild(e),
        (e.value = t),
        e.select(),
        document.execCommand("copy"),
        document.body.removeChild(e),
        alert("網址複製成功!");
    },
  },

  mounted() {
    this.scroll();
    this.moveBar();
  },
};
</script>

<style scoped>
.layout_header {
  width: 100%;
  --layout_max_width: 100vw;
  margin-top: -20px;
  position: fixed;
  z-index: 9999;
}

.layout_grid {
  padding: var(--layout_padding);
  height: 100px;
  margin-top: -5px;
  background-color: var(--header_background);
}

.logod {
  margin-left: 5rem;
}

.layout_grid div:nth-child() {
  /* margin: var(--layout_margin); */
}

p {
  font-size: var(--font_h2);
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0;
}

p span {
  padding: 0 var(--layout_padding);
}

p img {
  width: 32px;
}

/* 進度條 */
.progress {
  position: fixed;
  bottom: 53px;
  width: 0.5%;
  height: 10px;
  z-index: 999;
}


/* 社群分享 */
.layout_grid_icon {
  /* display: var(--layout_display); */
  display: inline;
  float: left;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  grid-gap: var(--layout_gap);
  margin-top: -3%;
}


i {
  color: var(--main_color);
  display: block;
  margin: 20px;
  font-size: 45px;
}

span {
  color: black;
}

.icon{
      margin-top: -3.5rem;
}
</style>s
