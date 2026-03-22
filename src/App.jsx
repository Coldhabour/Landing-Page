import './App.css';

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#inicio">
          AquaPulse
        </a>

        <nav className="topbar__nav">
          <a href="#servicos">Servicos</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__content">
            <span className="hero__eyebrow">Solucoes em irrigacao inteligente</span>
            <h1>Projetos que ajudam sua operacao a usar agua com mais eficiencia.</h1>
            <p>
              Criamos sistemas de irrigacao para areas rurais, jardins, empresas
              e propriedades que precisam de desempenho, economia e suporte
              tecnico confiavel.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#contato">
                Solicitar avaliacao
              </a>
              <a className="button button--ghost" href="#servicos">
                Conhecer servicos
              </a>
            </div>

            <ul className="hero__highlights">
              <li>Projetos sob medida</li>
              <li>Instalacao e manutencao</li>
              <li>Atendimento consultivo</li>
            </ul>
          </div>

          <div className="hero__panel">
            <div className="hero__card hero__card--metric">
              <span className="card-label">Economia estimada</span>
              <strong>ate 30%</strong>
              <p>Reducao de desperdicio com distribuicao mais precisa de agua.</p>
            </div>

            <div className="hero__card hero__card--stacked">
              <div>
                <span className="card-label">Segmentos atendidos</span>
                <p>Residencial, agricola, comercial e paisagismo tecnico.</p>
              </div>
              <div>
                <span className="card-label">Suporte continuo</span>
                <p>Acompanhamento desde a analise inicial ate o pos-venda.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <article>
            <strong>120+</strong>
            <span>Projetos entregues</span>
          </article>
          <article>
            <strong>15 anos</strong>
            <span>Experiencia de mercado</span>
          </article>
          <article>
            <strong>24h</strong>
            <span>Tempo medio de retorno</span>
          </article>
        </section>

        <section className="section" id="servicos">
          <div className="section__intro">
            <span className="section__eyebrow">Servicos</span>
            <h2>Uma base completa para atender diferentes cenarios de irrigacao.</h2>
          </div>

          <div className="grid grid--three">
            <article className="info-card">
              <h3>Projeto personalizado</h3>
              <p>
                Levantamento tecnico, dimensionamento e proposta alinhada ao
                tipo de area e objetivo da operacao.
              </p>
            </article>
            <article className="info-card">
              <h3>Instalacao profissional</h3>
              <p>
                Implementacao com foco em durabilidade, seguranca e bom
                desempenho dos equipamentos.
              </p>
            </article>
            <article className="info-card">
              <h3>Manutencao preventiva</h3>
              <p>
                Revisoes periodicas para evitar falhas, desperdicios e perda de
                produtividade.
              </p>
            </article>
          </div>
        </section>

        <section className="section section--contrast" id="vantagens">
          <div className="section__intro">
            <span className="section__eyebrow">Vantagens</span>
            <h2>Por que usar uma landing com esse posicionamento inicial.</h2>
          </div>

          <div className="grid grid--two">
            <article className="benefit-card">
              <h3>Mensagem clara</h3>
              <p>
                O visitante entende rapidamente o que a empresa faz, para quem
                ela atende e qual o valor da solucao.
              </p>
            </article>
            <article className="benefit-card">
              <h3>Facil de adaptar</h3>
              <p>
                Os textos foram escritos de forma generica para voce trocar o
                nome, numeros, areas atendidas e provas sociais depois.
              </p>
            </article>
            <article className="benefit-card">
              <h3>Foco comercial</h3>
              <p>
                A pagina conduz o usuario para entrar em contato sem depender de
                explicacoes longas demais.
              </p>
            </article>
            <article className="benefit-card">
              <h3>Visual confiavel</h3>
              <p>
                O layout usa uma linguagem limpa e tecnica, adequada para
                servicos de infraestrutura e campo.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="processo">
          <div className="section__intro">
            <span className="section__eyebrow">Processo</span>
            <h2>Um fluxo simples para apresentar como a empresa trabalha.</h2>
          </div>

          <div className="timeline">
            <article className="timeline__item">
              <span>01</span>
              <div>
                <h3>Diagnostico inicial</h3>
                <p>Entendimento da area, necessidade e expectativa do cliente.</p>
              </div>
            </article>
            <article className="timeline__item">
              <span>02</span>
              <div>
                <h3>Proposta tecnica</h3>
                <p>Definicao da melhor configuracao de irrigacao para o projeto.</p>
              </div>
            </article>
            <article className="timeline__item">
              <span>03</span>
              <div>
                <h3>Execucao e suporte</h3>
                <p>Instalacao, orientacao de uso e acompanhamento continuo.</p>
              </div>
            </article>
          </div>
        </section>

        <section className="cta" id="contato">
          <div>
            <span className="section__eyebrow">Contato</span>
            <h2>Pronto para transformar essa base em uma pagina da empresa real.</h2>
            <p>
              Quando voce quiser, a gente substitui esse conteudo generico por
              informacoes especificas, diferenciais reais e dados de contato.
            </p>
          </div>

          <a className="button button--primary" href="mailto:contato@empresa.com">
            Falar com a empresa
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;
