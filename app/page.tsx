"use client";

import Image from "next/image";
import { useState } from "react";

const siteUrl = "https://solopovoado.vercel.app/";

const tallyUrl =
  process.env.NEXT_PUBLIC_TALLY_FORM_URL ?? "https://tally.so/r/rjpoD5";

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ??
  "https://wa.me/5511965843106?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Solo%20Povoado%20e%20quero%20um%20diagn%C3%B3stico.";

const instagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
  "https://www.instagram.com/solopovoado/";

const navigation = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Planos", href: "#planos" },
  { label: "Perguntas", href: "#perguntas" },
];

const flowItems = [
  { title: "Instagram ou anúncio", label: "Atração", detail: "Interesse gerado" },
  { title: "Landing page", label: "Conversão", detail: "Oferta com destino" },
  { title: "Formulário", label: "Contato", detail: "Dados organizados" },
  { title: "Atendimento", label: "WhatsApp", detail: "Conversa consultiva" },
  { title: "CRM", label: "Organização", detail: "Próximo passo claro" },
  { title: "Follow-up", label: "Retomada", detail: "Oportunidade acompanhada" },
];

const problems = [
  "Pessoas demonstram interesse, mas não recebem acompanhamento.",
  "Campanhas direcionam para páginas que não convertem.",
  "Conversas ficam espalhadas entre diferentes canais.",
  "Não existe uma rotina clara de follow-up.",
  "Redes sociais publicam conteúdo sem objetivo comercial.",
  "Processos manuais consomem tempo da operação.",
];

const journey = [
  {
    title: "Atração",
    text: "Conteúdo, redes sociais e anúncios despertam interesse.",
  },
  {
    title: "Conversão",
    text: "Landing pages e formulários transformam visitas em contatos.",
  },
  {
    title: "Atendimento",
    text: "WhatsApp e processos organizados reduzem oportunidades esquecidas.",
  },
  {
    title: "Organização",
    text: "CRM e acompanhamento mostram quem precisa de atenção.",
  },
  {
    title: "Evolução",
    text: "Dados ajudam a identificar o que manter, ajustar ou interromper.",
  },
];

const processSteps = [
  {
    title: "Diagnóstico",
    text: "Entendemos a oferta, a presença digital, a rotina de atendimento e os principais gargalos.",
  },
  {
    title: "Priorização",
    text: "Definimos o que precisa ser resolvido primeiro e o que pode esperar.",
  },
  {
    title: "Implantação",
    text: "Construímos as páginas, campanhas, conteúdos, integrações ou processos necessários.",
  },
  {
    title: "Acompanhamento",
    text: "Observamos o funcionamento da operação e realizamos ajustes com base em dados reais.",
  },
];

const solutions = [
  {
    title: "Presença e posicionamento",
    description:
      "Estrutura para que o cliente entenda sua empresa, sua oferta e o próximo passo.",
    includes: [
      "Estratégia de comunicação",
      "Redes sociais",
      "Identidade de campanhas",
      "Conteúdo",
      "Produção visual",
    ],
  },
  {
    title: "Captação e conversão",
    description:
      "Canais preparados para transformar alcance e visitas em contatos.",
    includes: [
      "Tráfego pago",
      "Landing pages",
      "Sites institucionais",
      "Formulários",
      "Campanhas",
    ],
  },
  {
    title: "Atendimento e organização",
    description:
      "Processos para acompanhar oportunidades sem depender apenas da memória ou de conversas soltas.",
    includes: [
      "CRM",
      "Organização de leads",
      "Follow-up",
      "Integrações",
      "Dashboards simples",
    ],
  },
  {
    title: "Automação e inteligência artificial",
    description:
      "Tecnologia aplicada para reduzir tarefas repetitivas e apoiar a rotina do negócio.",
    includes: [
      "Automações em n8n",
      "Integração com WhatsApp",
      "Fluxos automáticos",
      "Organização de dados",
      "IA aplicada a processos específicos",
    ],
  },
];

const comparison = {
  disconnected: [
    "Divulgação sem destino claro.",
    "Contatos espalhados.",
    "Atendimento sem prioridade.",
    "Follow-up esquecido.",
    "Ferramentas utilizadas separadamente.",
    "Decisões baseadas apenas em percepção.",
  ],
  organized: [
    "Campanhas com objetivo definido.",
    "Contatos centralizados.",
    "Próximos passos mais claros.",
    "Rotina de acompanhamento.",
    "Ferramentas conectadas quando necessário.",
    "Decisões apoiadas por dados disponíveis.",
  ],
};

