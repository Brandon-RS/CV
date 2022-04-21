<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <div class="projects">
      <div>
        <p v-for="item in splitData()[0]" :key="item.id">
          <span :style="{ 'background-color': item.color }"></span>
          {{ item.name }}
        </p>
      </div>
      <div>
        <p v-for="item in splitData()[1]" :key="item.id">
          <span :style="{ 'background-color': item.color }"></span>
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
  },
  methods: {
    splitData() {
      const middleIndex = Math.ceil(this.skills.length / 2);

      const frArr = this.skills.slice().splice(0, middleIndex);
      const secArr = this.skills.slice().splice(-middleIndex);

      return [frArr, secArr];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/varibles.scss";

.content {
  width: 100%;

  .projects {
    display: flex;
    gap: 10px;

    div {
      width: 30%;
      padding-left: 3rem;
    }

    p {
      font-size: 16px;
      color: #000;
      letter-spacing: 0.5px;
    }

    span {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
}

@media screen and (max-width: 1250px) {
  .content {
    min-width: 0;
  }
}
</style>