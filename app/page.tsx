const tallyUrl =
  process.env.NEXT_PUBLIC_TALLY_FORM_URL ?? "https://tally.so/r/rjpoD5";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ??
  "https://wa.me/5511965843106?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Solo%20Povoado%20e%20quero%20um%20diagn%C3%B3stico.";

const audiences = [
  "Pequenas empresas",
  "Prestadores de serviço",
  "Clínicas",
  "Restaurantes",
  "Escritórios",
  "Profissionais autônomos",
  "Negócios locais",
];

const problems = [
  "Leads perdidos por falta de resposta rápida",
  "Atendimento espalhado e sem prioridade clara",
  "Campanhas sem página preparada para converter",
  "Processos manuais que travam vendas e agenda",
  "Redes sociais sem estratégia comercial",
  "Falta de visão simples do funil e próximos passos",
];

const steps = [
  {
    title: "Diagnóstico",
    text: "Entendemos sua oferta, rotina comercial e principais gargalos de captação.",
  },
  {
    title: "Plano de ação",
    text: "Definimos o caminho mais curto para organizar vendas, atendimento e campanhas.",
  },
  {
    title: "Implantação",
    text: "Criamos as peças e sistemas necessários sem complicar a operação do negócio.",
  },
  {
    title: "Acompanhamento",
    text: "Ajustamos a rota com dados reais e foco em oportunidades de crescimento.",
  },
];

const companyPillars = [
  "Estratégia antes da execução",
  "Marketing orientado por dados",
  "Automação para aumentar produtividade",
  "Tecnologia aplicada aos negócios",
  "Atendimento próximo e personalizado",
  "Crescimento sustentável",
];

const solutions = [
  {
    title: "Diagnóstico Estratégico",
    text: "Descubra o que está impedindo sua empresa de crescer.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Mesa com planejamento estratégico, plantas e luz natural",
    deliverables: [
      "Auditoria de presença digital",
      "Análise das redes sociais",
      "Avaliação do posicionamento",
      "Diagnóstico do funil comercial",
      "Plano de ação personalizado",
    ],
    prices: ["R$ 790"],
  },
  {
    title: "Gestão de Redes Sociais",
    text: "Transforme suas redes em um canal de relacionamento e vendas.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Pessoa criando conteúdo digital em notebook com ambiente acolhedor",
    deliverables: [
      "Planejamento mensal",
      "8 posts",
      "4 Reels",
      "Stories",
      "Design profissional",
      "Relatório de desempenho",
    ],
    prices: ["R$ 1.300"],
  },
  {
    title: "Gestão de Tráfego Pago",
    text: "Anúncios estruturados para atrair clientes com mais precisão.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Painel de dados e gráficos de marketing em uma tela",
    deliverables: [
      "Meta Ads",
      "Segmentação de público",
      "Remarketing",
      "Otimização contínua",
      "Relatórios mensais",
    ],
    prices: ["R$ 900/mês", "sem verba de mídia"],
  },
  {
    title: "Landing Pages e Sites",
    text: "Páginas rápidas, bonitas e focadas em conversão.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Tela com criação de site, códigos e elementos visuais",
    deliverables: [
      "Landing pages",
      "Sites institucionais",
      "Formulários inteligentes",
      "Integração com CRM",
      "SEO básico",
    ],
    prices: ["Landing Page: R$ 1.500", "Site Institucional: R$ 3.500"],
  },
  {
    title: "CRM e Automação",
    text: "Organize atendimento, vendas e follow-up em um fluxo inteligente.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    alt: "Equipe conectando ferramentas digitais em uma mesa de trabalho",
    deliverables: [
      "Implantação de CRM",
      "Fluxos automatizados",
      "Integração com WhatsApp",
      "Integração com Google",
      "Dashboards",
      "Automações em n8n",
    ],
    prices: ["CRM: R$ 2.500", "Automações a partir de R$ 900"],
  },
  {
    title: "Produção Audiovisual",
    text: "Conteúdos visuais para fortalecer a marca e gerar conexão.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    alt: "Câmera profissional preparada para gravação de conteúdo visual",
    deliverables: [
      "Reels",
      "Vídeos institucionais",
      "Conteúdo para campanhas",
      "Cobertura de eventos",
      "Fotografia comercial",
    ],
    prices: ["Reels a partir de R$ 250/unidade"],
  },
];

