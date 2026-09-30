"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Briefcase,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5535999999999";
const PHONE_DISPLAY = "(35) 99999-9999";
const EMAIL_CONTACT = "contato@juliavianadiniz.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/juliavianadiniz.adv/";
const INSTAGRAM_HANDLE = "@juliavianadiniz.adv";
const ADDRESS_STREET = "R. Barros Cobra, n° 667";
const ADDRESS_NEIGHBORHOOD = "Centro";
const ADDRESS_CITY_STATE = "Poços de Caldas - MG, CEP 37701-018";
const FULL_ADDRESS = "R. Barros Cobra, n° 667 - Centro, Poços de Caldas - MG, 37701-018, Brasil";

function getWhatsAppUrl(message?: string) {
  const defaultText =
    "Olá, Dra. Julia Viana Diniz. Gostaria de solicitar uma orientação jurídica especializada.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Julia+Viana+Diniz+Advocacia+Rua+Barros+Cobra+667+Centro+Po%C3%A7os+de+Caldas+MG";

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.04 } },
};

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "previdenciario-maternidade",
    title: "Direito Previdenciário",
    icon: Baby,
    tag: "Salário-Maternidade & INSS",
    summary:
      "Concessão de salário-maternidade (gestantes empregadas, MEI, autônomas ou desempregadas), aposentadorias e reversão de indeferimentos do INSS.",
    details:
      "A proteção aos direitos previdenciários exige análise minuciosa de cada carência e período de contribuição. A Dra. Julia Viana Diniz tem ampla atuação no auxílio e salário-maternidade — inclusive prestando suporte completo mesmo à distância para mães de todo o país —, além de aposentadorias (idade, tempo e especial), benefícios por incapacidade e recursos contra indeferimentos injustos do INSS.",
    topics: [
      "Salário-maternidade para autônomas, MEI, empregadas e desempregadas",
      "Garantia de direitos da gestante e estabilidade provisória",
      "Planejamento previdenciário e contagem de tempo de contribuição",
      "Concessão e restabelecimento de auxílio por incapacidade temporária (auxílio-doença)",
      "Aposentadoria por idade, tempo de contribuição e regras de transição",
      "Reversão de benefícios indeferidos ou cessados pelo INSS",
    ],
    whatsAppText:
      "Olá, Dra. Julia Viana Diniz. Gostaria de uma orientação jurídica em Direito Previdenciário / Salário-Maternidade.",
  },
  {
    id: "familia-sucessoes",
    title: "Família & Sucessões",
    icon: HeartHandshake,
    tag: "Sensibilidade & Firmeza",
    summary:
      "Condução sensível, ágil e resolutiva em inventários em cartório, divórcios, partilhas patrimoniais, pensão alimentícia e guarda de menores.",
    details:
      "Demandas familiares e sucessórias exigem sensibilidade humana ímpar somada a rigor técnico impecável. Atuamos com extrema celeridade na realização de inventários em cartório ou judiciais, divórcios consensuais e litigiosos, partilha de patrimônio, guarda de filhos, fixação e revisão de pensão alimentícia e planejamento sucessório para preservação de bens.",
    topics: [
      "Inventários extrajudiciais rápidos em cartório e inventários judiciais",
      "Divórcio consensual e litigioso com partilha estratégica de bens",
      "Pensão alimentícia (fixação, revisão, exoneração e execução)",
      "Regulamentação de guarda e plano de convivência familiar",
      "Planejamento sucessório, testamentos e doações patrimoniais",
      "Reconhecimento e dissolução de união estável",
    ],
    whatsAppText:
      "Olá, Dra. Julia Viana Diniz. Gostaria de uma orientação jurídica em Direito de Família e Sucessões.",
  },
  {
    id: "trabalhista-emprego",
    title: "Direito do Trabalho",
    icon: Briefcase,
    tag: "Combatividade & Rigor",
    summary:
      "Defesa firme dos direitos do trabalhador e assessoria preventiva para pacificar relações de trabalho e resguardar verbas legais.",
    details:
      "Reconhecida por clientes pela dedicação e alto nível profissional, a atuação da Dra. Julia Viana Diniz combina firmeza combativa e análise detalhada dos fatos e contratos. Protegemos trabalhadores em rescisões indiretas por falta patronal, reversão de demissões por justa causa, horas extras, adicionais legais e assédio moral no ambiente corporativo.",
    topics: [
      "Rescisão indireta por falta grave do empregador (Art. 483 da CLT)",
      "Reversão de demissão por justa causa indevida",
      "Horas extras, intervalos suprimidos e banco de horas ilegal",
      "FGTS não recolhido e recebimento da multa de 40%",
      "Indenizações por assédio moral, perseguição e doenças ocupacionais",
      "Consultoria jurídica preventiva de relações e rotinas de trabalho",
    ],
    whatsAppText:
      "Olá, Dra. Julia Viana Diniz. Gostaria de uma consulta especializada em Direito do Trabalho.",
  },
  {
    id: "civel-contratos",
    title: "Direito Cível & Contratos",
    icon: Scale,
    tag: "Segurança Jurídica",
    summary:
      "Assessoria estratégica na confecção e revisão de contratos civis, responsabilidade civil, indenizações e recuperação patrimonial de créditos.",
    details:
      "Atuação profunda na prevenção e solução de controvérsias civis e contratuais. Da estruturação e auditoria de instrumentos contratuais à cobrança de títulos executivos, reparações por perdas e danos materiais e morais, rescisões e disputas imobiliárias, garantindo estabilidade e proteção ao seu patrimônio.",
    topics: [
      "Elaboração, auditoria de riscos e revisão técnica de contratos",
      "Ações de cobrança, execução de títulos e recuperação de crédito",
      "Responsabilidade civil e indenização por danos materiais e morais",
      "Resolução e rescisão contratual com apuração de perdas e danos",
      "Disputas patrimoniais, posse e propriedade de imóveis",
    ],
    whatsAppText:
      "Olá, Dra. Julia Viana Diniz. Gostaria de uma consulta em Direito Cível e Contratos.",
  },
  {
    id: "consumidor-bancario",
    title: "Consumidor & Bancário",
    icon: Landmark,
    tag: "Soluções Práticas",
    summary:
      "Combate enérgico a arbitrariedades bancárias, fraudes financeiras, golpes de PIX, juros abusivos e negativações no SPC/Serasa.",
    details:
      "Defesa vigorosa contra abusos de instituições financeiras e violações às relações de consumo. Atuação especializada em fraudes digitais, golpes de PIX, empréstimos consignados não solicitados, cobrança de encargos abusivos, inclusão indevida nos cadastros de inadimplentes e ações indenizatórias.",
    topics: [
      "Fraudes financeiras, golpes digitais e transferências indevidas via PIX",
      "Empréstimos consignados fraudulentos e descontos não autorizados",
      "Ação revisional de juros abusivos e tarifas contratuais ilegais",
      "Indenizações por negativação indevida no SPC e Serasa",
      "Reparação civil por danos morais e materiais contra fornecedores",
    ],
    whatsAppText:
      "Olá, Dra. Julia Viana Diniz. Gostaria de uma consulta em Direito do Consumidor e Bancário.",
  },
];

