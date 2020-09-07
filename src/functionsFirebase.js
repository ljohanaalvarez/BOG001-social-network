export const saveUser = (userName) =>
fs.collection('users').doc().set({
    userName    
});  


export let userId;
export let name;


export const getUsers = () => {
    
    firebase.auth().onAuthStateChanged( user=> {
        if (user) {
            console.log(user);
            userId = user.uid    
            name = user.displayName;
            //console.log(userId);
            //console.log(name);   
            // User is signed in.
            
        } else { 
            // No user is signed in.
            console.log("No se asuste, este mensaje es pq esta funcionando, pero no identifica SESIÓN DE USUARIO")
            
        }
    });
}
console.log(userId,name)

export const savePost = (commitForm, userId, name) =>
fs.collection('posts').doc().set({
            commitForm,
            userId,
            name
});  



        
export const onGetPosts = (callback) => fs.collection('posts').onSnapshot(callback);

export const deletePost = id => fs.collection('posts').doc(id).delete();

export const getPosts = id => fs.collection('posts').doc(id).get();

export const upDatePosts =  (id, upDatePosts) => fs.collection("posts").doc(id).update(upDatePosts);
/*const userRef = fs.collection('users');
export const usersRef = () => {
    userRef
    .onSnapshot(snap => {

        snap.forEach(snapChild =>{
           // console.log(snapChild.data().userName)
            return snapChild.data().userName;

        })
    })
}

/*userRef
    .onSnapshot(snap => {

        snap.forEach(snapChild =>{
            console.log(snapChild.data().userName)
        })
    })/*



/*let dataUsers;
dataUsers.userRef = fs.doc('users/' + firebase.auth().currentUser.uid);
fs.collection('posts').add(data);

export const userCollectionRef = ()=>{ fs.collection('users').get()
       .then((res) => {
         const users = [];
         res.forEach(doc => {
        dataUsers = doc.data();
           dataUsers.id = doc.id;
           if (dataUsers.userRef) {
            dataUsers.userRef.get()
             .then(res => { dataUsers.userData = res.data() })
             .catch(err => console.error(err));
           }
           users.push(dataUsers);
         });
       })
       .catch((err) => { console.error(err) });
    }*/


