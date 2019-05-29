<template>
  <section class="sort-container">
    <!-- food -->
    <div class="sort-item" :class="{choose_type:sortBy == 'food'}">
      <div class="sort-item-container" @click="chooseType('food')">
        <div class="sort-item-border">
          <span>food</span>
        </div>
      </div>
      <transition name="showlist">
        <section v-show="sortBy == 'food'" class="sort-detail-type">
          <ul>
            <li>rice</li>
            <li>rice</li>
          </ul>
        </section>
      </transition>
    </div>
    <!-- fruits -->
    <div class="sort-item" :class="{choose_type:sortBy == 'fruits'}">
      <div class="sort-item-container" @click="chooseType('fruits')">
        <div class="sort-item-border">
          <span>fruits</span>
        </div>
      </div>
      <transition name="showlist">
        <section v-show="sortBy == 'fruits'" class="sort-detail-type">
          <ul>
            <li>apple</li>
            <li>pear</li>
          </ul>
        </section>
      </transition>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Select',
  components: {
  },
  data () {
    return {
      sortBy: 'food'
    }
  },
  methods: {
    chooseType (type) {
      console.log(type)
      this.sortBy = type
    }
  }
}
</script>

<style lang="scss" scoped>
.sort-container{
  // overflow: hidden;
  .sort-item{
    position: relative;
    float: left;
    width: 30%;
  }
  .choose_type{
    background: #ccc;
  }
  .sort-detail-type{
    position: absolute;
    top:6px;
    left: 0;
    ul{
      width: 100%;
      text-align: center;
      background: pink;
      li{
        list-style: none;
      }
    }
  }
}
</style>
