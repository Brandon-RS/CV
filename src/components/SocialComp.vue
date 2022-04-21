<template>
  <div class="content">
    <div>
      <div v-for="item in social" :key="item.id">
        <img :src="item.img" alt="Social Network Image" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    social: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/varibles.scss";

.content {
  width: 100%;
  padding: 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
  }
}
</style>