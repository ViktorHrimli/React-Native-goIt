import { getDatabase, ref, set } from "firebase/database";

const uploadPostOnDataBase = (post) => {
  const db = getDatabase();
  // const postId = Date.now().toString();

  set(ref(db, "posts/" + post.userId), post);
};

export { uploadPostOnDataBase };
