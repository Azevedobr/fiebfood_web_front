import httpClient from '../api/httpClient';
import API_ROUTES from '../api/routes';
import http from '../common/http-common';
const API_URL = "usuario/";

const findAll = () => {
    return httpClient.get(API_ROUTES.USUARIO.FIND_ALL);
};

const findById = (id) => {
    return httpClient.get(API_ROUTES.USUARIO.FIND_BY_ID(id));
};

const signup = (nome, email, password) => {
    return httpClient.post(API_ROUTES.USUARIO.SIGNUP, {
        nome,
        email,
        password,
    });
};

const signin = async (email, senha) => {
    try {
        const response = await fetch('http://localhost:8080/usuario/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha })
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        if (data) {
            localStorage.setItem("user", JSON.stringify(data));
        }
        return data;
    } catch (error) {
        console.error('Erro no signin:', error);
        throw error;
    }
};

const logout = () => {
    localStorage.removeItem("user");
};

const logoutWithDeactivation = async () => {
    logout();
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const create = data => {
    return httpClient.post(API_ROUTES.USUARIO.CREATE, {
        nome: data.nome,
        email: data.email,
        nivelAcesso: data.nivelAcesso
    });
};

const update = (id, data) => {
    return httpClient.put(API_ROUTES.USUARIO.UPDATE(id), data);
};

const inativar = (id) => {
    return httpClient.put(API_ROUTES.USUARIO.INATIVAR(id));
};

const reativar = (id) => {
    return httpClient.put(API_ROUTES.USUARIO.REATIVAR(id));
};

const alterarSenha = (id, data) => {
    return httpClient.put(API_ROUTES.USUARIO.CHANGE_PASSWORD(id), {
        senha: data.senha
    });
};

const findByNome = nome => {
    return httpClient.get(API_ROUTES.USUARIO.FIND_BY_NOME, {
        params: { nome }
    });
};

const findByEmail = (email) => {
    return httpClient.get(API_ROUTES.USUARIO.FIND_BY_EMAIL(email));
};

const updateProfile = (id, data) => {
    return httpClient.put(API_ROUTES.USUARIO.UPDATE_PROFILE(id), data);
};

const cadastrarAluno = async (data) => {
    try {
        // Tentar criar conta normalmente
        const response = await httpClient.post('/usuario/signup', {
            nome: data.nome,
            email: data.email,
            senha: data.senha
        });
        return response;
    } catch (error) {
        // Se der erro de email já existe, tentar reativar conta inativa
        if (error.response?.status === 400) {
            try {
                const userResponse = await httpClient.get(`/usuario/findByEmail/${data.email}`);
                if (userResponse.data) {
                    // Reativar e atualizar dados
                    await httpClient.put(`/usuario/reativar/${userResponse.data.id}`);
                    await httpClient.put(`/usuario/editar/${userResponse.data.id}`, {
                        nome: data.nome,
                        senha: data.senha
                    });
                    return userResponse;
                }
            } catch (reactivateError) {
                console.error('Erro ao reativar conta:', reactivateError);
            }
        }
        throw error;
    }
};

const UsuarioService = {
    findAll,
    findById,
    findByEmail,
    findByNome,
    signup,
    signin,
    logout,
    logoutWithDeactivation,
    getCurrentUser,
    create,
    update,
    updateProfile,
    inativar,
    reativar,
    alterarSenha,
    cadastrarAluno,
}

export default UsuarioService;
