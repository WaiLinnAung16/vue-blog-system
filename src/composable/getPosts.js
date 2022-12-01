import { ref } from "vue";
import { db } from "../firebase/config";
let getPosts = () => {
  let posts = ref([]);
  let error = ref("");
  let fetchPost = async () => {
    try {
      let res = await db
        .collection("posts")
        .orderBy("created_at", "desc")
        .get();
      posts.value = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
    } catch (err) {
      error.value = err.message;
    }
  };
  return { posts, error, fetchPost };
};

export default getPosts;
// await new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000);
// });
// let response = await fetch("http://localhost:3000/posts");
// let datas = await response.json();
// posts.value = datas;
// if (response.status === 404) {
//   throw new Error("Url Not Found");
// }
