export const savePost = (commitForm) =>
        fs.collection('posts').doc().set({
            commitForm
        })   

export const getPosts = () => fs.collection('posts').get();
export const deletePost = id => fs.collection('posts').doc(id).delete();