const plans = [
  {
    name: "Solo Start",
    subtitle: "Presença Digital",
    price: "R$ 890/mês",
    includes: [
      "Planejamento estratégico",
      "8 posts",
      "4 Reels",
      "Stories",
      "Relatório mensal",
    ],
  },
  {
    name: "Solo Grow",
    subtitle: "Marketing de Performance",
    price: "R$ 1.790/mês + mídia a partir de R$ 500",
    recommended: true,
    includes: [
      "Tudo do Start",
      "Gestão de Tráfego Pago",
      "Landing Page",
      "Campanhas Meta Ads",
      "Otimizações constantes",
    ],
  },
  {
    name: "Solo Flow",
    subtitle: "Marketing + Automação",
    price: "R$ 2.990/mês",
    includes: [
      "Tudo do Grow",
      "CRM",
      "Automações",
      "Dashboard",
      "Integração de ferramentas",
      "Fluxos inteligentes",
    ],
  },
  {
    name: "Solo Prime",
    subtitle: "Marketing como Departamento",
    price: "R$ 4.990/mês",
    includes: [
      "Tudo do Flow",
      "Produção Audiovisual",
      "Consultoria Estratégica",
      "Planejamento Comercial",
      "Acompanhamento contínuo",
      "Reuniões estratégicas",
    ],
  },
];

const benefits = [
  "Mais clareza sobre onde o cliente entra e onde a venda acontece",
  "Atendimento mais rápido, organizado e consultivo",
  "Campanhas com destino certo e mensagem alinhada",
  "Rotina comercial menos manual e mais previsível",
];

