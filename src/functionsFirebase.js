export const saveUser = (userName) =>
fs.collection('users').doc().set({
    userName    
});  

export const savePost = (commitForm,userId) =>
    fs.collection('posts').doc().set({
            commitForm,
            userId
            
    });
    
   
/*export const getPosts = () => fs.collection('posts').get();*/
export const onGetPosts = (callback) => fs.collection('posts').onSnapshot(callback);
//export const onGetUsers = (callback) => fs.collection('users').onSnapshot(callback);
export const deletePost = id => fs.collection('posts').doc(id).delete();
export const getPosts = id => fs.collection('posts').doc(id).get();
export const upDatePosts =  (id, upDatePosts) => fs.collection("posts").doc(id).update(upDatePosts);


    /*export const getCollectionUsers = () => {
        onGetUsers((querySnapshot =>{
            querySnapshot.forEach( doc2 => {   
                const dataUser = doc2.data();
                name =  dataUser.userName;
                console.log(dataUser)
                console.log(name)
            })
        }))
    }*/
