// Dados gerais do site — ponto único de configuração.
export const site = {
  brand: 'Tina Aires',
  fullName: 'Miraltina Aires da Silva',
  tagline: 'Psicopedagogia, Terapia e Desenvolvimento Humano',
  location: 'Porto Nacional · Tocantins',
  locationFull: 'Porto Nacional · Tocantins — Brasil',

  // ⚠️ Número de WhatsApp (formato 55 + DDD + número, só dígitos).
  whatsappNumber: '5563991108064',

  credit: 'Desenvolvido por Gustavo Dev',
  creditUrl: 'https://gustavodev.dev/',
}

// Mensagens de WhatsApp pré-preenchidas por contexto de conversão.
export const whatsappMessages = {
  geral: 'Olá, Tina! Gostaria de mais informações sobre seus atendimentos.',
  palestra: 'Olá, Tina! Gostaria de informações sobre uma palestra.',
  contato: 'Olá, Tina! Gostaria de conversar e agendar um primeiro contato.',
}

// aria-label descritivo dos CTAs de WhatsApp (acessibilidade / SEO), por contexto.
export const whatsappAria = {
  geral: 'Falar com Tina Aires no WhatsApp',
  palestra: 'Falar com Tina Aires no WhatsApp sobre uma palestra',
  contato: 'Falar com Tina Aires no WhatsApp para agendar um atendimento',
}

// Links de navegação da navbar.
export const navLinks = [
  { label: 'Atuação', href: '#areas' },
  { label: 'Palestras', href: '#palestras' },
  { label: 'Contato', href: '#contato' },
]
