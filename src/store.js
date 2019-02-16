import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        articleList: [],
        activeArticle: {}
    },
    mutations: {
        addArticle(state) {
            let article = {
                title: '一篇文章',
                content: '',
                isFavorite: false,
                time: new Date().getTime()
            }
            state.articleList.push(article)
            state.activeArticle = article  
        },
        selectActive(state, item) {
            console.log(item);
            state.activeArticle = item;
        },
        changeFavorite(state) {
            state.activeArticle.isFavorite = !state.activeArticle.isFavorite;
            console.log(state.activeArticle.isFavorite);
        },
        deleteArticle(state) {
            state.articleList = state.articleList.filter(art => art !== state.activeArticle)
            state.activeArticle = (state.articleList.length > 0) ? state.articleList[0] : {}
        },
        editorArticle(state, obj) {
            Object.assign(state.activeArticle, obj)
        }
    },
    getters: {
        isFavorite(state) {
            return state.activeArticle.isFavorite
        },
        favoriteList(state) {
            return state.articleList.filter(art => art.isFavorite);
        },
        articleTitle(state) {
            return state.activeArticle.title
        },
        articleContent(state) {
            return state.activeArticle.content
        }
    }
})