<template>
    <div v-if="post" class="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <button class="delete" @click="deletePost">Delete</button>
    </div>
    <div v-else>
        <LoadSpin></LoadSpin>
    </div>
</template>

<script>

import LoadSpin from '../components/loadSpin'
import getPost from '../composable/getPost';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { db } from '@/firebase/config';

export default {
    components: { LoadSpin },
    props: ["id"], //this.$route.params.id
    setup(props) {
        let route = useRoute();
        let router = useRouter();
        // console.log(route)
        let { post, error, load } = getPost(route.params.id);
        let id = props.id;
        let deletePost = async () => {
            await db.collection("posts").doc(id).delete();
            router.push("/")
        }

        load();
        return { post, error, deletePost }
    }
}
</script>

<style>
.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
}

.post h2 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
}

.post h2::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
}

.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}

button.delete {
    margin: 25px auto;
}
</style>