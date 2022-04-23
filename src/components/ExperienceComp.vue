<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <div class="projects">
      <div class="test">
        <span></span>
        <div>
          <p v-for="item in data" :key="item.id">
            <span>{{ item.name }}:</span> {{ item.description }}.
          </p>

          <template v-if="bottom">
            <p class="bottom-desc">{{ current.description }}</p>
          </template>
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
    projects: {
      type: Array,
      required: true,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    data() {
      let newArr = [...this.projects];
      this.bottom ? newArr.pop() : null;
      return newArr;
    },
    current() {
      let newArr = [...this.projects];
      return this.bottom ? newArr.pop() : {};
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/varibles.scss";

.content {
  .projects {
    display: flex;
    height: 80%;
    align-items: center;

    .test {
      display: flex;

      & > span {
        background-color: $blue;
        width: 8px;
        border-radius: $radius;
        margin-right: 20px;
      }

      p {
        color: rgb(71, 71, 71);
        font-size: 16px;
        margin: 0 0 18px 0;

        &:last-child {
          margin: 0;
        }

        span {
          font-weight: 600;
        }
      }

      .bottom-desc {
        font-weight: 600;
        color: #000;
        font-size: 17px;
        padding-top: 25px;
      }
    }
  }
}
</style>