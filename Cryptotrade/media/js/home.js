const signInWithGoogleButton = document.getElementById('signInWithGoogle');
const signInWithFacebookButton = document.getElementById('signInWithFacebook');

const auth = firebase.auth();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider)
  .then(() => {
    window.location.assign('huntington.html');
  })
  .catch(error => {
    console.error(error);
  })
}
signInWithGoogleButton.addEventListener('click', signInWithGoogle);


const signInWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  auth.signInWithPopup(facebookProvider)
  .then(() => {
    window.location.assign('huntington.html');
  })
  .catch(error => {
    console.error(error);
  })
}

signInWithFacebookButton.addEventListener('click', signInWithFacebook);

auth.onAuthStateChanged(user => {
  if(user)
    window.location.assign('huntington.html');
})