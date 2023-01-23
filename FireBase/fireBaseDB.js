import {
  getDatabase,
  ref,
  set,
  get,
  push,
  child,
  onValue,
} from "firebase/database";

const uploadPostOnDataBase = async (post) => {
  const db = getDatabase();
  const json = {
    name: post.name,
    info: post.input,
    location: post.location,
    photo: post.newPhoto,
    userId: post.userId,
  };

  const postListRef = ref(db, "posts");
  const newPostRef = push(postListRef);
  set(newPostRef, json);
};

const readDataPosts = () => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `posts`));
};

const uoloadComment = (comment, name, id, userId, date) => {
  const db = getDatabase();

  const postListRef = ref(db, `posts/${id}/comment`);
  const newPostRef = push(postListRef);

  set(newPostRef, {
    name,
    comment,
    date,
  });
};

const readComment = (userId, id) => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `posts/${id}/comment`));
};
export { uploadPostOnDataBase, readDataPosts, uoloadComment, readComment };
