<template>
  <div id="app">
    <note-tools></note-tools>
    <note-list></note-list>
    <note-editor></note-editor>
  </div>
</template>

<script>

import noteTools from './components/tools.vue'
import noteList from './components/list.vue'
import noteEditor from './components/editor.vue'

export default {
  name: 'App',
  components: {
    noteTools,
    noteList,
    noteEditor
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, #app {
    height: 100%;
  }

  body {
    position: relative;
    height: 100%;
  }

</style>
