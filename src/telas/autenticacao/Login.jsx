import { useState } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import { UsuarioService } from '../../services';

function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validarFormulario = async (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert('Por favor, preencha ambos os campos!');
      return;
    }
    
    setLoading(true);
    
    try {
      const usuario = await UsuarioService.signin(email, senha);
      
      if (usuario) {
        if (usuario.nivelAcesso === 'ADMIN') {
          navigate('/telainicio');
        } else {
          navigate('/telainicial');
        }
      }
    } catch (error) {
      console.error('Erro no login:', error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert('Email ou senha incorretos!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wizard-container">
      <div className="wizard-card">
        <div className="step-indicator">
          <span className="step-text">Fazer Login</span>
          <div className="dots">
            <div className="dot active"></div>
          </div>
        </div>

        <div className="step-content">
          <div className="step-panel">
            <div className="step-icon">👋</div>
            <h2>Bem-vindo de volta!</h2>
            <p>Entre com suas credenciais para continuar</p>
            
            <form onSubmit={validarFormulario}>
              <div className="input-field">
                <input
                  type="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="input-field">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <button 
                  type="button" 
                  className="eye-btn"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                >
                  {senhaVisivel ? '🙈' : '👁️'}
                </button>
              </div>

              <div className="forgot-section">
                <Link to="/esqueceu" className="forgot-link">
                  Esqueceu sua senha?
                </Link>
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Entrando...
                  </>
                ) : (
                  <>
                    Entrar
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="wizard-footer">
          <p>Não tem conta? <Link to="/cadastroaluno">Criar conta</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;