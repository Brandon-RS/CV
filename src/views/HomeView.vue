<template>
  <div class="shape"></div>
  <div class="home">
    <div class="main-component">
      <div class="data-section header">
        <PrPic :img="img" />
        <PrDesc name="Brandom Bruce" lastname="Rojas Santillán" />
      </div>
      <div class="data-section midle">
        <Exp title="Proyectos personales" :projects="projects" />
        <Exp title="Educación" :projects="education" :bottom="true" />
      </div>
      <div class="data-section skills">
        <Skills title="Tengo experiencia usando" :skills="skills" />
        <Fav title="Favoritos" :fav="fav" />
      </div>
      <div class="data-section social">
        <Social :social="social" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      img: "https://res.cloudinary.com/test-service/image/upload/v1650492325/avatar_mlkkt3.png",
    };
  },
  components: {
    PrPic: defineAsyncComponent(() => import("../components/ProfilePicture")),
    PrDesc: defineAsyncComponent(() => import("../components/ProfileDesc")),
    Exp: defineAsyncComponent(() => import("../components/ExperienceComp")),
    Skills: defineAsyncComponent(() => import("../components/ProgSkills")),
    Fav: defineAsyncComponent(() => import("../components/FavoritesComp")),
    Social: defineAsyncComponent(() => import("../components/SocialComp")),
  },
  computed: {
    ...mapState({
      projects: (state) => state.projects,
      education: (state) => state.education,
      skills: (state) => state.skills,
      fav: (state) => state.fav,
      social: (state) => state.social,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/shape.scss";

.data-section {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  gap: 20px;
  margin-top: 20px;
}

.header {
  margin-top: 0;
}

.main-component {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

@media screen and (max-width: 1400px) {
  .main-component {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .data-section {
    max-width: 1100px;
  }
}

@media screen and (max-width: 1700px) {
  .data-section {
    max-width: 1100px;
  }
}
</style>