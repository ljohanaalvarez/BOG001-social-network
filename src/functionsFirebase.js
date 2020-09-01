export const savePost = (commitForm) =>
    fs.collection('posts').doc().set({
            commitForm
    });  

/*export const getPosts = () => fs.collection('posts').get();*/
export const onGetPosts = (callback) => fs.collection('posts').onSnapshot(callback);
export const deletePost = id => fs.collection('posts').doc(id).delete();
export const getPosts = id => fs.collection('posts').doc(id).get();
export const upDatePosts =  (id, upDatePosts) => fs.collection("posts").doc(id).update(upDatePosts);