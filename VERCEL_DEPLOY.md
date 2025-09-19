# Deploy no Vercel - FiebFood Frontend

## 🚀 Passos para Deploy

### 1. Acesse o Vercel
- Vá para [vercel.com](https://vercel.com)
- Faça login com sua conta GitHub

### 2. Importe o Projeto
- Clique em "New Project"
- Selecione o repositório: `Azevedobr/fiebfood_web_front`
- Clique em "Import"

### 3. Configurações do Deploy
- **Framework Preset**: Vite
- **Root Directory**: `./` (raiz do projeto)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### 4. Variáveis de Ambiente
Adicione esta variável no Vercel:
```
VITE_API_URL_PROD=https://sua-url-do-backend.railway.app
```

### 5. Deploy
- Clique em "Deploy"
- Aguarde o build completar

## ✅ Verificação
Após o deploy, teste:
- Navegação entre páginas
- Login de usuários
- Carregamento de produtos
- Funcionalidades do carrinho

## 🔧 Atualizações
Para atualizações futuras:
1. Faça push para o repositório GitHub
2. Vercel fará deploy automático

## 📝 Notas
- O projeto está configurado para usar a URL de produção automaticamente
- CORS está configurado no backend para aceitar requisições do Vercel
- Todas as rotas do React são tratadas pelo arquivo `vercel.json`