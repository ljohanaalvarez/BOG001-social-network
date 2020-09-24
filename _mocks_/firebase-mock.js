const firestore = () => {
    return {
        collection: (nameCollection) => {
            return {
                doc: () => {
                    return {
                        set: (objData) => {
                            return new Promise((resolve) => {
                                resolve('Pude crear una collección')
                            })
                        }
                    }  
                }
            }
        }
    }
}

/*const auth = () => {
    return {
        onAuthStateChanged: (user) => {
            return user
        }
    }
    
}*/

const firebase = {
    firestore: firestore,
    //auth: auth
}

export default jest.fn(() => {
    return firebase;
})