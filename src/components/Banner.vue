<template class="container" >
  <div class="layout_inner banner">
    <div class="row ">
      <div class="title col-12 col-md-5">
        <h1>暖新聞</h1>
      </div>
      <div class="subtitle col-12 col-md-6 mr-2">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          ullam quo. Nostrum ab eaque pr.
        </h1>
      </div>
    </div>
    <div>
      <a href="#part_news1">暖文集錦</a>
    </div>
    <!-- <picture>
            <source media="(max-width: 450px)" :srcset="banner_img.mobile" />
            <source media="(max-width: 768px)" :srcset="banner_img.tablet_ver" />
            <source media="(max-width: 1024px)" :srcset="banner_img.tablet_hor" />
            <img :src="banner_img.desktop" />
        </picture>  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner_img: {
        desktop: require(`../assets/banner1920_400.jpg`),
        tablet_hor: require(`../assets/banner1024_500.jpg`),
        tablet_ver: require(`../assets/banner768_500.jpg`),
        mobile: require(`../assets/banner450_500.jpg`),
      },
    };
  },
};
</script>

<!-- 閉包 -->
<style scoped>
.layout_inner {
  /* position: relative; */
}

/* picture img {
     margin-top: 65px;
    width: 100%;
} */
.banner {
  height: 100vh;
  width: 100%;
  background-color: darkcyan;
  /* opacity: 0.3; */
  display: flex;
}

@media screen and (min-width: 768px) {
  .banner {
    height: 100vh;
    width: 100%;
    background-color: rgb(174, 187, 147);
  }
}

.title {

margin-top: 40vh;

}




.subtitle {
  margin-top: 40vh;
}

@media screen and (max-width: 768px) {

    .title {

margin-top: 30vh;

}

.subtitle {
  margin-top: -20vh;
}
}

p {
  font-size: 60px;
  /* color: var(--main_color); */
  color: black;
}

a {
  /* border: 1px solid var(--main_color); */
  border-radius: 5px;
  padding: 1rem 1rem;
  position: absolute;
  bottom: 20%;
  left: 50%;
  /* 偏離原始位置 */
  transform: translateX(-50%);
  background-color: white;
  color: var(--main_color);
}
</style>
