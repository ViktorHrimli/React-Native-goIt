import { auth } from "./config";
import { uploadPostOnDataBase, readDataPosts } from "./fireBaseDB";
import { uploadPhonoInStorage } from "./fireBaseStorage";

export { auth, uploadPhonoInStorage, uploadPostOnDataBase, readDataPosts };
