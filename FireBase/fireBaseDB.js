import { getDatabase, ref, set, onValue, get, child } from "firebase/database";

const uploadPostOnDataBase = (post) => {
  const db = getDatabase();

  set(ref(db, "posts/" + post.userId), post);
};

const readDataPosts = (userId) => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `posts/${userId}`));
};

export { uploadPostOnDataBase, readDataPosts };