const clientReviews = [
  {
    name: "Giovanna Bernardo",
    reviewsCount: "4 avaliações",
    date: "Há 1 ano",
    highlight: "Alto nível de profissionalismo, clareza e empatia",
    content:
      "Tive o privilégio de ser atendida pela Dra. Julia Diniz e não poderia estar mais satisfeita com o serviço prestado. Desde o primeiro contato, ela demonstrou um alto nível de profissionalismo, clareza e empatia. Sua expertise jurídica é admirável.",
  },
  {
    name: "Isabela Basso",
    reviewsCount: "9 avaliações · 3 fotos",
    date: "Há 1 ano",
    highlight: "Muita dedicação e profissionalismo. Me ajudou de todas as formas!",
    content:
      "Ótima profissional, fui atendida com muita dedicação e profissionalismo. Me ajudou de todas as formas! Recomendo!",
  },
  {
    name: "Lais Silva psi",
    reviewsCount: "2 avaliações",
    date: "Há 2 anos",
    highlight: "Trabalha com muita dedicação, competência e ética",
    content:
      "Ótimo atendimento! A Dra. Júlia é uma excelente profissional, trabalha com muita dedicação, competência e ética. Agradeço pela atenção e recomendo o seu trabalho a todos.",
  },
  {
    name: "Ana clara Neves Loiola",
    reviewsCount: "2 avaliações",
    date: "Há 1 ano",
    highlight: "Tenta resolver seus problemas de todas as maneiras e sempre tem a solução",
    content:
      "Excelente profissional, muito atenciosa e tenta resolver seus problemas de todas maneiras e sempre tem a solução!",
  },
  {
    name: "Dra Patricia Villela",
    reviewsCount: "4 avaliações · 6 fotos",
    date: "Há 2 anos",
    highlight: "Cheguei à Dra. Júlia que resolveu todas as questões que eu precisava!",
    content:
      "Já tinha procurado outros advogados que não conseguiram resolver meu problema e então cheguei à Dra Júlia que resolveu todas as questões que eu precisava! Indico muito! Ótima profissional!!!",
  },
  {
    name: "Leticia dos Santos Carvalho",
    reviewsCount: "1 avaliação · 1 foto",
    date: "Há 1 ano",
    highlight: "Me ajudou muito com o auxílio maternidade, presente mesmo à distância",
    content:
      "Me ajudou muito com o auxílio maternidade, e foi presente todo o tempo mesmo a distância e disposta a cessar todas as minhas dúvidas. Indico muito!!",
  },
  {
    name: "Lucas Messias Ciríaco Silva",
    reviewsCount: "6 avaliações",
    date: "Há 1 ano",
    highlight: "Muito atenciosa e resolveu o meu problema perfeitamente",
    content:
      "A Júlia é muito atenciosa e resolveu o meu problema perfeitamente. Ótima profissional, recomendo a todos!",
  },
  {
    name: "Ana Cláudia Ribeiro",
    reviewsCount: "9 avaliações",
    date: "Há 2 anos",
    highlight: "Competente, ética e qualificada: obtivemos um resultado positivo!",
    content:
      "A Dra. Júlia é uma profissional muito competente, ética e qualificada. Acompanhou meu processo do início ao fim e obtivemos um resultado positivo!",
  },
  {
    name: "Paula Tarbes",
    reviewsCount: "4 avaliações",
    date: "Há 1 ano",
    highlight: "Super atenciosa, prestativa e resolveu o problema prontamente",
    content:
      "A Dra Julia foi super atenciosa, prestativa, resolveu o meu problema prontamente. Super indico.",
  },
  {
    name: "Cmegale",
    reviewsCount: "51 avaliações",
    date: "Há 2 anos",
    highlight: "Grande conhecimento técnico e ao mesmo tempo muito humana",
    content:
      "Excelente profissional. Atenciosa, com grande conhecimento técnico e ao mesmo tempo muito humana. Recomendo!",
  },
  {
    name: "Lucas Flauzino",
    reviewsCount: "3 avaliações",
    date: "Há 1 ano",
    highlight: "Muito empenhada nas causas em que atua e sempre dedicada!",
    content:
      "Dra. Júlia é uma excelente profissional. Muito empenhada nas causas em que atua e sempre dedicada! 👏🏻",
  },
  {
    name: "Matheus Borini",
    reviewsCount: "Local Guide · 11 avaliações",
    date: "Há 1 ano",
    highlight: "Instruções claras e eficientes em todas as etapas",
    content:
      "Muito bom! Fui atendido com muita atenção e cordialidade, recebi instruções claras e eficientes em todas as etapas que necessitei... Recomendo!",
  },
  {
    name: "Daniele Caetano",
    reviewsCount: "5 avaliações",
    date: "Há 1 ano",
    highlight: "Profissionalismo de ponta! Advogada de valores e clareza admirável",
    content:
      "Profissionalismo de ponta! Excelência no trabalho! É uma advogada de valores e princípios, competente, dedicada e de uma clareza admirável. Super indico!",
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>{eyebrow}</p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/75"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);

  useEffect(() => {
    if (!activeArea) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#12100e]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[95px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[105px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Julia Viana Diniz Advocacia — Início"
              onClick={closeMenu}
              className="flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <Image
                src="/logo-white.png"
                width={540}
                height={180}
                alt="Julia Viana Diniz Advocacia — Poços de Caldas"
                priority
                className="h-12 w-auto object-contain sm:h-[64px]"
              />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-8 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação
              </a>
              <a className="nav-link" href="#filosofia">
                Filosofia
              </a>
              <a className="nav-link" href="#artigos">
                Orientações
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Dra. Julia Viana Diniz"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-brand-300 transition-all hover:border-brand-400 hover:bg-white/10 hover:text-white"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Dra. Julia Viana Diniz"
                className="grid size-10 place-items-center rounded-full border border-white/20 text-brand-300 transition-all hover:border-brand-400 hover:bg-white/10 hover:text-white"
              >
                <WhatsAppIcon size={18} />
              </a>
              <GlowingButton
                href={getWhatsAppUrl()}
                target="_blank"
                size="sm"
                className="rounded-full shadow-sm"
              >
                Consulta no WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-[#12100e] px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["A Advogada", "#sobre"],
                    ["Áreas de Atuação", "#atuacao"],
                    ["Filosofia & Valores", "#filosofia"],
                    ["Orientações Jurídicas", "#artigos"],
                    ["Avaliações no Google (5,0 ★)", "#avaliacoes"],
                    ["Contato & Sede", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm font-medium text-white/80 hover:text-brand-300"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="mt-2 flex gap-3">
                    <a
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 text-xs font-semibold uppercase tracking-wider text-white"
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <InstagramIcon size={16} /> Instagram
                    </a>
                    <a
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-700 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-brand-800"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                    >
                      <WhatsAppIcon size={16} /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          <div className="pointer-events-none absolute -right-32 top-8 -z-10 size-[36rem] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-10 -z-10 size-[28rem] rounded-full bg-brand-100/50 blur-3xl" />

          <div className="mx-auto grid min-h-[660px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.p variants={reveal} className="eyebrow mb-6">
                <span className="size-2 rounded-full bg-brand-700" />
                {ADDRESS_STREET} · {ADDRESS_NEIGHBORHOOD} · Poços de Caldas - MG
              </motion.p>

              <motion.h1
                variants={reveal}
                className="max-w-[760px] font-serif text-[3.1rem] leading-[1.0] tracking-[-0.04em] text-ink sm:text-6xl lg:text-[4.75rem]"
              >
                Antes de dizer se existe um direito, é preciso{" "}
                <span className="italic text-brand-700 font-serif">
                  conhecer a sua história.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Uma orientação responsável começa ouvindo antes de responder.
                Assessoria jurídica individualizada e acolhedora conduzida pela
                Dra. Julia Viana Diniz com atuação técnica em Direito Previdenciário
                (Salário-Maternidade e Benefícios do INSS), Família e Sucessões, e
                Direito do Trabalho — atendimento presencial no Centro de Poços de Caldas
                e digital em todo o Brasil.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Falar com a Dra. Julia
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-ink transition-colors hover:text-brand-700"
                >
                  Conhecer áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  <Star size={15} className="fill-brand-700 text-brand-700" />{" "}
                  5,0 estrelas no Google (36 avaliações verificadas)
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <ShieldCheck size={16} className="text-brand-700" /> Atendimento
                  individualizado e seguro
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <MapPin size={15} className="text-brand-700" /> Presencial em
                  Poços de Caldas e digital nacional
                </span>
              </motion.div>
            </motion.div>

            {/* Hero Image Presentation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[480px] lg:ml-auto lg:mr-3"
            >
              {/* Luxury ambient backlight aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-700/20 via-brand-400/10 to-transparent blur-2xl -z-10" />

              {/* Architectural gold outer hairline frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-brand-700/30 pointer-events-none" />

              {/* Main portrait executive card */}
              <div className="relative aspect-[0.76] overflow-hidden rounded-2xl bg-[#14110e] shadow-2xl ring-1 ring-black/10">
                <Image
                  src="/julia-viana-hero.jpg"
                  alt="Dra. Julia Viana Diniz — Julia Viana Diniz Advocacia"
                  fill
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                  className="object-cover object-[50%_12%]"
                />

                {/* Gradient vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Executive name overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-7 sm:left-7 sm:right-7">
                  <div>
                    <p className="font-serif text-2xl font-normal tracking-wide text-white">
                      Dra. Julia Viana Diniz
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-brand-300">
                      Julia Viana Diniz Advocacia · Poços de Caldas
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-300/40 bg-black/60 text-brand-300 backdrop-blur-md">
                    <Scale size={18} />
                  </span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-3 top-[10%] rounded-full border border-brand-700/30 bg-ivory/95 px-4 py-2.5 text-[10px] font-bold tracking-[0.14em] text-brand-800 shadow-xl backdrop-blur-md sm:-left-6 sm:px-5">
                ESCUTA ATIVA & RIGOR TÉCNICO
              </div>

              <div className="absolute -right-3 bottom-[18%] rounded-2xl border border-brand-700/30 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:-right-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <Star size={15} className="fill-brand-700" />
                  <span className="font-serif text-lg font-bold text-ink">
                    5,0 / 5,0
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-ink-soft">
                  36 Avaliações no Google
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlights Banner */}
        <section
          aria-label="Credenciais e Destaques"
          className="border-b border-ink/10 bg-white/70"
        >
          <div className="mx-auto grid max-w-7xl gap-7 px-5 py-8 sm:grid-cols-4 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["5,0 ★", "classificação máxima com 36 avaliações no Google"],
              ["Poços de Caldas", "Rua Barros Cobra, 667 · Centro"],
              ["Escuta Ativa", "entender o contexto antes de responder"],
              ["Brasil Inteiro", "atendimento presencial e 100% digital"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-3xl font-semibold text-brand-700">
                  {value}
                </span>
                <span className="max-w-[165px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre a Dra. Julia Viana Diniz */}
        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-20 lg:px-12">
            {/* Studio Portrait Presentation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[520px]"
            >
              <div className="relative aspect-[0.88] overflow-hidden rounded-[2px] bg-[#e8e2d8] shadow-card">
                <Image
                  src="/julia-viana-sobre.jpg"
                  alt="Dra. Julia Viana Diniz — Julia Viana Diniz Advocacia"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-[50%_15%]"
                />
              </div>

              {/* Authority card */}
              <div className="absolute -bottom-6 right-3 max-w-[310px] border-l-2 border-brand-700 bg-ivory px-5 py-4 shadow-card sm:-right-6 sm:px-6">
                <div className="flex items-center gap-2 text-brand-700">
                  <ShieldCheck size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em]">
                    Julia Viana Diniz Advocacia
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-ink">
                  Centro de Poços de Caldas - MG
                </p>
                <p className="mt-1 text-[11px] leading-4 text-ink-soft">
                  Compromisso ético, acolhimento humano e combate dedicado a cada
                  caso e família atendida.
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l border-t border-brand-700/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Text description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                TRAJETÓRIA & COMPROMISSO
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.09] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Uma advocacia que une{" "}
                <span className="italic text-brand-700">
                  profundidade técnica
                </span>{" "}
                e sensibilidade humana.
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                A <strong className="text-ink">Dra. Julia Viana Diniz</strong>{" "}
                consolida sua prática sob uma convicção sólida: nenhuma resposta
                pronta serve para todas as realidades. Cada trajetória de vida, relação de
                trabalho ou período de contribuição possui particularidades que
                transformam completamente a análise e a estratégia jurídica.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com escritório sediado na Rua Barros Cobra, no Centro de Poços de Caldas,
                e atendimento digital para todo o Brasil, a Dra. Julia é amplamente
                reconhecida por clientes pela empatia, clareza didática nas orientações e
                acompanhamento presente em cada etapa — especialmente nas esferas de
                Direito Previdenciário (com destaque no auxílio e salário-maternidade),
                Direito de Família e Sucessões, e Direito do Trabalho.
              </motion.p>

              <motion.div
                variants={reveal}
                className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2"
              >
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Escuta sensível antes de qualquer resposta técnica</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Transparência total e comunicação sem juridiquês</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Sede na Rua Barros Cobra, 667 - Centro</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-ink font-medium">
                  <CheckCircle2 size={16} className="text-brand-700 shrink-0" />
                  <span>Atendimento digital seguro e próximo em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-9 flex flex-wrap gap-4 items-center">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Julia Viana Diniz. Gostaria de entender como o escritório pode me orientar no meu caso."
                  )}
                  target="_blank"
                  size="md"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={16} /> Agendar consulta com a Dra. Julia
                </GlowingButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-brand-800 hover:text-brand-700 transition-colors"
                >
                  <InstagramIcon size={16} /> {INSTAGRAM_HANDLE}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO ESTRATÉGICA"
                description="Atuação jurídica aprofundada para proteger sua família, sua maternidade, seu trabalho e seu patrimônio com dedicação exclusiva."
              >
                Segurança jurídica e acolhimento nos{" "}
                <span className="italic text-brand-700">
                  momentos mais decisivos.
                </span>
              </Heading>
              <p className="max-w-[260px] pb-1 text-xs leading-6 text-ink-soft">
                Toque em uma área para visualizar os temas atendidos e consultar
                diretamente a Dra. Julia.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group flex min-h-[350px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-700/40 hover:shadow-card sm:p-7"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                        <Icon size={22} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-700/50">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-brand-800">
                        {area.tag}
                      </span>
                      <h3 className="mt-3 font-serif text-[1.55rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800 hover:text-brand-700 cursor-pointer"
                    >
                      Ver detalhes e temas{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Filosofia & Manifesto */}
        <section
          id="filosofia"
          className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="pointer-events-none absolute -left-28 top-1/4 size-96 rounded-full bg-brand-700/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-1/4 size-96 rounded-full bg-brand-800/15 blur-3xl" />

          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 items-center">
            <div>
              <Heading
                eyebrow="NOSSO MANIFESTO E COMPROMISSO"
                light
                description="É assim que uma orientação responsável começa: ouvindo com atenção antes de responder. Conhecer a história de quem nos procura é a base para uma defesa jurídica sólida e vitoriosa."
              >
                A precisão jurídica aliada ao{" "}
                <span className="italic text-brand-200">
                  respeito que sua história merece.
                </span>
              </Heading>

              <div className="mt-8 border-l-2 border-brand-400 pl-6 py-2">
                <p className="font-serif text-xl sm:text-2xl italic leading-relaxed text-white/90">
                  &ldquo;Antes de dizer se existe um direito, eu preciso conhecer a
                  história dessa mãe, desse trabalhador e dessa família.&rdquo;
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-brand-300 font-semibold">
                  — Dra. Julia Viana Diniz
                </p>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Escuta sensível e compreensão integral",
                  "Nem sempre uma resposta pronta serve para todas as situações. Histórico de trabalho, contribuições e particularidades familiares podem transformar completamente a análise.",
                ],
                [
                  "02",
                  "Acompanhamento presente do início ao fim",
                  "Como ressaltam nossos clientes em avaliações públicas, atuamos com suporte próximo, tirando dúvidas e mantendo presença constante, inclusive à distância em atendimentos on-line.",
                ],
                [
                  "03",
                  "Soluções práticas e clareza sem juridiquês",
                  "Você compreende com transparência cada etapa, os prazos reais e a melhor estratégia jurídica para alcançar a solução mais justa e vantajosa para sua vida.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-brand-300">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/70">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Informação e Análise Jurídica (Artigos) */}
        <section id="artigos" className="bg-[#eee8e0] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="ANÁLISE & ORIENTAÇÃO JURÍDICA"
                description="Orientações e esclarecimentos práticos da Dra. Julia Viana Diniz sobre direitos previdenciários e trabalhistas em situações reais."
              >
                Esclarecimento de direitos sobre{" "}
                <span className="italic text-brand-700">situações reais.</span>
              </Heading>
              <a
                href={getWhatsAppUrl(
                  "Olá, Dra. Julia. Vi seus conteúdos informativos e gostaria de tirar uma dúvida jurídica sobre minha situação."
                )}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:text-brand-700"
              >
                Tirar uma dúvida jurídica <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="mt-11 grid gap-8 md:grid-cols-2">
              {/* Card 1: Salário-Maternidade & Previdenciário */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-brand-700/20 bg-brand-950 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/40"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#18120d]">
                  <Image
                    src="/artigo-salario-maternidade.webp"
                    alt="Salário-Maternidade e Proteção à Gestante — Dra. Julia Viana Diniz"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-200">
                      Direito Previdenciário & Maternidade
                    </span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl text-white">
                      Salário-Maternidade: Como receber o benefício mesmo desempregada
                      ou como MEI
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      Muitas gestantes acreditam que perderam o direito ao salário-maternidade
                      após o término do contrato de trabalho. Através do período de graça
                      e do cômputo correto de contribuições, é viável resguardar até 120 dias
                      de benefício pago diretamente pela previdência social.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Julia. Gostaria de analisar minha situação sobre salário-maternidade ou benefício previdenciário."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-200 transition-colors hover:text-white"
                  >
                    Analisar meu salário-maternidade <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2: Direito do Trabalho / Rescisão Indireta */}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-[2px] border border-brand-700/20 bg-[#1b1511] text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-700/40"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#16100c]">
                  <Image
                    src="/artigo-rescisao-trabalho.webp"
                    alt="Rescisão Indireta da CLT — Dra. Julia Viana Diniz"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <span className="inline-block rounded-full bg-brand-700/35 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-brand-200">
                      Direito do Trabalho & CLT
                    </span>
                    <h3 className="mt-4 font-serif text-2xl leading-snug sm:text-3xl text-white">
                      Rescisão Indireta: Quando as faltas do empregador justificam a saída com todos os direitos
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-white/70">
                      Atrasos frequentes de salários, ausência de depósitos do FGTS,
                      sobrecarga excessiva ou humilhações configuram falta grave da empresa
                      (Art. 483 da CLT), autorizando o recebimento de todas as verbas rescisórias,
                      saque do FGTS com 40% e seguro-desemprego.
                    </p>
                  </div>
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Julia. Gostaria de orientações sobre direitos trabalhistas ou rescisão indireta."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-200 transition-colors hover:text-white"
                  >
                    Analisar minha situação trabalhista <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* Avaliações no Google (Depoimentos Reais) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:items-center">
              <div>
                <Heading
                  eyebrow="PROVA SOCIAL & AVALIAÇÕES REAIS"
                  description="A reputação da Dra. Julia Viana Diniz é construída dia a dia com dedicação, ética e empatia genuína. Veja o relato espontâneo de clientes que confiaram suas causas ao escritório."
                >
                  Confiança comprovada por quem{" "}
                  <span className="italic text-brand-700">
                    já alcançou seus objetivos.
                  </span>
                </Heading>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b-2 border-brand-700/60 pb-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 hover:border-brand-700 hover:text-brand-700"
                  >
                    Ver perfil e avaliações no Google Maps <ArrowUpRight size={15} />
                  </a>
                </div>

                {/* Rating highlights pills */}
                <div className="mt-9 flex flex-wrap gap-2">
                  {[
                    "Ética e transparência",
                    "Expertise jurídica",
                    "Competência exemplar",
                    "Soluções práticas",
                    "Atendimento humano e acolhedor",
                    "Presença mesmo à distância",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-ivory px-3.5 py-1.5 text-[11px] font-medium text-ink-soft"
                    >
                      <CheckCircle2 size={13} className="text-brand-700" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Public score box */}
              <div className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-brand-700/20 bg-ivory p-8 shadow-card sm:p-10">
                <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/10" />
                <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/10" />

                <div className="relative flex items-center justify-between gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-800">
                    Avaliações Verificadas · Google Maps
                  </span>
                  <div className="flex gap-1 text-brand-700" aria-label="5 estrelas">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star
                        key={index}
                        size={17}
                        fill="currentColor"
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mt-8 flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <span className="font-serif text-7xl font-normal leading-none text-ink sm:text-8xl">
                      5,0
                    </span>
                    <p className="mt-2 text-xs font-semibold text-brand-800">
                      Excelente · Classificação Máxima no Google
                    </p>
                  </div>
                  <div className="pb-1 text-right">
                    <p className="font-serif text-3xl font-semibold text-brand-700">
                      36 avaliações
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
                      100% de avaliações 5 estrelas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Grid - Row 1 */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(0, 4).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Grid - Row 2 */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(4, 8).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-ivory/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonials Grid - Row 3 */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {clientReviews.slice(8, 12).map((review) => (
                <div
                  key={review.name}
                  className="flex flex-col justify-between border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex gap-0.5 text-brand-700">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            size={13}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-ink-soft">
                        {review.date}
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-bold text-brand-800">
                      &ldquo;{review.highlight}&rdquo;
                    </p>

                    <p className="mt-2.5 text-[13px] leading-6 text-ink-soft italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-serif text-base font-semibold text-ink">
                      {review.name}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-ink-soft">
                      {review.reviewsCount} no Google
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contato & Localização */}
        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO & LOCALIZAÇÃO"
                description="Agende seu atendimento presencial no Centro de Poços de Caldas ou consulte-nos de forma 100% digital com rapidez, sigilo e segurança."
              >
                Estamos prontos para{" "}
                <span className="italic text-brand-700">ouvir sua história.</span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl()}
                  target="_blank"
                  size="lg"
                  className="rounded-full shadow-md"
                >
                  <WhatsAppIcon size={17} /> Iniciar conversa no WhatsApp
                </GlowingButton>
                <p className="text-[11px] leading-5 text-ink-soft">
                  Retorno atencioso e individualizado pelo WhatsApp:{" "}
                  <strong className="text-ink">{PHONE_DISPLAY}</strong>.
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-ink-soft">
                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-brand-700" />
                  <span>Segunda a Sexta: 09h às 18h (sob agendamento prévio)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-700" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-700" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="hover:text-brand-700 transition-colors"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="text-brand-700" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-700 transition-colors"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </div>
            </div>

            {/* Address & Office Card */}
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10 shadow-card">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-brand-700" />

              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={22} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-700">
                    Sede do Escritório
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Poços de Caldas · Minas Gerais
                  </p>
                </div>
              </div>

              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                <strong className="text-ink font-semibold">
                  Julia Viana Diniz Advocacia
                </strong>
                <br />
                {ADDRESS_STREET}
                <br />
                {ADDRESS_NEIGHBORHOOD}, {ADDRESS_CITY_STATE}, Brasil
              </address>

              <div className="my-7 h-px bg-ink/10" />

              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Atendimento presencial no Centro e on-line para todo o Brasil
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:bg-brand-50 hover:text-brand-800"
                >
                  Ver no Google Maps <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pre-Footer CTA Strip */}
        <section className="bg-brand-700 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12 shadow-inner">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-200">
                JULIA VIANA DINIZ ADVOCACIA · POÇOS DE CALDAS - MG
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl text-white">
                Pronto para ter sua história ouvida e seus direitos defendidos
                com dedicação exclusiva?
              </h2>
            </div>
            <a
              href={getWhatsAppUrl(
                "Olá, Dra. Julia Viana Diniz. Gostaria de agendar uma consulta inicial para avaliar meu caso."
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-brand-50 hover:shadow-lg"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-950 px-5 py-14 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <div className="inline-flex">
                <Image
                  src="/logo-white.png"
                  width={540}
                  height={180}
                  alt="Julia Viana Diniz Advocacia"
                  className="h-12 w-auto object-contain sm:h-[60px]"
                />
              </div>
              <p className="mt-5 max-w-xs text-xs leading-6 text-white/65">
                Advocacia estratégica, acolhimento humano e dedicação singular a cada
                causa. Sede no Centro de Poços de Caldas - MG e atendimento digital
                em todo o Brasil.
              </p>
              <p className="mt-3 text-[11px] font-semibold text-brand-300">
                Poços de Caldas · Minas Gerais
              </p>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a className="footer-link" href="#inicio">
                  Início
                </a>
                <a className="footer-link" href="#sobre">
                  A Advogada
                </a>
                <a className="footer-link" href="#atuacao">
                  Áreas de Atuação
                </a>
                <a className="footer-link" href="#filosofia">
                  Filosofia & Valores
                </a>
                <a className="footer-link" href="#artigos">
                  Orientações Jurídicas
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato & Localização
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-300">
                Contato Direto
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/70">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <WhatsAppIcon size={15} /> WhatsApp: {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}`}
                  className="footer-link inline-flex items-center gap-2"
                >
                  <Mail size={15} className="shrink-0" /> {EMAIL_CONTACT}
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramIcon size={15} className="shrink-0" /> {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  <span>{FULL_ADDRESS}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-6 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Julia Viana Diniz Advocacia. Todos os direitos reservados.
            </p>
            <p>
              Conteúdo meramente informativo, em estrita observância ao Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Modal de Detalhes da Área de Atuação */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl border border-ink/10 bg-ivory p-7 shadow-2xl sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700 cursor-pointer"
                >
                  <X size={18} />
                </button>

                <p className="eyebrow">ÁREA DE ATUAÇÃO ESTRATÉGICA</p>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-ink sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-800">
                    Principais temas e demandas atendidas:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-ink"
                      >
                        <span className="size-2 rounded-full bg-brand-700 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    className="rounded-full shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta área
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-ink-soft hover:text-ink transition-colors cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
