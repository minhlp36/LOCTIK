// auth.js
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const message = document.getElementById('message');

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'home.html')
    .catch((err) => message.textContent = 'Lỗi: ' + err.message);
});

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => message.textContent = 'Đăng ký thành công, bạn có thể đăng nhập.')
    .catch((err) => message.textContent = 'Lỗi: ' + err.message);
});
