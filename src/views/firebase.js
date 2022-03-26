import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { ref, onUnmounted } from 'vue'


const config = {
    apiKey: "AIzaSyBRmb-TtfY8vCy4vROWDvyqkpw-WmYUd7E",
    authDomain: "animecity-46c6c.firebaseapp.com",
    projectId: "animecity-46c6c",
    storageBucket: "animecity-46c6c.appspot.com",
    messagingSenderId: "827703730463",
    appId: "1:827703730463:web:72278f63294db6be07902a",
    measurementId: "G-6FFHRWVYNH"
}

//e inicializojme konfigurimin e firebase
const firebaseApp = firebase.initializeApp(config)

//e inicializojme databazen po mdoket edhe e marrim collection e animeve
//qe e kemi kriju ne firebase
const db = firebaseApp.firestore()
const animeCollection = db.collection('animes')

//funksionon me shtu ni anime ne collection
export const createAnime = anime => {
    return animeCollection.add(anime)
}


/*  per me marr ni anime prej collection
    me metoda asinkrone qe duhet me msu edhe masanej
    nese ekziston ajo anime, bahet return, nese jo kthejme null
*/
export const getAnime = async id => {
    const anime = await animeCollection.doc(id).get()
    return anime.exists ? anime.data() : null
}

export const updateAnime = (id, anime) => {
    return animeCollection.doc(id).update(anime)
}

export const deleteAnime = id => {
    return animeCollection.doc(id).delete()
}

//kjo kqyr sa here kemi changes ne animecollection
//per me i ba qato ndryshime??? onSnapshot po thot osht
//event listener per me kqyr datan

//ref po mdoket e merr ni value edhe e kthen reaktive/mutable ref object
//po shkrun ne dokumentim

export const loadAnimes = () => {
    const animes = ref([])
    const close = animeCollection.onSnapshot(snapshot => {
        animes.value = snapshot.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }))

    })
    onUnmounted(close) //thirret ne qit life cycle hook te vue
    return animes
}

// export const loadAnimes = () => {
//     const animes = []

//     firebase.firestore().collection('animes')
//         .get().then((querySnapshot) =>
//             animes = querySnapshot.docs.map(doc => doc.data()))

//     console.log(animes)
//     return animes


// }

// export const loadAnimes = () => {
//     const animes = animeCollection.get)
//        //thirret ne qit life cycle hook te vue
//         return animes
//     })
// }

export const loadAndimes = () => {
    let anime = []
    animeCollection.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            anime.push({ id: doc.id, ...doc.data() })
        })
    })
    return anime;
}

export const loadGenres = () => {

    let genres = [
        "Adventure",
        "Romance",
        "Action",
        "Drama",
        "Fantasy",
        "Comedy",
        "Mystery",
        "Supernatural",
    ];

    return genres;
}


// export const storageRef = firebaseApp.storage().ref();


///spo bon as kjo
// export const merriAnimet = () => {

//     const animeList = null;
//     db.collection('animes')
//         .get()
//         .then(querySnapshot => {
//             animeList = querySnapshot.docs.map(doc => doc.data())
//         })
//         return animeList
//     }
