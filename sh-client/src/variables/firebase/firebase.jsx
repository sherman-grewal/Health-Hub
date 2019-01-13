import firebase from 'firebase';
import React from 'react';

const config = {
    apiKey: "AIzaSyAGGO001VTrA4jIScMg5BUwBfQ5tkEJQBQ",
    authDomain: "mentalhealthhelper-fb52e.firebaseapp.com",
    databaseURL: "https://mentalhealthhelper-fb52e.firebaseio.com",
    projectId: "mentalhealthhelper-fb52e",
    storageBucket: "mentalhealthhelper-fb52e.appspot.com",
    messagingSenderId: "257859539961"
};

class Firebase {
    constructor() {
        const app = firebase.initializeApp(config);

        this.db = app.database();
    }

    doctors = () => this.db.ref('Doctors');

    patientsOfDoctor = (email = "lovelaceada@msncom") =>
        this.db.ref('Doctors/' + email);

    addDoctor = (doctor) =>
        this.db.ref('doctors').push({
            doctor
        });


    // users = (uid) => this.db.ref('users');

    // doctor = (email) => this.db.ref('doctors').

    // addDoctor = () => (name, email) => {
    //     return this.db.ref('doctors/' + 15).set(
    //         {
    //             name: name,
    //             email: email
    //         }
    //     )
    // };

    // addUser = () => this.db.ref('users').push({
    //     name: "Samf",
    //     email: "ddd@faefsfsd.com",
    // });


    // addPatientEntry = (n, extra, date) => {
    //     // this.db().ref('/doctos')
    // }
}

export default Firebase;