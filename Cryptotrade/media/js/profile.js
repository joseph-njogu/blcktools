const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');

const nameHolder = document.getElementById('displayNameHolder');
const imgHolder = document.getElementById('imgHolder')

const emailHolder = document.getElementById('emailHolder');
const uidHolder = document.getElementById('uidHolder');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName)
        displayNameHolder.innerText = user.displayName;
        nameHolder.innerText = user.displayName;
    if(user.photoURL)
        photoHolder.setAttribute('src', user.photoURL);
        imgHolder.setAttribute('src', user.photoURL);
    if(user.email)
        emailHolder.innerText = "Invoice to: " + user.email;
    if(user.uid)
        uidHolder.innerText = "ID: " + user.uid;
})