const examples = [
  {
    title: "Clínica ou consultório",
    flow: "Anúncio local -> landing page -> formulário -> contato pelo WhatsApp -> acompanhamento.",
    problem: "Interesse chega por canais diferentes e fica difícil saber quem precisa de retorno.",
    structure: "Página de oferta, formulário objetivo, registro do contato e rotina de retorno.",
    gain: "Mais clareza sobre pacientes interessados e próximos passos de atendimento.",
  },
  {
    title: "Salão ou serviço com agenda",
    flow: "Campanha -> oferta específica -> página de agendamento -> confirmação -> lembrete.",
    problem: "Divulgação gera perguntas repetidas e a agenda depende de conversas manuais.",
    structure: "Campanha com oferta, página simples, confirmação e lembrete definidos.",
    gain: "Menos tempo perdido na organização da agenda e comunicação mais consistente.",
  },
  {
    title: "Prestador de serviço",
    flow: "Conteúdo -> formulário de diagnóstico -> qualificação -> proposta -> follow-up.",
    problem: "Bons contatos chegam, mas a qualificação e o retorno não seguem uma rotina.",
    structure: "Diagnóstico inicial, critérios de prioridade, proposta e acompanhamento.",
    gain: "Processo comercial mais visível e menos dependente da memória.",
  },
];

const plans = [
  {
    name: "Solo Start",
    subtitle: "Presença Digital",
    price: "R$ 890/mês",
    forWho: "Para negócios que precisam organizar presença e frequência nas redes.",
    objective: "Criar uma base de comunicação mais clara e constante.",
    includes: [
      "Planejamento estratégico",
      "8 posts",
      "4 Reels",
      "Stories",
      "Relatório mensal",
    ],
    media: "Não inclui verba de mídia.",
  },
  {
    name: "Solo Grow",
    subtitle: "Marketing de Performance",
    price: "R$ 1.790/mês + mídia a partir de R$ 500",
    recommended: true,
    forWho: "Para negócios que já querem combinar presença digital com captação.",
    objective: "Levar campanhas para páginas e ofertas com destino mais claro.",
    includes: [
      "Tudo do Start",
      "Gestão de Tráfego Pago",
      "Landing Page",
      "Campanhas Meta Ads",
      "Otimizações constantes",
    ],
    media: "A verba de mídia é paga separadamente.",
  },
  {
    name: "Solo Flow",
    subtitle: "Marketing + Automação",
    price: "R$ 2.990/mês",
    forWho: "Para negócios que precisam organizar marketing, atendimento e acompanhamento.",
    objective: "Conectar captação, CRM, automações e visão operacional.",
    includes: [
      "Tudo do Grow",
      "CRM",
      "Automações",
      "Dashboard",
      "Integração de ferramentas",
      "Fluxos inteligentes",
    ],
    media: "Verba de mídia pode ser definida conforme a campanha.",
  },
  {
    name: "Solo Prime",
    subtitle: "Marketing como Departamento",
    price: "R$ 4.990/mês",
    forWho: "Para negócios que precisam de acompanhamento mais completo e recorrente.",
    objective: "Apoiar estratégia, execução, produção e evolução comercial.",
    includes: [
      "Tudo do Flow",
      "Produção Audiovisual",
      "Consultoria Estratégica",
      "Planejamento Comercial",
      "Acompanhamento contínuo",
      "Reuniões estratégicas",
    ],
    media: "Verba de mídia e produções extras podem variar por escopo.",
  },
];

const principles = [
  "Estratégia antes da ferramenta.",
  "Automação apenas quando simplifica.",
  "Comunicação próxima durante o projeto.",
];

