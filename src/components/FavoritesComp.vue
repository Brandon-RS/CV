<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <div class="favorites">
      <div>
        <div v-for="item in fav" :key="item.id">
          <img :src="item.img" :alt="item.name + ' Logo'" />
          <span>{{ item.name }}</span>
        </div>
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
    fav: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/varibles.scss";

.content {
  .favorites {
    display: flex;
    justify-content: center;

    & > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;

      div {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: 140px;
        height: 140px;
        align-items: center;
        justify-content: center;
        box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);

        img {
          width: 70px;
          height: 70px;
          object-fit: contain;
        }

        span {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
