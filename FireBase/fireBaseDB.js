import { getDatabase, ref, set, get, push, child } from "firebase/database";

const uploadPostOnDataBase = async (post) => {
  const db = getDatabase();

  const json = {
    name: post.name,
    info: post.input,
    location: post.location,
    photo: post.newPhoto,
    userId: post.userId,
  };

  const postListRef = ref(db, "posts/" + post.userId);
  const newPostRef = push(postListRef);
  set(newPostRef, json);
};

const readDataPosts = (userId) => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `posts/${userId}`));
};

export { uploadPostOnDataBase, readDataPosts };
