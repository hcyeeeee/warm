<template>
    <div class="container-fluid" id="video">
        <div class="layout_grid">
            <div class="title_row">
                <img src="../assets/title7.png" alt="" class="title_icon" />
                <h2 class="title_text">{{ title }}</h2>
            </div>

            <div class="iframe-container">
                <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/erFCnbOSMxI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <div class="iframe-container mt-md-5 mb-5">
                <iframe
                    width="100%"
                    height="600"
                    src="https://www.youtube.com/embed/tN2vlUGDcT8"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '精選影音',
        }
    },
}
</script>

<style scoped>
.container-fluid {
    background-color: var(--layout_background1);
    padding: 3rem;
    margin-bottom: -50px;
}

.layout_grid {
    width: 1000px;
}
.row {
    margin: auto;
}

iframe {
    width: 1000px;
}

@media screen and (max-width: 1024px) {
    .row {
        margin: auto;
    }
    iframe {
        width: 100%;
        height: 480px;
    }
    .layout_grid {
        width: 100%;
    }
}

@media screen and (max-width: 768px) {
    .row {
        margin: auto;
    }
    .layout_grid {
        width: 100%;
    }
}
.iframe-container {
    overflow: hidden;
    padding-top: 56.25%;
    position: relative;
    margin-top: 3rem;
    z-index: 1;
    width: 100%;
    min-height: 100px;
}
.iframe-container iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}

.iframe-container-4x3 {
    padding-top: 75%;
}

.title_icon {
    height: var(--title_icon);
    margin-top: 3rem;
}
.title_text {
    margin-top: 30px;
    margin-bottom: -20px;
    color: var(--title_color);
    font-size: var(--font_title);
}
.title_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: -2rem;
    margin-bottom: 1rem;
}

@media screen and (max-width: 1024px) {
    .title_icon {
        margin-top: 5rem;
    }
    .title_text {
        margin-top: 30px;
        margin-bottom: -50px;
        color: var(--title_color);
        font-size: 45px;
    }
    .title_row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-bottom: 1rem;
    }
  
}

@media screen and (max-width: 768px) {
    .title_icon {
        margin-top: 3rem;
    }
    .title_text {
        margin-top: 30px;
        margin-bottom: -20px;
        color: var(--title_color);
        font-size: 36px;
    }
    .title_row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
  

  .layout_grid {
    width: 120%;
    
    display:flex;
    justify-content: center;
 flex-wrap:nowrap;
 flex-direction: column;
 align-content: center;
 margin:auto;
 margin-left: -1.8rem;
   
}
    /* .iframe-container {
    width: 400px;
    margin-right:100px;
display: block;
margin: auto;

} */

}
</style>
