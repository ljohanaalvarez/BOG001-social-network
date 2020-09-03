export const saveUser = (userName) =>
fs.collection('users').doc().set({
    userName    
});  

export const savePost = (commitForm,userId) =>
fs.collection('posts').doc().set({
            commitForm,
            userId    
});  

export let userId;

export const getUsers = () => {
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            name = user.displayName;
            userId = user.uid; 
            console.log(userId, name);// User is signed in.
        } else {
            console.log("No se asuste, este mensaje es pq esta funcionando")// User is signed in.
            // No user is signed in.
        }
    });
}
        
export const onGetPosts = (callback) => fs.collection('posts').onSnapshot(callback);

export const deletePost = id => fs.collection('posts').doc(id).delete();

export const getPosts = id => fs.collection('posts').doc(id).get();

export const upDatePosts =  (id, upDatePosts) => fs.collection("posts").doc(id).update(upDatePosts);
