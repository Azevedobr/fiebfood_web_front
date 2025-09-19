import { useState } from "react";
import './CadastroAluno.css';
import { useNavigate, Link } from 'react-router-dom';
import { UsuarioService } from '../../services';

function CadastroAluno() {
  const [step, setStep] = useState(1);
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const nextStep = () => {
    if (step === 1 && !nome.trim()) {
      alert('Digite seu nome para continuar');
      return;
    }
    if (step === 2 && !email.trim()) {
      alert('Digite seu email para continuar');
      return;
    }
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const validarFormulario = async (e) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert('As senhas não correspondem');
      return;
    }
    if (senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    setLoading(true);
    try {
      await UsuarioService.cadastrarAluno({ nome, email, senha });
      setStep(4);
    } catch (error) {
      alert(error.response?.data?.message || 'Erro ao criar conta');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wizard-container">


      <div className="wizard-card">
        <div className="step-indicator">
          <span className="step-text">Passo {step} de 4</span>
          <div className="dots">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className={`dot ${step >= num ? 'active' : ''}`}></div>
            ))}
          </div>
        </div>

        <div className="step-content">
          {step === 1 && (
            <div className="step-panel">
              <div className="step-icon">👋</div>
              <h2>Olá! Qual seu nome?</h2>
              <p>Vamos começar criando sua conta na cantina</p>
              <div className="input-field">
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  autoFocus
                />
              </div>
              <button onClick={nextStep} className="next-btn">
                Continuar →
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="step-panel">
              <div className="step-icon">📧</div>
              <h2>Agora seu email</h2>
              <p>Usaremos para enviar atualizações dos seus pedidos</p>
              <div className="input-field">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoFocus
                />
              </div>
              <div className="step-buttons">
                <button onClick={prevStep} className="back-btn">← Voltar</button>
                <button onClick={nextStep} className="next-btn">Continuar →</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-panel">
              <div className="step-icon">🔐</div>
              <h2>Crie sua senha</h2>
              <p>Escolha uma senha segura para proteger sua conta</p>
              <div className="input-field">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  placeholder="Sua senha (mín. 6 caracteres)"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  autoFocus
                />
                <button 
                  type="button" 
                  className="eye-btn"
                  onClick={() => setSenhaVisivel(!senhaVisivel)}
                >
                  {senhaVisivel ? '🙈' : '👁️'}
                </button>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                />
              </div>
              <div className="terms-check">
                <label>
                  <input type="checkbox" required />
                  <span>Aceito os <Link to="/termos">Termos de Uso</Link></span>
                </label>
              </div>
              <div className="step-buttons">
                <button onClick={prevStep} className="back-btn">← Voltar</button>
                <button onClick={validarFormulario} className="create-btn" disabled={loading}>
                  {loading ? 'Criando...' : 'Criar Conta 🚀'}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-panel success">
              <div className="success-icon">🎉</div>
              <h2>Conta criada com sucesso!</h2>
              <p>Bem-vindo à FiebTech Cantina, {nome}!</p>
              <button onClick={() => navigate('/entraraluno')} className="login-btn">
                Fazer Login
              </button>
            </div>
          )}
        </div>

        <div className="wizard-footer">
          <p>Já tem conta? <Link to="/entraraluno">Entrar</Link></p>
        </div>
      </div>
    </div>
  );
}

export default CadastroAluno;