const faqs = [
  {
    question: "A Solo Povoado é uma agência?",
    answer:
      "A Solo Povoado atua de forma mais integrada do que uma agência tradicional. O trabalho conecta marketing, atendimento, automação e tecnologia para organizar processos comerciais possíveis de operar.",
  },
  {
    question: "O diagnóstico inicial é realmente gratuito?",
    answer:
      "Sim. O diagnóstico inicial serve para entender o momento do negócio, os principais gargalos e quais caminhos fazem sentido antes de qualquer proposta.",
  },
  {
    question: "Preciso contratar todos os serviços?",
    answer:
      "Não. A recomendação parte do que é prioridade. Em alguns casos, uma landing page resolve o primeiro gargalo; em outros, a organização do atendimento vem antes.",
  },
  {
    question: "Vocês atendem pequenos negócios?",
    answer:
      "Sim. A proposta foi pensada para pequenas empresas, negócios locais, prestadores de serviço, clínicas, restaurantes, escritórios e profissionais autônomos.",
  },
  {
    question: "Preciso já ter site, CRM ou ferramentas?",
    answer:
      "Não. O diagnóstico identifica o que já existe, o que pode ser aproveitado e o que precisa ser criado ou ajustado.",
  },
  {
    question: "A verba de anúncios está incluída?",
    answer:
      "Quando houver tráfego pago, a verba de mídia não está incluída nos planos e deve ser paga separadamente na plataforma de anúncios.",
  },
  {
    question: "Quanto tempo um projeto leva?",
    answer:
      "O prazo varia conforme o escopo, volume de entregas e aprovações necessárias. O cronograma é definido após o diagnóstico.",
  },
  {
    question: "O atendimento pelo WhatsApp é automático?",
    answer:
      "Nesta etapa, o contato após o formulário é feito manualmente pelo WhatsApp da Solo Povoado. Automações podem ser avaliadas quando fizerem sentido para o processo.",
  },
  {
    question: "É possível contratar apenas uma solução?",
    answer:
      "Sim. É possível contratar soluções pontuais, como diagnóstico, landing page, tráfego, CRM, automações ou produção audiovisual, conforme a necessidade.",
  },
  {
    question: "Como começa o trabalho?",
    answer:
      "O primeiro passo é preencher o formulário de diagnóstico ou iniciar uma conversa pelo WhatsApp. Depois disso, a necessidade é avaliada e o próximo passo é definido com clareza.",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      {open ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.3">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

function SectionIntro({
  label,
  title,
  text,
  align = "center",
}: {
  label: string;
  title: string;
  text: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 sm:text-sm">
        {label}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">{text}</p>
    </div>
  );
}

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${compact ? "justify-center" : ""}`}>
      <a
        href={tallyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-zinc-950 shadow-[0_18px_60px_rgba(255,122,26,0.28)] transition hover:-translate-y-0.5 hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200 active:translate-y-0"
      >
        Receber diagnóstico gratuito
        <ArrowIcon />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-purple-300/70 hover:bg-purple-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-200 active:translate-y-0"
      >
        Falar no WhatsApp
      </a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-zinc-950/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" onClick={closeMenu} className="flex min-h-11 items-center gap-3 rounded-full pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200" aria-label="Ir para o início">
          <Image
            src="/solo-povoado-logo.jpg"
            alt=""
            width={44}
            height={44}
            priority
            className="h-11 w-11 rounded-2xl border border-white/10 object-cover shadow-lg shadow-purple-950/40"
          />
          <span className="text-sm font-bold text-white sm:text-base">Solo Povoado</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-zinc-300 transition hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={tallyUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
          >
            Receber diagnóstico
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-zinc-950/96 px-4 pb-4 transition md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 pt-3" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-zinc-100 transition hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href={tallyUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
          >
            Receber diagnóstico
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-label="Fluxo comercial conectado">
      <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-purple-500/20 to-transparent blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.07] p-4 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative rounded-[1.25rem] border border-white/10 bg-zinc-950/78 p-4 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                Processo comercial
              </p>
              <p className="mt-1 text-sm text-zinc-400">Marketing + atendimento + organização</p>
            </div>
            <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-200">
              claro
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {flowItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.055] p-4 transition hover:-translate-y-0.5 hover:border-orange-300/45"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-orange-400/12 text-sm font-black text-orange-200 ring-1 ring-orange-300/20">
                    {index + 1}
                  </span>
                  <span className="rounded-full border border-purple-300/20 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-purple-200">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4">
            <p className="text-sm font-semibold text-orange-100">
              Cada etapa tem uma função: atrair, converter, atender, organizar e retomar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SolutionIcon({ index }: { index: number }) {
  const paths = [
    "M5 17c5-1 8-4 10-10m-8 4h8v8",
    "M4 7h16M6 11h12M8 15h8M10 19h4",
    "M7 8h10v8H7zM4 12h3m10 0h3M12 5v3m0 8v3",
    "M12 3l7 4v10l-7 4-7-4V7l7-4Zm0 6v6",
  ];

  return (
    <svg aria-hidden="true" className="h-6 w-6 text-orange-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[index % paths.length]} />
    </svg>
  );
}

function SolutionCard({ solution, index }: { solution: (typeof solutions)[number]; index: number }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/15 transition hover:-translate-y-1 hover:border-orange-300/45 hover:bg-white/[0.075]">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-400/12 ring-1 ring-orange-300/20">
        <SolutionIcon index={index} />
      </div>
      <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
      <p className="mt-3 leading-7 text-zinc-300">{solution.description}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {solution.includes.map((item) => (
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
        className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-zinc-950/50 px-5 py-3 text-sm font-bold text-white transition hover:border-orange-300/60 hover:bg-orange-400/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
      >
        Entender minha necessidade
        <ArrowIcon />
      </a>
    </article>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <article
      className={`relative flex h-full flex-col rounded-3xl border p-6 shadow-2xl shadow-black/20 ${
        plan.recommended
          ? "border-orange-300/70 bg-gradient-to-br from-orange-500/20 via-white/[0.08] to-purple-500/18"
          : "border-white/10 bg-white/[0.055]"
      }`}
    >
      {plan.recommended ? (
        <span className="mb-5 w-fit rounded-full bg-orange-400 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-zinc-950">
          Mais indicado
        </span>
      ) : null}
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-purple-200">{plan.subtitle}</p>
      <h3 className="mt-2 text-3xl font-black text-white">{plan.name}</h3>
      <p className="mt-4 text-2xl font-black leading-tight text-orange-200">{plan.price}</p>
      <p className="mt-5 text-sm font-semibold text-zinc-100">Para quem é</p>
      <p className="mt-2 leading-7 text-zinc-300">{plan.forWho}</p>
      <p className="mt-5 text-sm font-semibold text-zinc-100">Objetivo principal</p>
      <p className="mt-2 leading-7 text-zinc-300">{plan.objective}</p>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-200">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/38 p-3 text-sm leading-6 text-zinc-300">
        {plan.media}
      </p>
      <a
        href={tallyUrl}
        target="_blank"
        rel="noreferrer"
        className={`mt-7 inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200 ${
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

function FaqItem({ faq }: { faq: (typeof faqs)[number] }) {
  const [open, setOpen] = useState(false);
  const id = faq.question.toLowerCase().replace(/\W+/g, "-");

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055]">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-5 text-left text-base font-bold text-white transition hover:bg-white/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200 sm:px-6"
        >
          <span>{faq.question}</span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-orange-200">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>
      <div id={id} hidden={!open} className="px-5 pb-5 sm:px-6">
        <p className="leading-7 text-zinc-300">{faq.answer}</p>
      </div>
    </div>
  );
}

function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Solo Povoado",
    url: siteUrl,
    description:
      "Estratégia, marketing, landing pages, atendimento e automação para pequenas empresas organizarem oportunidades e processos comerciais.",
    areaServed: "Brasil",
    serviceType: [
      "Marketing digital",
      "Landing pages",
      "Gestão de redes sociais",
      "Tráfego pago",
      "CRM",
      "Automação",
      "Inteligência artificial aplicada a processos",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Schema />
      <Header />

      <main className="min-h-screen overflow-hidden pt-[68px]">
        <section id="top" className="relative px-4 pb-18 pt-12 sm:px-5 md:px-8 md:pb-24 md:pt-20">
          <div className="absolute inset-x-0 top-24 -z-10 mx-auto h-72 max-w-5xl rounded-full bg-purple-600/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="fade-in-section">
              <p className="mb-5 inline-flex rounded-full border border-orange-300/30 bg-orange-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-200 sm:text-sm">
                Marketing, automação e tecnologia
              </p>
              <h1 className="max-w-4xl text-balance text-4xl font-black leading-[0.98] text-white sm:text-5xl md:text-7xl">
                Pare de perder oportunidades por falta de um processo comercial organizado.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 md:text-xl">
                A Solo Povoado conecta presença digital, campanhas, atendimento e automação para ajudar pequenas empresas a transformar interesse em oportunidades reais de venda.
              </p>
              <div className="mt-8">
                <CtaButtons />
              </div>
              <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400">
                Diagnóstico inicial para entender os principais gargalos de marketing, atendimento e vendas do seu negócio.
              </p>
            </div>

            <div className="fade-in-section">
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.035] px-4 py-16 sm:px-5 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Problema"
              title="Seu marketing gera movimento ou apenas mais tarefas?"
              text="Quando divulgação, atendimento e acompanhamento não trabalham juntos, boas oportunidades se perdem no caminho."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {problems.map((item, index) => (
                <article key={item} className="fade-in-section rounded-3xl border border-white/10 bg-zinc-950/48 p-6">
                  <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-400/12 text-sm font-black text-purple-100 ring-1 ring-purple-300/20">
                    {index + 1}
                  </span>
                  <p className="text-lg font-semibold leading-7 text-white">{item}</p>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-3xl rounded-3xl border border-orange-300/20 bg-orange-400/10 p-5 text-center text-lg font-semibold leading-8 text-orange-50">
              A Solo Povoado organiza esses pontos como partes de um mesmo processo.
            </p>
          </div>
        </section>

        <section className="relative px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="absolute right-0 top-10 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Jornada organizada"
              title="Do primeiro contato ao próximo passo comercial."
              text="Organizamos os pontos da jornada para que cada canal tenha uma função clara."
            />
            <div className="relative grid gap-4 lg:grid-cols-5">
              <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-orange-300/20 via-purple-300/30 to-orange-300/20 lg:block" />
              {journey.map((item, index) => (
                <article key={item.title} className="fade-in-section relative rounded-3xl border border-white/10 bg-zinc-950/72 p-6 shadow-2xl shadow-black/15">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-sm font-black text-zinc-950">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="border-y border-white/10 bg-zinc-950/52 px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Como funciona"
              title="Começamos pelo problema mais importante, não pela ferramenta mais cara."
              text="O trabalho parte do diagnóstico e avança com prioridade, implantação e acompanhamento."
            />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                  <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-zinc-950">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{step.text}</p>
                </article>
              ))}
            </div>
            <p className="mt-8 rounded-3xl border border-white/10 bg-white/[0.055] p-5 text-center leading-7 text-zinc-200">
              Cada projeto é adaptado ao estágio e à capacidade operacional do negócio.
            </p>
          </div>
        </section>

        <section id="solucoes" className="px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Soluções"
              title="Quatro áreas conectadas para organizar marketing, atendimento e vendas."
              text="Em vez de tratar posts, anúncios, sites e automações como peças soltas, a Solo Povoado combina o que faz sentido para o momento do negócio."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {solutions.map((solution, index) => (
                <SolutionCard key={solution.title} solution={solution} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.035] px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Comparativo"
              title="Mais conexão entre as ações. Menos improviso na operação."
              text="A diferença está em fazer cada iniciativa conversar com o próximo passo comercial."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-zinc-950/55 p-6">
                <h3 className="text-2xl font-bold text-white">Operação desconectada</h3>
                <ul className="mt-6 space-y-3">
                  {comparison.disconnected.map((item) => (
                    <li key={item} className="flex gap-3 text-zinc-300">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
              <article className="rounded-3xl border border-orange-300/35 bg-gradient-to-br from-orange-500/16 via-white/[0.06] to-purple-500/16 p-6">
                <h3 className="text-2xl font-bold text-white">Operação organizada</h3>
                <ul className="mt-6 space-y-3">
                  {comparison.organized.map((item) => (
                    <li key={item} className="flex gap-3 text-zinc-100">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Aplicações"
              title="Como isso pode funcionar na prática."
              text="Exemplos de aplicação para visualizar estruturas possíveis, sem prometer números ou resultados garantidos."
            />
            <div className="grid gap-4 lg:grid-cols-3">
              {examples.map((example) => (
                <article key={example.title} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                    Exemplo de aplicação
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{example.title}</h3>
                  <p className="mt-4 rounded-2xl border border-purple-300/20 bg-purple-400/10 p-4 text-sm font-semibold leading-6 text-purple-100">
                    {example.flow}
                  </p>
                  <div className="mt-5 space-y-4 text-sm leading-6 text-zinc-300">
                    <p><strong className="text-white">Problema inicial:</strong> {example.problem}</p>
                    <p><strong className="text-white">Estrutura recomendada:</strong> {example.structure}</p>
                    <p><strong className="text-white">Possível ganho operacional:</strong> {example.gain}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="relative border-y border-white/10 bg-zinc-950/55 px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-6xl bg-orange-500/10 blur-3xl" />
          <div className="mx-auto max-w-7xl">
            <SectionIntro
              label="Planos"
              title="Planos para cada fase do seu negócio."
              text="Os planos mantêm os valores atuais e organizam escopo, objetivo e custos importantes com mais clareza."
            />
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <PlanCard key={plan.name} plan={plan} />
              ))}
            </div>
            <p className="mt-6 text-center text-sm leading-6 text-zinc-400">
              Valores podem variar conforme escopo, volume e necessidades do projeto.
            </p>
          </div>
        </section>

        <section className="px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 md:p-10 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300 sm:text-sm">
                Sobre a Solo Povoado
              </p>
              <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
                Estratégia, criatividade e tecnologia trabalhando no mesmo processo.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-zinc-300 md:text-lg">
                <p>
                  A Solo Povoado é uma operação independente criada para ajudar pequenas empresas a organizar marketing, atendimento e tecnologia de maneira prática.
                </p>
                <p>
                  Em vez de indicar ferramentas sem contexto, analisamos o momento do negócio, identificamos prioridades e construímos uma estrutura possível de operar.
                </p>
                <p>
                  Cada projeto combina estratégia e execução, respeitando a identidade, o orçamento e a realidade de cada cliente.
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              {principles.map((principle) => (
                <div key={principle} className="rounded-3xl border border-white/10 bg-zinc-950/45 p-5">
                  <p className="flex gap-3 text-lg font-bold leading-7 text-white">
                    <CheckIcon />
                    <span>{principle}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="perguntas" className="border-y border-white/10 bg-white/[0.035] px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto max-w-4xl">
            <SectionIntro
              label="Perguntas"
              title="Perguntas frequentes"
              text="Respostas diretas para entender o processo antes de solicitar o diagnóstico."
            />
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-18 sm:px-5 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-orange-300/20 bg-gradient-to-br from-orange-500/18 via-white/[0.07] to-purple-500/20 p-8 text-center shadow-2xl shadow-black/30 md:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-orange-200 sm:text-sm">
              Próximo passo
            </p>
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-black leading-tight text-white md:text-5xl">
              Seu negócio não precisa começar por mais uma ferramenta.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-200">
              Precisa identificar onde as oportunidades estão se perdendo e qual é o próximo passo mais útil para organizar a operação.
            </p>
            <div className="mt-8">
              <CtaButtons compact />
            </div>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-zinc-300">
              Preencha o formulário e conte brevemente sobre o momento do seu negócio.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 pb-24 pt-10 sm:px-5 md:px-8 md:pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <a href="#top" className="inline-flex items-center gap-3 rounded-full pr-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200" aria-label="Voltar para o início">
              <Image
                src="/solo-povoado-logo.jpg"
                alt=""
                width={42}
                height={42}
                className="h-10 w-10 rounded-2xl border border-white/10 object-cover"
              />
              <span className="font-bold text-white">Solo Povoado</span>
            </a>
            <p className="mt-4 max-w-xl leading-7 text-zinc-400">
              Marketing, atendimento, automação e tecnologia conectados para organizar oportunidades comerciais de pequenas empresas.
            </p>
            <p className="mt-5 text-sm text-zinc-500">
              © {currentYear} Solo Povoado. Todos os direitos reservados.
            </p>
          </div>

          <nav className="grid gap-3 sm:grid-cols-2" aria-label="Links do rodapé">
            <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-orange-300/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200" href={tallyUrl} target="_blank" rel="noreferrer">
              Formulário de diagnóstico
            </a>
            <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-orange-300/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200" href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            {instagramUrl ? (
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-orange-300/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200" href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram
              </a>
            ) : (
              <span className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold text-zinc-500">
                Instagram a definir
              </span>
            )}
            <span className="rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold text-zinc-500">
              Política de privacidade a definir
            </span>
          </nav>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-zinc-950/90 p-3 backdrop-blur-xl md:hidden">
        <a
          href={tallyUrl}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-black text-zinc-950 shadow-[0_12px_40px_rgba(255,122,26,0.26)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-200"
        >
          Receber diagnóstico gratuito
        </a>
      </div>
    </>
  );
}
