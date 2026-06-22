import { useState, useEffect } from 'react';

type Slide = {
  eyebrow: string;
  title: string;
  content: React.ReactNode;
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    // Slide 1: Cover
    {
      eyebrow: "trabalho de conclusão de curso",
      title: "MCPChess",
      content: (
        <div className="flex flex-col items-center justify-center text-center py-4">
          <div className="status-note px-6 py-2.5 mb-4 bg-[#fffdf8] text-xs font-semibold uppercase tracking-wider text-black/60 shadow-sm max-w-fit">
            Ciência da Computação — IFSULDEMINAS
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[color:var(--ink)] leading-tight max-w-2xl mt-2">
            Um estudo de caso sobre a tomada de decisão sequencial de LLMs via WebMCP em aplicações ReactJS
          </h2>
          <div className="mt-4 p-2 bg-amber-100/50 rounded border border-amber-200/60 max-w-lg text-[10px] font-mono text-[color:var(--chess-dark)] uppercase tracking-wider">
            Foco: Interoperabilidade entre IAs e Ambientes Web via WebMCP
          </div>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg text-left border-t border-[color:var(--paper-dark)] pt-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wider text-black/55 font-semibold">Discente</p>
              <p className="font-bold text-[color:var(--ink)] mt-1">Alice Barros Pereira</p>
              <p className="text-xs text-black/65">alice.pereira@alunos.ifsuldeminas.edu.br</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-black/55 font-semibold">Orientadora</p>
              <p className="font-bold text-[color:var(--ink)] mt-1">Profª. Drª. Aline Marques Del Valle</p>
              <p className="text-xs text-black/65">aline.valle@ifsuldeminas.edu.br</p>
            </div>
          </div>
          
          <p className="text-xs text-black/40 mt-6 font-mono">Muzambinho – MG, 2026</p>
        </div>
      )
    },

    // Slide 3: Introdução e Justificativa
    {
      eyebrow: "1. introdução & justificativa",
      title: "Contexto & Justificativa",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[color:var(--ink)]">
          <p className="leading-relaxed">
            As interações de IA na web hoje sofrem com <strong>limitações de proxies backend e web scraping</strong>. Os agentes precisam ler seletores CSS e coordenar fluxos por servidores externos, gerando falhas e latência.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-1 text-xs">
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[-0.5deg]">
              <span className="font-bold text-[color:var(--marker-x)] block mb-1">Privacidade e Latência Zero</span>
              O uso de **Modelos de Linguagem Pequenos (SLMs)** rodando localmente (nativos no navegador) garante privacidade e evita gargalos de conexões de rede externas.
            </div>
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[1deg]">
              <span className="font-bold text-[color:var(--marker-o)] block mb-1">Integração Direta</span>
              WebMCP unifica o ciclo de vida do agente e da aplicação na aba ativa, eliminando servidores intermediários complexos.
            </div>
          </div>
        </div>
      )
    },
    // Slide 4: O que é o MCP (Model Context Protocol) (previously 6)
    {
      eyebrow: "2. referencial teórico",
      title: "O que é o MCP (Model Context Protocol)?",
      content: (
        <div className="space-y-4 text-sm sm:text-base text-[color:var(--ink)]">
          <p className="leading-relaxed text-xs sm:text-sm">
            O <strong>MCP</strong> é um padrão de código aberto introduzido pela <strong>Anthropic</strong> para padronizar e simplificar a comunicação bidirecional entre LLMs e fontes externas de dados locais ou remotas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-xs">
            <div className="status-note p-4 bg-[#fffdf8] shadow-sm rounded-lg border-l-4 border-amber-500 rotate-[-1deg]">
              <h4 className="font-bold uppercase mb-2 text-amber-700">Relação Cliente-Servidor</h4>
              <ul className="list-disc pl-4 space-y-1 text-black/75">
                <li><strong>Cliente MCP:</strong> Aplicações como IDEs ou interfaces de chat que controlam as requisições e a IA.</li>
                <li><strong>Servidor MCP:</strong> Serviços leves que expõem dados, ferramentas ou rotinas locais.</li>
              </ul>
            </div>
            <div className="status-note p-4 bg-[#fffdf8] shadow-sm rounded-lg border-l-4 border-orange-500 rotate-[1deg]">
              <h4 className="font-bold uppercase mb-2 text-orange-700">Os Três Componentes</h4>
              <ul className="list-disc pl-4 space-y-1 text-black/75">
                <li><strong>Recursos (Resources):</strong> Dados estruturados (arquivos, tabelas de banco) para leitura da IA.</li>
                <li><strong>Ferramentas (Tools):</strong> Funções executáveis dinâmicas para a IA interagir no mundo real.</li>
                <li><strong>Prompts:</strong> Modelos pré-configurados de instruções.</li>
              </ul>
            </div>
          </div>
          <p className="text-[10px] text-black/50 font-mono mt-1 text-center">
            Limitação Original: O MCP padrão foca estritamente no backend e em dados estruturados estáticos.
          </p>
        </div>
      )
    },
    // Slide 5: WebMCP como Ponte de Integração (previously 7)
    {
      eyebrow: "3. referencial teórico",
      title: "WebMCP: A Ponte Front-end",
      content: (
        <div className="space-y-4 text-sm sm:text-base text-[color:var(--ink)]">
          <p className="leading-relaxed text-xs sm:text-sm">
            O <strong>WebMCP</strong> estende o protocolo MCP tradicional do backend diretamente para o <strong>front-end do navegador web</strong>, transformando páginas em ambientes legíveis e operáveis pela IA.
          </p>
          
          <div className="cardboard-board p-4 rounded-xl bg-[color:var(--paper-kraft)] border border-[color:var(--paper-edge)] shadow-inner mt-2">
            <h4 className="font-semibold text-xs mb-2 uppercase tracking-wider">Como a ponte se estabelece no frontend:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[color:var(--ink)]">
              <div className="bg-[#fffdf8] p-3 rounded shadow-sm">
                <strong>Sem Servidores Intermediários:</strong> A comunicação e a execução de ações ocorrem no contexto da própria aba ativa do navegador.
              </div>
              <div className="bg-[#fffdf8] p-3 rounded shadow-sm">
                <strong>Interpretação do DOM:</strong> A IA consegue "enxergar" a árvore visual e lógica em tempo real, manipulando dinamicamente botões e telas.
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 6: Caracterização do Problema (previously 4)
    {
      eyebrow: "4. caracterização do problema",
      title: "O Desafio da Decisão Sequencial",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[color:var(--ink)]">
          <p className="leading-relaxed">
            LLMs modernos falham frequentemente em tarefas que exigem <strong>decisões sequenciais complexas</strong>, onde cada escolha impacta o estado futuro do ambiente.
          </p>
          
          <div className="cardboard-board p-4 rounded-lg bg-[color:var(--paper-kraft)] border border-[color:var(--paper-edge)] shadow-inner text-[color:var(--ink)] text-xs">
            <h4 className="font-bold uppercase tracking-wider mb-1">O Xadrez como Cenário de Teste:</h4>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Informação Perfeita:</strong> Permite isolar fatores externos e focar na tática.</li>
              <li><strong>Combinações Complexas:</strong> Exige consistência e planejamento profundo.</li>
              <li><strong>Raciocínio Probabilístico:</strong> O Gemini opera prevendo tokens probabilísticos, o que gera dúvidas sobre sua consistência em decisões sequenciais estritas.</li>
            </ul>
          </div>
        </div>
      )
    },
    // Slide 7: Objetivos (previously 5)
    {
      eyebrow: "5. objetivos do projeto",
      title: "Objetivo Geral & Específicos",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[color:var(--ink)]">
          {/* Objetivo Geral */}
          <div className="p-3 bg-[#fffdf8] rounded-xl border-l-4 border-amber-500 shadow-sm relative overflow-hidden">
            <span className="font-bold text-amber-700 uppercase block text-[10px] tracking-wider mb-1">
              Objetivo Geral
            </span>
            <p className="leading-relaxed text-[11px] sm:text-xs text-black/85">
              Analisar as capacidades, o desempenho e a interatividade do protocolo WebMCP por meio do desenvolvimento e teste de um jogo de xadrez, avaliando o comportamento de um modelo de IA frente a jogadores humanos e algoritmos tradicionais.
            </p>
          </div>
          
          {/* Objetivos Específicos */}
          <div>
            <span className="font-bold text-[color:var(--ink)] uppercase block text-[10px] tracking-wider mb-2 ml-1">
              Objetivos Específicos
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[10px] sm:text-[11px] leading-snug">
              {/* Card 1: Fundamentação & Integração */}
              <div className="p-3.5 bg-[#fffdf8] rounded-lg border border-[color:var(--paper-edge)] shadow-sm rotate-[-0.5deg] flex flex-col justify-between">
                <div>
                  <span className="font-bold text-amber-800 uppercase block text-[9px] mb-2 tracking-wider">1. Fundamentação & Integração</span>
                  <ul className="space-y-1.5 list-disc pl-3 text-black/80">
                    <li><strong>Compreender</strong> as características e o funcionamento do protocolo WebMCP.</li>
                    <li><strong>Identificar</strong> métodos de integração a aplicações interativas para possibilitar a comunicação com a IA.</li>
                  </ul>
                </div>
              </div>

              {/* Card 2: IA vs Humano vs Clássico */}
              <div className="p-3.5 bg-[#fffdf8] rounded-lg border border-[color:var(--paper-edge)] shadow-sm rotate-[0.5deg] flex flex-col justify-between">
                <div>
                  <span className="font-bold text-amber-800 uppercase block text-[9px] mb-2 tracking-wider">2. Tomada de Decisão</span>
                  <ul className="space-y-1.5 list-disc pl-3 text-black/80">
                    <li><strong>Comparar</strong> estratégias e tomada de decisão contrapondo a IA (Gemini) a humanos e motor de busca clássico.</li>
                    <li><strong>Analisar</strong> padrões de repetição e previsibilidade em jogadas sequenciais.</li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Estabilidade & Limites */}
              <div className="p-3.5 bg-[#fffdf8] rounded-lg border border-[color:var(--paper-edge)] shadow-sm rotate-[-0.5deg] flex flex-col justify-between">
                <div>
                  <span className="font-bold text-amber-800 uppercase block text-[9px] mb-2 tracking-wider">3. Validação & Limites</span>
                  <ul className="space-y-1.5 list-disc pl-3 text-black/80">
                    <li><strong>Avaliar</strong> estabilidade da conexão e desafios de integrar apps web a agentes LLM.</li>
                    <li><strong>Identificar</strong> possíveis limitações práticas do protocolo WebMCP.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 8: Metodologia
    {
      eyebrow: "6. metodologia",
      title: "Metodologia & Arquitetura de Integração",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[color:var(--ink)]">
          <p className="leading-relaxed">
            Adotamos uma abordagem <strong>experimental e prática</strong>, dividindo a arquitetura em três camadas lógicas desacopladas que cooperam dentro do navegador.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2 text-xs">
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[-1deg]">
              <span className="font-bold text-[color:var(--marker-x)] block mb-1">1. Interface Humana (UI)</span>
              Aplicação React que renderiza o tabuleiro e responde de forma reativa a ações de clique.
            </div>
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[1.5deg]">
              <span className="font-bold text-[color:var(--marker-o)] block mb-1">2. Motor Local (WASM)</span>
              Lógica em Rust compilada para WebAssembly que calcula lances ótimos e valida regras do jogo offline.
            </div>
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[-2deg]">
              <span className="font-bold text-[color:var(--ink)] block mb-1">3. Agente WebMCP</span>
              Mapeamento de ferramentas e tradução FEN fornecendo estados à IA Chrome-nativa.
            </div>
          </div>
        </div>
      )
    },
    // Slide 9: WebAssembly: O Motor de Regras (moved before Fases)
    {
      eyebrow: "7. arquitetura técnica",
      title: "WebAssembly: O Motor de Regras",
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-[color:var(--ink)]">
          <p className="leading-relaxed text-xs sm:text-sm">
            Para que a IA local tome decisões lógicas rápidas, o motor que valida e calcula os lances do jogo foi compilado em <strong>WebAssembly (WASM)</strong>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            <div className="p-4 bg-[#fffdf8] rounded-xl border border-[color:var(--paper-dark)] shadow-sm rotate-[-1deg]">
              <span className="font-bold text-amber-700 uppercase block text-[10px] tracking-wider mb-2">
                O que é o WebAssembly?
              </span>
              <p className="text-black/85 leading-relaxed text-xs">
                É um padrão de formato binário que permite executar código compilado (como <strong>Rust</strong>) diretamente no navegador com <strong>desempenho quase nativo</strong> de máquina.
              </p>
            </div>
            
            <div className="p-4 bg-[#fffdf8] rounded-xl border border-[color:var(--paper-dark)] shadow-sm rotate-[1deg]">
              <span className="font-bold text-orange-700 uppercase block text-[10px] tracking-wider mb-2">
                Por que usamos no projeto?
              </span>
              <ul className="list-disc pl-4 space-y-1.5 text-black/80 text-xs">
                <li><strong>Cálculo Ultra-rápido:</strong> Validação de regras e lances de xadrez em nível de milissegundos.</li>
                <li><strong>Zero Latência:</strong> Executado 100% localmente no navegador, sem qualquer chamada ou dependência de rede.</li>
                <li><strong>Fluidez na UI:</strong> Evita gargalos de processamento e travamento da interface em React.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Slide 10: Fases do Desenvolvimento
    {
      eyebrow: "8. cronograma e etapas",
      title: "As 4 Fases do Desenvolvimento",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[color:var(--ink)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-1">
            <div className="status-note p-3 bg-[#fffdf8] rounded border-l-4 border-blue-500 shadow-sm rotate-[-1deg]">
              <h4 className="font-bold text-blue-700 uppercase mb-1">Fases 1 e 2 (Concluídas)</h4>
              <ul className="list-disc pl-4 space-y-1 text-black/80">
                <li><strong>Fase 1 (Fev-Abr/2026):</strong> Levantamento bibliográfico, revisão de literaturas e design arquitetural da integração.</li>
                <li><strong>Fase 2 (Mai-Jul/2026):</strong> Implementação da Prova de Conceito com Jogo da Velha em React.</li>
              </ul>
            </div>
            <div className="status-note p-3 bg-[#fffdf8] rounded border-l-4 border-orange-500 shadow-sm rotate-[1deg]">
              <h4 className="font-bold text-orange-700 uppercase mb-1">Fases 3 e 4 (Próximos Passos)</h4>
              <ul className="list-disc pl-4 space-y-1 text-black/80">
                <li><strong>Fase 3 (Ago-Out/2026):</strong> Desenvolvimento do tabuleiro de Xadrez modular integrado ao WASM e WebMCP.</li>
                <li><strong>Fase 4 (Out-Dez/2026):</strong> Execução dos testes controlados, análise qualitativa e redação final da defesa.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // Slide 11: PoC Jogo da Velha: Validando a Interoperabilidade
    {
      eyebrow: "9. prova de conceito",
      title: "PoC: Jogo da Velha & WebMCP",
      content: (
        <div className="space-y-4 text-sm sm:text-base text-[color:var(--ink)]">
          <p className="leading-relaxed text-xs sm:text-sm">
            O Jogo da Velha foi a Prova de Conceito (PoC) criada para testar a comunicação e a robustez da ponte do WebMCP antes de expandir para o Xadrez.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs mt-1">
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[-1deg]">
              <h4 className="font-bold text-[color:var(--marker-x)] uppercase mb-1">Validação WASM local</h4>
              <p className="text-[11px] leading-relaxed text-black/75">
                O motor compilado do Minimax calcula a jogada em tempo de execução no cliente, detectando vitórias e empates locais sem latência de rede.
              </p>
            </div>
            <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] shadow-sm rotate-[1.5deg]">
              <h4 className="font-bold text-[color:var(--marker-o)] uppercase mb-1">A Conexão com o WebMCP</h4>
              <p className="text-[11px] leading-relaxed text-black/75">
                Usando a ferramenta <strong>Model Context Tool Inspector</strong> no navegador Chrome Beta, o agente Gemini acessa o array do tabuleiro, interpretando a estrutura visual e decidindo suas ações.
              </p>
            </div>
          </div>
          
          <div className="status-note p-3 bg-[#fffdf8] text-[11px] border-l-4 border-[color:var(--chess-dark)] text-black/80 rotate-[-0.5deg]">
            <strong>Ciclo de Integração:</strong> Google Chrome Beta (Flags ativas) ➔ Extensão ativa conexão do WebMCP ➔ Agente IA mapeia as tools ➔ Executa ações na interface gráfica de forma automatizada.
          </div>
        </div>
      )
    },
    // Slide 12: PoC: Resultados de Interoperabilidade com Vídeo Ampliado
    {
      eyebrow: "10. resultados preliminares",
      title: "Resultados & Limitações da Ponte",
      content: (
        <div className="space-y-3 text-xs sm:text-sm text-[color:var(--ink)]">
          <p className="leading-relaxed text-[11px] sm:text-xs">
            A PoC validou a viabilidade técnica da ponte. Veja abaixo a demonstração ampliada da IA jogando de forma 100% autônoma:
          </p>
          
          <div className="flex flex-col gap-2">
            {/* Centered Large Video */}
            <div className="flex flex-col items-center justify-center border border-[color:var(--paper-edge)] rounded-lg bg-[#fffdf8] shadow-sm p-1.5 rotate-[-0.3deg] w-full max-w-2xl mx-auto">
              <video
                src="/video.mp4"
                controls
                className="rounded w-full max-h-[220px] object-contain"
                muted
                loop
                autoPlay
              />
              <span className="text-[8px] font-mono mt-1 text-black/40">Demonstração: Agente IA interagindo via WebMCP com a UI do jogo</span>
            </div>

            {/* Bottom notes side-by-side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] sm:text-[11px] mt-0.5">
              <div className="p-2 bg-green-50 rounded border-l-3 border-green-500 shadow-sm text-black/85">
                <strong>Benefícios:</strong> Comunicação estável front-end, latência de rede eliminada e acoplamento reativo direto.
              </div>
              <div className="p-2 bg-red-50 rounded border-l-3 border-[color:var(--marker-x)] shadow-sm text-black/85">
                <strong>Limitações:</strong> Padrão repetitivo e previsível nas escolhas táticas da IA local (Gemini).
              </div>
            </div>
          </div>
        </div>
      )
    },
    // Slide 13: Cronograma e Próximos Passos
    {
      eyebrow: "11. conclusão",
      title: "Cronograma e Disseminação",
      content: (
        <div className="space-y-4 text-sm sm:text-base text-[color:var(--ink)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="cardboard-board p-4 rounded-lg bg-[color:var(--paper-kraft)] border border-[color:var(--paper-edge)] shadow-inner text-[color:var(--ink)]">
              <h4 className="font-bold uppercase tracking-wider mb-2">Cronograma de Atividades:</h4>
              <ul className="space-y-1 font-mono text-[11px]">
                <li><span className="text-green-700 font-bold">✓</span> Fev-Abr: Revisão Bibliográfica</li>
                <li><span className="text-green-700 font-bold">✓</span> Mai-Jul: PoC Jogo da Velha</li>
                <li><span className="text-[color:var(--marker-x)] font-bold">▶</span> Ago-Out: Motor de Xadrez & WebMCP</li>
                <li><span className="text-black/40 font-bold">☐</span> Out-Nov: Bateria de Testes</li>
                <li><span className="text-black/40 font-bold">☐</span> Nov-Dez: Defesa e Artigo</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[color:var(--ink)]">Disseminação dos Resultados:</h4>
              <p className="text-xs text-black/80 leading-relaxed">
                O projeto disponibilizará o ecossistema open-source no GitHub.
              </p>
              <div className="p-3 bg-[#fffdf8] rounded border border-[color:var(--paper-dark)] text-[10px] text-center font-mono">
                Ponte WebMCP estável e validada.
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  return (
    <div className="slides-container relative flex min-h-dvh items-center justify-center overflow-x-hidden px-4 py-10 text-[color:var(--ink)] sm:px-6 lg:px-8">
      {/* Local styles block to guarantee 100% style independence */}
      <style>{`
        .slides-container {
          --paper-bg: #eaddca;
          --paper-kraft: #dcc5a1;
          --paper-dark: #b89b74;
          --paper-edge: #9c8463;
          --surface: #fff9f0;
          --ink: #443c34;
          --marker-x: #ff6b6b;
          --marker-o: #4ecdc4;
          --chess-dark: #8f633f;
          --shadow-soft: rgba(0, 0, 0, 0.15);
          font-family: 'Fredoka', ui-sans-serif, system-ui, sans-serif;
          color: var(--ink);
          background-color: var(--paper-bg);
          background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.05) 1px, transparent 0);
          background-size: 40px 40px;
        }

        .slides-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.28;
          mix-blend-mode: multiply;
          background-image: radial-gradient(rgba(0, 0, 0, 0.12) 0.7px, transparent 0.7px);
          background-size: 9px 9px;
          z-index: 1;
        }

        .slides-assemblage {
          position: relative;
          isolation: isolate;
          z-index: 2;
          transform: rotate(-1deg);
        }

        @media (max-width: 767px) {
          .slides-assemblage {
            transform: none;
          }
        }

        .slides-scrap-title {
          position: relative;
          border-radius: 4px;
          background: var(--surface);
          box-shadow: 3px 3px 0 var(--shadow-soft);
          transform: rotate(2deg);
        }

        .slides-cardboard {
          position: relative;
          width: 100%;
          padding: 1.5rem;
          border-radius: 1.25rem;
          background: var(--paper-kraft);
          box-shadow:
            0 12px 0 var(--paper-dark),
            0 18px 32px rgba(0, 0, 0, 0.11);
        }

        .slides-cardboard::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.12);
          pointer-events: none;
        }

        .slides-btn {
          border: 0;
          border-radius: 6px;
          background: var(--paper-kraft);
          color: var(--ink);
          box-shadow: 0 4px 0 var(--paper-dark);
          min-height: 2.75rem;
          min-width: 8rem;
          padding: 0.75rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          cursor: pointer;
          transition: transform 150ms ease-out, box-shadow 150ms ease-out, background-color 150ms ease-out;
        }

        .slides-btn--secondary {
          background: var(--surface);
          box-shadow: 0 4px 0 rgba(110, 95, 74, 0.24);
        }

        .slides-btn:active {
          transform: translateY(2px);
          box-shadow: 0 2px 0 var(--paper-dark);
        }

        .slides-btn--secondary:active {
          box-shadow: 0 2px 0 rgba(110, 95, 74, 0.24);
        }

        .slides-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: 0 4px 0 var(--paper-dark) !important;
        }

        .slides-btn--secondary:disabled {
          box-shadow: 0 4px 0 rgba(110, 95, 74, 0.24) !important;
        }

        @media (hover: hover) and (pointer: fine) {
          .slides-btn:not(:disabled):hover {
            transform: translateY(-1px);
          }
        }

        .status-note {
          position: relative;
          border-radius: 6px;
          background: #fffdf8;
          font-family: 'Space Mono', ui-monospace, monospace;
          box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.06);
          transform: rotate(4deg);
        }

        .status-note::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 50%;
          width: 42px;
          height: 14px;
          background: rgba(255, 255, 255, 0.62);
          transform: translateX(-50%) rotate(-3deg);
        }

        .cardboard-board {
          position: relative;
          width: 100%;
          border-radius: 1.25rem;
          background: var(--paper-kraft);
          box-shadow:
            inset 0 0 0 2px rgba(255, 255, 255, 0.12),
            0 8px 16px rgba(0, 0, 0, 0.08);
        }
      `}</style>
      
      <div aria-hidden="true" className="slides-grain" />

      <main className="slides-assemblage flex w-full max-w-3xl flex-col items-center gap-6 sm:gap-8">
        
        {/* Standalone Header */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">apresentação de tcc</span>
          <h2 className="text-xl font-bold uppercase tracking-wider text-[color:var(--ink)] mt-1">MCPChess Slideshow</h2>
        </div>

        <header className="slides-scrap-title px-7 py-3 sm:px-10 sm:py-4 self-center text-center">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.26em] text-black/55">
            {slides[currentSlide].eyebrow}
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl font-semibold">
            {slides[currentSlide].title}
          </h1>
        </header>

        <div className="w-full flex flex-col items-center gap-6">
          {/* Main Card Container */}
          <div className="slides-cardboard min-h-[22rem] flex flex-col justify-between">
            <div className="relative z-10 flex-grow flex flex-col justify-center">
              {slides[currentSlide].content}
            </div>
            
            {/* Footer inside Card */}
            <div className="mt-6 pt-4 border-t border-[color:var(--paper-dark)] flex items-center justify-between text-xs font-mono text-black/50">
              <span>Alice Barros Pereira</span>
              <span>slide {currentSlide + 1} de {slides.length}</span>
              <span className="hidden sm:inline">TCC - Ciência da Computação</span>
            </div>
          </div>

          {/* Navigation Buttons and Indicators */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
                disabled={currentSlide === 0}
                className="slides-btn slides-btn--secondary"
              >
                Anterior
              </button>
              
              <button 
                onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
                disabled={currentSlide === slides.length - 1}
                className="slides-btn"
              >
                Próximo
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs sm:max-w-md">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full border border-[color:var(--paper-edge)] transition-all ${
                    currentSlide === index 
                      ? "bg-[color:var(--marker-x)] scale-110 shadow-sm" 
                      : "bg-[color:var(--surface)] hover:bg-[color:var(--paper-kraft)]"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="text-[10px] font-mono text-black/40 mt-1">
              Dica: Use as setas do teclado (← / →) ou Barra de Espaço para navegar.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
