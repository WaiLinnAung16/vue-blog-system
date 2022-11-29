<template>
  <div class="home">
    <h1>Post List</h1>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="posts.length > 0" class="layout">
      <div>
        <PostList :posts="posts"></PostList>
      </div>
      <div>
        <TagCom :posts="posts"></TagCom>
      </div>
    </div>
    <div v-else>
      <LoadSpin></LoadSpin>
    </div>
  </div>
</template>

<script>

import TagCom from '../components/TagCom'
import LoadSpin from '../components/loadSpin'
import PostList from '../components/PostList';
import getPosts from '../composable/getPosts'
import { computed } from '@vue/reactivity';
import { reactive, ref } from 'vue';



export default {
  components: {
    TagCom,
    LoadSpin, PostList
  },

  setup() {
    //composables function
    let { posts, error, fetchPost } = getPosts()
    fetchPost()
    return { posts, error }
  }
}
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
