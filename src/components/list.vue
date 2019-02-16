<template>
  <div class="list-wrapper">
    <div class="header">
      <h3>My-Note-App</h3>
      <div class="btn-group btn-group-justified" role="group">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
          :class="{'active' : isAll }"
          @click="isAll=true">All notes</button>
        </div>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
          :class="{'active' : !isAll }"
          @click="isAll=false">Favorites</button>
        </div>
      </div>
    </div>
    <div class="list">
        <div class="group-list"
        v-for="(item, index) in (isAll ? list : favoriteList)" 
        :key="index"
        :class="{ 'isActive' : item === activeArticle }"
        @click="selectActive(item)">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
    data() {
        return {
            isAll: true
        }
    },
    computed: {
        list() {
            return this.$store.state.articleList;
        },
        ...mapState(['activeArticle']),
        ...mapGetters(['favoriteList'])
    },
    methods: {
        ...mapMutations(['selectActive'])
    }
};
</script>

<style>
.list-wrapper {
  width: 300px;
  float: left;
  padding: 30px;
  height: 100%;
}

.header {
  height: 12%;
}

.header h3 {
  text-align: center;
  font-size: 30px;
}

.list {
  height: 88%;
  overflow: auto;
}

.group-list {
    height: 50px;
    line-height: 50px;
    cursor: pointer;
}

.isActive {
    background: rgb(9, 122, 228);
}
</style>

