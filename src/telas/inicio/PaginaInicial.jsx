import React from 'react';
import { Link } from 'react-router-dom';
import './PaginaInicial.css';

const PaginaInicial = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🍽️</span>
            <span className="logo-text">FiebFood</span>
          </div>
          <nav className="nav-menu">
            <a href="#features" className="nav-link">Recursos</a>
            <a href="#benefits" className="nav-link">Benefícios</a>
            <a href="#testimonials" className="nav-link">Depoimentos</a>
            <a href="#pricing" className="nav-link">Como Funciona</a>
          </nav>
          <div className="header-actions">
            <Link to="/entraraluno" className="btn-login">Entrar</Link>
            <Link to="/cadastroaluno" className="btn-signup">Cadastrar</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              ⭐ #1 Sistema Premiado 
            </div>
            <h1 className="hero-title">
              Transformando a <span className="highlight">Cantina Escolar </span> 
              em um <span className="gradient-text">Negócio Digital</span>
            </h1>
            <p className="hero-description">
              Revolucionamos a gestão da cantina com nossa plataforma completa. 
              Pedidos online e 
              muito mais. Aumente suas vendas em até 300%.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">1</span>
                <span className="stat-label">Cantina Ativa</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Pedidos/Mês</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfação</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/cadastroaluno" className="btn-primary">
                🚀 Começar Grátis
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2 className="section-title">Recursos Poderosos</h2>
          <p className="section-subtitle">
            Tudo que você precisa para modernizar sua cantina
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3 className="feature-title">Pedidos Online</h3>
            <p className="feature-description">
              Estudantes fazem pedidos pelo celular, evitam filas e retiram na hora certa
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💳</div>
            <h3 className="feature-title">Pagamentos</h3>
            <p className="feature-description">
              PIX, cartão e dinheiro. Controle total das transações em tempo real
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3 className="feature-title">Controle de Vendas</h3>
            <p className="feature-description">
              Dashboards completos com vendas, produtos mais vendidos e análises
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3 className="feature-title">Gestão de Produtos</h3>
            <p className="feature-description">
              Controle automático de produtos, alertas de estoque baixo
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Sistema Rápido</h3>
            <p className="feature-description">
              Interface otimizada para agilizar o atendimento e reduzir filas
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 className="feature-title">App Mobile</h3>
            <p className="feature-description">
              Acesso completo pelo celular para gestores e estudantes
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="benefits-content">
          <div className="benefits-text">
            <h2 className="benefits-title">
              Por que escolher o <span className="gradient-text">FiebFood?</span>
            </h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">🚀</div>
                <div className="benefit-content">
                  <h4>Aumento de 300% nas Vendas</h4>
                  <p>A cantina do ITB Belval aumentou o faturamento em média 300% no primeiro ano com pedidos online e sistema de fidelidade integrado</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-content">
                  <h4>Zero Filas, Máxima Eficiência</h4>
                  <p>Pedidos antecipados com horário marcado eliminam 100% das filas. Estudantes retiram em segundos com código QR</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💎</div>
                <div className="benefit-content">
                  <h4>Tecnologia Premium Gratuita</h4>
                  <p>Sistema completo - tudo gratuito</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🎯</div>
                <div className="benefit-content">
                  <h4>Gestão Inteligente 24/7</h4>
                  <p>Cotrole em tempo real, alertas automáticos de estoque, relatórios de vendas e insights de comportamento dos clientes</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <div className="benefit-content">
                  <h4>Segurança Total</h4>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌟</div>
                <div className="benefit-content">
                  <h4>Suporte Especializado</h4>
                  <p>Equipe dedicada para cantinas escolares, treinamento gratuito, implementação em 24h e suporte técnico prioritário</p>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-visual">
            <div className="dashboard-preview">
              <div className="dashboard-header">📊 Dashboard</div>
              <div className="dashboard-stats">
                <div className="dash-stat">
                  <span className="dash-number">R$ 12.450</span>
                  <span className="dash-label">Vendas Hoje</span>
                </div>
                <div className="dash-stat">
                  <span className="dash-number">156</span>
                  <span className="dash-label">Pedidos</span>
                </div>
              </div>
              <div className="dashboard-chart">📈</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">O que nossos clientes dizem</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Revolucionou nossa cantina! As vendas triplicaram e os alunos adoram a praticidade."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">👩‍🏫</div>
              <div className="author-info">
                <span className="author-name">Maria Silva</span>
                <span className="author-role">Diretora - ITB Belval</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Sistema intuitivo e suporte excepcional. Recomendo para todas as escolas!"
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">👨‍💼</div>
              <div className="author-info">
                <span className="author-name">João Santos</span>
                <span className="author-role">Gestor - ITB Belval</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              "Acabaram as filas! Agora posso focar no que realmente importa: qualidade dos produtos."
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">👩‍🍳</div>
              <div className="author-info">
                <span className="author-name">Ana Costa</span>
                <span className="author-role">Coordenadora - ITB Belval</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="pricing" className="how-it-works-section">
        <div className="section-header">
          <h2 className="section-title">🚀 Como Funciona</h2>
          <p className="section-subtitle">Sua cantina digital em 3 passos simples</p>
        </div>
        <div className="steps-container">
          <div className="steps-timeline"></div>
          <div className="steps-grid">
            <div className="step-card step-1">
              <div className="step-number">1</div>
              <div className="step-icon-wrapper">
                <div className="step-icon">🛰️</div>
                <div className="step-glow"></div>
              </div>
              <h3 className="step-title">Explore o Menu</h3>
              <p className="step-description">Descubra deliciosos lanches, bebidas e sobremesas com fotos e preços atualizados</p>
              <div className="step-features">
                <span className="feature-tag">📸 Fotos HD</span>
                <span className="feature-tag">💰 Preços em tempo real</span>
              </div>
            </div>
            <div className="step-card step-2">
              <div className="step-number">2</div>
              <div className="step-icon-wrapper">
                <div className="step-icon">🚀</div>
                <div className="step-glow"></div>
              </div>
              <h3 className="step-title">Pagamento Instantâneo</h3>
              <p className="step-description">Pague com segurança total usando PIX, cartão ou dinheiro na retirada</p>
              <div className="step-features">
                <span className="feature-tag">🔒 100% Seguro</span>
                <span className="feature-tag">⚡ Super Rápido</span>
              </div>
            </div>
            <div className="step-card step-3">
              <div className="step-number">3</div>
              <div className="step-icon-wrapper">
                <div className="step-icon">🎉</div>
                <div className="step-glow"></div>
              </div>
              <h3 className="step-title">Retire e Aproveite</h3>
              <p className="step-description">Receba notificação quando estiver pronto e retire sem filas com seu código QR</p>
              <div className="step-features">
                <span className="feature-tag">🔔 Notificações</span>
                <span className="feature-tag">📱 Código QR</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-bottom">
          <Link to="/cadastroaluno" className="btn-start-now">
            🎆 Experimentar Agora - É Grátis!
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">
            Pronto para agilizar a sua vida?
          </h2>
          <p className="cta-description">
            Junte-se a cantina do Belval 
          </p>
          <div className="cta-actions">
            <Link to="/cadastroaluno" className="btn-cta-primary">
              🎉 Aproveitar Oferta
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🍽️</span>
              <span className="logo-text">FiebFood</span>
            </div>
            <p className="footer-description">
              A plataforma completa para modernizar cantinas escolares
            </p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Produto</h4>
            <ul className="footer-links">
              <li><a href="#features">Recursos</a></li>
              <li><a href="#pricing">Como Funciona</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li><a href="#">Sobre</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Suporte</h4>
            <ul className="footer-links">
              <li><Link to="/central-ajuda">Central de Ajuda</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 FiebFood. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaInicial;