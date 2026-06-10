import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
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

// Login com GOOGLE (Seletor corrigido)
document.querySelector(".btn--google")?.addEventListener("click", async () => {
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
    const loginCardHeader = document.querySelector(".login-card-header p");
    
    // Seleção correta das estruturas do novo HTML
    const inputGroups = document.querySelectorAll(".input-group");
    const divider = document.querySelector(".divider");
    const loginBtnsContainer = document.querySelector(".login-btns");
    const btnGoogle = document.querySelector(".btn--google");
    const btnLogout = document.getElementById("btnLogout");

    if (user) {
        const nomeParaMostrar = user.displayName || user.email;

        // Atualiza elementos de texto
        if (usuarioLogadoSpan) usuarioLogadoSpan.textContent = nomeParaMostrar + " | ";
        if (loginCardHeader) loginCardHeader.textContent = `Conectado como: ${nomeParaMostrar}`;

        // Esconde formulários e botões de autenticação inicial
        inputGroups.forEach(group => group.style.display = "none");
        if (divider) divider.style.display = "none";
        if (loginBtnsContainer) loginBtnsContainer.style.display = "none";
        if (btnGoogle) btnGoogle.style.setProperty('display', 'none', 'important');
        
        // Exibe botão de Sair
        if (btnLogout) btnLogout.style.display = "flex";

    } else {
        // Fluxo de usuário Desconectado
        if (usuarioLogadoSpan) usuarioLogadoSpan.textContent = "";
        if (loginCardHeader) loginCardHeader.textContent = "Gerencie sua jornada de reabilitação";

        // Exibe novamente os inputs e métodos de login
        inputGroups.forEach(group => group.style.display = "flex");
        if (divider) divider.style.display = "flex";
        if (loginBtnsContainer) loginBtnsContainer.style.display = "grid";
        if (btnGoogle) btnGoogle.style.setProperty('display', 'flex', 'important');
        
        // Oculta botão de Sair
        if (btnLogout) btnLogout.style.display = "none";
    }
});