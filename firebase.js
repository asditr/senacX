import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider, // Importado para o Google
  signInWithPopup     // Importado para abrir a janelinha do Google
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAhcpLzFnN3k75bflCBcvDHDOX0DWFwsK8",
  authDomain: "senacx-e0b3f.firebaseapp.com",
  projectId: "senacx-e0b3f",
  storageBucket: "senacx-e0b3f.firebasestorage.app",
  messagingSenderId: "494700723098",
  appId: "1:494700723098:web:d83d78c87f034c748e5823",
  measurementId: "G-PQ11BV3SBQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Inicializa o provedor do Google
const googleProvider = new GoogleAuthProvider();

// ===================== EVENTOS DE AUTENTICAÇÃO =====================

// Cadastro com E-mail e Senha
document.getElementById("btnCadastro")?.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        await createUserWithEmailAndPassword(auth, email, senha);
        alert("Conta criada com sucesso!");
    } catch (error) {
        console.error(error);
        alert("Erro ao cadastrar: " + error.message);
    }
});

// Login com E-mail e Senha
document.getElementById("btnLogin")?.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        await signInWithEmailAndPassword(auth, email, senha);
        alert("Login realizado!");
    } catch (error) {
        console.error(error);
        alert("Erro ao entrar: " + error.message);
    }
});

// Login com GOOGLE
document.querySelector(".btn-google")?.addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        alert(`Bem-vindo(a), ${user.displayName}!`);
    } catch (error) {
        console.error(error);
        alert("Erro no login com Google: " + error.message);
    }
});

// Logout
document.getElementById("btnLogout")?.addEventListener("click", async () => {
    try {
        await signOut(auth);
        alert("Logout realizado!");
    } catch (error) {
        console.error(error);
    }
});

// ===================== MONITOR DE ESTADO DO USUÁRIO =====================
onAuthStateChanged(auth, (user) => {
    const usuarioLogadoSpan = document.getElementById("usuario-logado");
    const nomeUsuarioDashboard = document.getElementById("nomeUsuario");
    const userStatusSection = document.getElementById("user-status-section");
    
    // Seleciona os blocos visuais para alternar
    const loginInputs = document.querySelector(".login-inputs");
    const btnGoogle = document.querySelector(".btn-google");
    const btnCadastro = document.getElementById("btnCadastro");
    const btnLogin = document.getElementById("btnLogin");
    const btnLogout = document.getElementById("btnLogout");

    if (user) {
        // Se o usuário logou por e-mail pega o e-mail, se foi pelo Google tenta o Nome de exibição
        const nomeParaMostrar = user.displayName || user.email;

        // 1. Atualiza os textos na tela
        if (usuarioLogadoSpan) usuarioLogadoSpan.textContent = `👤 ${nomeParaMostrar}`;
        if (nomeUsuarioDashboard) nomeUsuarioDashboard.textContent = nomeParaMostrar;

        // 2. Controla o que aparece na tela
        if (userStatusSection) userStatusSection.style.display = "block"; // Mostra o card do usuário
        if (loginInputs) loginInputs.style.display = "none";             // Esconde os campos de texto
        if (btnGoogle) btnGoogle.style.display = "none";                 // Esconde o botão do Google
        if (btnCadastro) btnCadastro.style.display = "none";             // Esconde Cadastrar
        if (btnLogin) btnLogin.style.display = "none";                   // Esconde Entrar
        if (btnLogout) btnLogout.style.display = "block";                 // Mostra o botão Sair

    } else {
        // Se o usuário deslogou
        if (usuarioLogadoSpan) usuarioLogadoSpan.textContent = "";
        if (nomeUsuarioDashboard) nomeUsuarioDashboard.textContent = "Carregando...";

        // 2. Reseta a tela para o modo deslogado
        if (userStatusSection) userStatusSection.style.display = "none";
        if (loginInputs) loginInputs.style.display = "flex";
        if (btnGoogle) btnGoogle.style.display = "flex";
        if (btnCadastro) btnCadastro.style.display = "block";
        if (btnLogin) btnLogin.style.display = "block";
        if (btnLogout) btnLogout.style.display = "none";
    }
});