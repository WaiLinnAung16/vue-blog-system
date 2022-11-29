<template>
    <div class="tag">
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="posts.length" class="layout">
            <div>
                <PostList :posts="filteredPosts"></PostList>
            </div>
            <div>
                <TagCom :posts="posts"></TagCom>
            </div>
        </div>
        <div v-else>
            loading...
        </div>
    </div>

</template>

<script>

import TagCom from '../components/TagCom'
import PostList from '../components/PostList'
import getPosts from '@/composable/getPosts';
import { computed } from '@vue/reactivity';
export default {
    components: {
        TagCom,
        PostList
    },
    props: ['tag'],
    setup(props) {
        let { posts, error, fetchPost } = getPosts();
        fetchPost();
        let filteredPosts = computed(() => {
            return posts.value.filter((post) => {
                return post.tags.includes(props.tag)
            })
        })
        return { posts, error, filteredPosts }
    }
}
</script>

<style >
.tag {
    max-width: 1200px;
    margin: 0 auto;
}
</style>