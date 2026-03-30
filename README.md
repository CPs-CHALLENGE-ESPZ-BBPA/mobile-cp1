# 📱 App de Presença (Expo)

# 📖 Resumo
Aplicativo móvel desenvolvido com Expo para registro de presença, incluindo:

- Presença  
- Login  
- Perfil  

Utiliza expo-router para navegação baseada em arquivos e valida presença via localização e Wi-Fi.

---

# 🧭 Navegação
O projeto utiliza roteamento baseado em arquivos.  
Cada arquivo dentro da pasta `app` vira automaticamente uma rota.

---

# 📱 Telas Principais

## 🏠 index.js
Tela inicial (Home) com informações e botão para iniciar presença.

## 🔐 login.js
Tela de login com autenticação de usuário e senha.

## 👤 profile.js
Tela de perfil do usuário com dados e opções da conta.

## 🧩 _layout.js
Configuração de layout e navegação compartilhada.

---

# ⚙️ Funcionalidades

## 🧠 Serviços Utilitários

### 📍 locationService.js
Responsável pela validação de presença via geolocalização.

### 📶 wifiService.js
Verifica se o usuário está conectado a um Wi-Fi autorizado.

---

## 🧩 Componentes Reutilizáveis

### 🔘 Button.js
Botão estilizado.

### ⏳ LoadingOverlay.js
Overlay de carregamento.

### 💬 Message.js
Exibição de mensagens e erros.

---

# 🗂️ Estrutura de Pastas
