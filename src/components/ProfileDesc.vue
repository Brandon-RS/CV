<template>
  <div class="content">
    <h2 class="title">{{ name }}, {{ lastname }}</h2>
    <h3 class="profession">Software Developer</h3>

    <p class="description">
      Hola, mi nombre es Brandon Rojas. Soy de Amazonas-Peru y nací en la ciudad
      de Chachapoyas. Me gusta el desarrollo de software, siendo
      web front-end y desarrollo movil mis areas preferidas. Tengo experiencia
      usando frameworks modernos además de lenguajes de programación variados.
      Puedes revisar mi perfil de
      <a target="blanck" href="https://github.com/Brandon-RS">GitHub</a>
      donde podrás encontrar algunos de mis proyectos.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/varibles.scss";

.content {
  background-color: $white;
  box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.08);
  border-radius: $radius;
  padding: 30px 8rem 30px 6rem;
  text-align: left;

  .title,
  .profession,
  .description {
    padding: 0;
    margin: 0;
  }

  .title {
    color: rgb(65, 65, 65);
    font-size: 30px;
  }

  .profession {
    color: rgb(15, 117, 242);
    font-size: 24px;
    margin: 10px 0 30px 0;
  }

  .description {
    font-size: 17px;
    color: #000;
    letter-spacing: 0.4px;
    text-align: justify;

    a {
      text-decoration: none;
      color: $title-color;

      &:hover {
        color: rgb(15, 117, 242);
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .content {
    padding: 30px 7rem 20px 5rem;

    .title {
      font-size: 25px;
    }

    .profession {
      font-size: 19px;
      margin: 5px 0 15px 0;
    }

    .description {
      font-size: 15px;
      letter-spacing: 0.2px;
    }
  }
}
</style>