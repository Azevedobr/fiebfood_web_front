import { useState } from 'react';
import './EsqueceuSenha.css';
import { useNavigate, Link } from 'react-router-dom';

function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const enviarRecuperacao = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, insira seu email.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert(`Instruções enviadas para ${email}`);
      setLoading(false);
      navigate('/entraraluno');
    }, 1500);
  };

  return (
    <div className="wizard-container">
      <div className="wizard-card">
        <div className="step-indicator">
          <span className="step-text">Recuperar Senha</span>
          <div className="dots">
            <div className="dot active"></div>
          </div>
        </div>

        <div className="step-content">
          <div className="step-panel">
            <div className="step-icon">🔐</div>
            <h2>Esqueceu sua senha?</h2>
            <p>Digite seu email e enviaremos instruções para recuperá-la</p>
            
            <form onSubmit={enviarRecuperacao}>
              <div className="input-field">
                <input
                  type="email"
                  placeholder="Digite seu email cadastrado"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Instruções
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="wizard-footer">
          <p>Lembrou da senha? <Link to="/entraraluno">Voltar ao login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuSenha;
