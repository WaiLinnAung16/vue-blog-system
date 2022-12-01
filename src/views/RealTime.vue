<template>
    <h1>
        RealTime database test
    </h1>

    <div v-for="post in posts" :key="post.id">
        <h1>{{ post.title }}</h1>
        <p>{{ post.body }}</p>
        <hr>
    </div>

</template>

<script>
import { db } from '@/firebase/config';
import { ref } from 'vue';

export default {
    setup() {
        let posts = ref([])
        db.collection("posts").orderBy("created_at", "desc").onSnapshot((snap) => {
            posts.value = snap.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
        })
        return { posts }
    }
}
</script>

<style>

</style>