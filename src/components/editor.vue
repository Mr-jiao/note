<template>
    <div class="editor-wrapper">
        <div class="title">
            <label for="title">文章标题</label>
            <input type="text" id="title" class="form-control" v-model="articleTitle">
        </div>
        <div class="content">
            <label for="content">文章内容</label>
            <textarea id="content" class="form-control" :value="articleContent" @input="editorArticle({content: $event.target.value})"></textarea>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['articleContent']),
        articleTitle: {
            get() {
                return this.$store.getters.articleTitle
            },
            set(value) {
                this.$store.commit('editorArticle', {'title': value})
            }
        }
    },
    methods: {
        ...mapMutations(['editorArticle'])
    }
}
</script>

<style>
    .editor-wrapper {
        margin-left: 380px;
        height: 100%;
        width: 73%;
    }

    .title {
        height: 12%;
    }

    .content {
        height: 83%;
    }

    .content label {
        height: 3%;
    }

    .content textarea {
        height: 95%;
    }
</style>
