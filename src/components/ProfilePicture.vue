<template>
  <div class="img-container">
    <img class="profile-pic" :src="img" alt="Profile Picture" />
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/varibles.scss";

.img-container {
  border-radius: $radius;
  background-color: $white;
  padding: 10px;
  box-shadow: 10px 10px 10px 1px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;

  .profile-pic {
    $size: 200px;
    width: $size;
    height: $size;
    border-radius: $radius;
    object-fit: contain;
  }
}
</style>
