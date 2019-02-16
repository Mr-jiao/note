<template>
    <div class="tools-wrapper">
        <i class="glyphicon glyphicon-plus" @click="addArticle"></i>
        <i class="glyphicon glyphicon-heart" 
        @click="changeFavorite"
        :class="{'isFav' : isFavorite}"></i>
        <i class="glyphicon glyphicon-remove" @click="deleteArticle"></i>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    methods: {
        addArticle() {
            this.$store.commit('addArticle');
        },
        ...mapMutations(['changeFavorite', 'deleteArticle'])
    },
    computed: {
        ...mapGetters(['isFavorite'])
    }
}
</script>

<style>
    .tools-wrapper {
        height: 100%;
        width: 80px;
        padding: 35px 25px;
        float: left;
        background: lime;
    }

    .tools-wrapper i {
        font-size: 30px;
        margin-bottom: 35px;
        cursor: pointer;
        color: #fff;
    }

    .isFav {
        color: rgb(241, 15, 91) !important;
    }

</style>