const faqs = [
  {
    question: "A Solo Povoado é uma software house?",
    answer:
      "Não. Criamos soluções inteligentes de crescimento, unindo marketing, atendimento, automação e IA aplicada.",
  },
  {
    question: "Preciso ter CRM ou ferramentas prontas?",
    answer:
      "Não. O diagnóstico mostra o que faz sentido para sua fase, com prioridade para simplicidade e resultado rápido.",
  },
  {
    question: "O atendimento depois do formulário é automático?",
    answer:
      "Nesta primeira etapa, o contato será feito manualmente pelo WhatsApp da Solo Povoado.",
  },
  {
    question: "Isso serve para negócio local?",
    answer:
      "Sim. A proposta foi pensada para pequenas empresas, serviços, clínicas, restaurantes, escritórios e autônomos.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function SectionIntro({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
        {label}
      </p>
      <h2 className="text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">{text}</p>
    </div>
  );
}

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${compact ? "" : "justify-center lg:justify-start"}`}>
      <a
        href={tallyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-zinc-950 shadow-[0_18px_60px_rgba(255,122,26,0.32)] transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
      >
        Receber diagnóstico gratuito
        <ArrowIcon />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white transition hover:border-purple-300/70 hover:bg-purple-400/15 focus:outline-none focus:ring-2 focus:ring-purple-200"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-4 w-4 shrink-0 text-orange-300"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

function PillarIcon({ index }: { index: number }) {
  const paths = [
    "M12 3v18m7-7H5m12-8L7 16",
    "M5 19V9m7 10V5m7 14v-7",
    "M7 8h10M7 12h10M7 16h6",
    "M12 3l7 4v10l-7 4-7-4V7l7-4Zm0 7v4",
    "M8 11a4 4 0 1 1 8 0v1h1a2 2 0 0 1 2 2v4H5v-4a2 2 0 0 1 2-2h1v-1Z",
    "M5 17c7 0 11-4 14-10M7 11c4 0 6-2 8-6M5 17c0-4 2-8 6-10",
  ];

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 text-orange-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.9"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[index % paths.length]} />
    </svg>
  );
}

function SolutionCard({ solution }: { solution: (typeof solutions)[number] }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/60 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-orange-300/45">
      <div className="relative h-48 overflow-hidden">
        <img
          src={solution.image}
          alt={solution.alt}
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
        <p className="mt-3 min-h-14 leading-7 text-zinc-300">{solution.text}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {solution.prices.map((price) => (
            <span
              key={price}
              className="rounded-full border border-orange-300/25 bg-orange-400/10 px-3 py-1 text-sm font-bold text-orange-100"
            >
              {price}
            </span>
          ))}
        </div>
        <ul className="mt-6 space-y-3">
          {solution.deliverables.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-200">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 shadow-2xl shadow-black/20 ${
        plan.recommended
          ? "border-orange-300/70 bg-gradient-to-br from-orange-500/20 via-white/[0.08] to-purple-500/20"
          : "border-white/10 bg-zinc-950/58"
      }`}
    >
      {plan.recommended ? (
        <span className="mb-5 w-fit rounded-full bg-orange-400 px-3 py-1 text-xs font-black uppercase text-zinc-950">
          Recomendado
        </span>
      ) : null}
      <p className="text-sm font-semibold uppercase text-purple-200">{plan.subtitle}</p>
      <h3 className="mt-2 text-3xl font-black text-white">{plan.name}</h3>
      <p className="mt-4 text-2xl font-black text-orange-200">{plan.price}</p>
      <ul className="mt-7 flex-1 space-y-3">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-200">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={tallyUrl}
        target="_blank"
        rel="noreferrer"
        className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-orange-200 ${
          plan.recommended
            ? "bg-orange-500 text-zinc-950 hover:bg-orange-400"
            : "border border-white/15 bg-white/8 text-white hover:border-orange-300/60 hover:bg-orange-400/15"
        }`}
      >
        Solicitar diagnóstico
      </a>
    </article>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Solo Povoado">
            <img
              src="/solo-povoado-logo.jpg"
              alt=""
              className="h-11 w-11 rounded-2xl border border-white/10 object-cover shadow-lg shadow-purple-950/40"
            />
            <span className="text-base font-bold text-white md:text-lg">Solo Povoado</span>
          </a>
          <a
            href={tallyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-orange-100"
          >
            Receber diagnóstico
          </a>
        </div>
      </header>

      <section id="top" className="relative px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-purple-600/20 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-200">
              Sistemas inteligentes para empresas que querem crescer.
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.96] text-white md:text-7xl">
              Solo Povoado
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-200 md:text-2xl">
              Transformamos processos manuais em vendas organizadas usando marketing,
              automação e inteligência artificial.
            </p>
            <div className="mt-9">
              <CtaButtons />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-500/25 via-purple-500/25 to-transparent blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/12 bg-white/8 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-semibold text-zinc-300">Mapa de crescimento</span>
                  <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-200">
                    ativo
                  </span>
                </div>
                <div className="space-y-3">
                  {["Captação", "Atendimento", "Organização", "Venda"].map((item, index) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="font-semibold text-white">{item}</span>
                        <span className="text-sm text-orange-200">{index + 1}/4</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange-400 to-purple-400"
                          style={{ width: `${48 + index * 13}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fade-in-section relative px-5 py-20 md:px-8">
        <div className="absolute left-1/2 top-10 -z-10 h-80 w-[min(42rem,80vw)] -translate-x-1/2 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/25 backdrop-blur-xl md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Quem Somos
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Estratégia, criatividade e tecnologia trabalhando juntas para transformar negócios.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-zinc-300 md:text-lg">
              <p>
                Na Solo Povoado, acreditamos que marketing não é apenas publicar conteúdo
                ou criar anúncios. É compreender pessoas, identificar oportunidades e
                desenvolver estratégias que aproximam marcas de seus clientes.
              </p>
              <p>
                Nascemos com o propósito de oferecer soluções completas para pequenas e
                médias empresas, unindo gestão de redes sociais, tráfego pago, automações,
                inteligência artificial, CRM e desenvolvimento digital em uma única estratégia.
              </p>
              <p>
                Mais do que executar serviços, construímos processos que ajudam empresas a
                vender mais, organizar seus atendimentos e crescer de forma sustentável.
              </p>
              <p>
                Cada projeto é desenvolvido de forma personalizada, respeitando a identidade
                de cada cliente e transformando desafios em oportunidades de crescimento.
              </p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {companyPillars.map((pillar, index) => (
                <div
                  key={pillar}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/45 p-4 text-sm font-semibold text-zinc-100"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-orange-400/12 ring-1 ring-orange-300/20">
                    <PillarIcon index={index} />
                  </span>
                  <span>{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/70 shadow-2xl shadow-black/30">
            <img
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1300&q=80"
              alt="Pessoas colaborando em planejamento criativo com tecnologia e luz natural"
              className="aspect-[4/5] h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-zinc-950/60 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
                Crescimento com propósito
              </p>
              <p className="mt-2 text-lg font-bold leading-7 text-white">
                Conectamos estratégia, tecnologia e pessoas para criar sistemas de crescimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.04] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="Para quem é"
            title="Para negócios que precisam vender melhor sem virar reféns de ferramentas."
            text="A Solo Povoado combina estratégia e execução para empresas que querem organizar demanda, atendimento e crescimento."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/45 p-5 text-zinc-100">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="O que resolvemos"
            title="Tiramos o crescimento do improviso."
            text="Organizamos a jornada do cliente para que cada campanha, conversa e processo tenha uma função comercial clara."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-orange-400 to-purple-400" />
                <p className="text-lg font-semibold leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950/55 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="Como funciona"
            title="Um processo consultivo, simples e orientado à ação."
            text="Começamos pelo que mais trava sua venda hoje e implantamos apenas o que ajuda o negócio a avançar."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-sm font-black text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="Soluções da Solo Povoado"
            title="Marketing, tecnologia e criatividade conectados ao crescimento."
            text="Serviços pensados para organizar presença digital, gerar demanda, melhorar atendimento e transformar processos em uma operação comercial mais inteligente."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.title} solution={solution} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-zinc-950/55 px-5 py-20 md:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-6xl bg-orange-500/10 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            label="Planos para cada fase do seu negócio"
            title="Escolha um ritmo de crescimento e deixe a operação mais clara."
            text="Dos primeiros passos de presença digital até uma estrutura de marketing como departamento, cada plano combina estratégia, execução e acompanhamento."
          />
          <div className="grid gap-4 lg:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.04] px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Benefícios
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Crescimento com mais método e menos ruído.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="rounded-3xl border border-white/10 bg-zinc-950/50 p-6">
                <p className="leading-7 text-zinc-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionIntro
            label="FAQ"
            title="Perguntas frequentes"
            text="O essencial para você entender se a Solo Povoado faz sentido para o seu momento."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <summary className="cursor-pointer list-none text-lg font-bold text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-zinc-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-12 md:px-8 md:pb-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-500/18 via-white/[0.07] to-purple-500/20 p-8 text-center shadow-2xl shadow-black/30 md:p-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
            Próximo passo
          </p>
          <h2 className="mx-auto max-w-3xl text-3xl font-black text-white md:text-5xl">
            Receba um diagnóstico claro para transformar processos manuais em vendas organizadas.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
            Preencha o formulário e a equipe da Solo Povoado continua o atendimento manualmente pelo WhatsApp.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButtons compact />
          </div>
        </div>
      </section>
    </main>
  );
}
