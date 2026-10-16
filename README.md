# Tina Aires

Site institucional de Tina Aires (Miraltina Aires da Silva), neuropsicopedagoga e terapeuta TRG em Porto Nacional-TO. Landing page única que apresenta a trajetória, as áreas de atuação e as palestras, com o WhatsApp como canal principal de contato.

🔗 **[tinaaires.com.br](https://tinaaires.com.br/)**

## Stack

| Peça | Escolha |
| --- | --- |
| Interface | React 19 |
| Build | Vite 6 |
| Estilo | Tailwind CSS 3 (com PostCSS e Autoprefixer) |
| Tipografia | DM Serif Display e Inter (Google Fonts) |
| Hospedagem | Cloudflare Pages (`_headers` e `_redirects`) |

## Seções

1. **Hero**: nome, posicionamento e CTA para o WhatsApp.
2. **Sobre**: trajetória e credenciais em chips.
3. **Áreas de atuação**: grid de quatro cards (TRG, Neuropsicopedagogia, Perícia Pedagógica, Coordenação em Saúde).
4. **Palestras**: galeria de fotos, formatos atendidos e CTA próprio.
5. **Para quem é**: públicos atendidos.
6. **Contato**: CTA de WhatsApp e localização.
7. **Rodapé**: marca e crédito do desenvolvedor.

## Detalhes de implementação

- **Conteúdo separado dos componentes**: todos os textos, cards, credenciais e links ficam em `src/data/`. O número de WhatsApp é definido em um único lugar (`site.js`).
- **WhatsApp por contexto**: `buildWhatsAppLink` monta o link `wa.me` com mensagem pré-preenchida diferente para cada CTA (geral, palestra, contato), cada um com `aria-label` próprio.
- **Navbar que se esconde ao rolar**: o hook `useScrollDirection` usa `requestAnimationFrame` e ignora oscilações pequenas. A navbar fica transparente no topo e ganha fundo com blur após 40px.
- **Menu mobile via portal**: painel e overlay são renderizados em `document.body` com estilos inline, e o bloqueio de scroll usa `position: fixed` no body (compatível com iOS), restaurando a posição ao fechar.
- **SEO técnico**: meta tags Open Graph e Twitter, JSON-LD (`ProfessionalService` e `Person`), `sitemap.xml`, `robots.txt`, redirecionamento 301 de `www` e cabeçalhos de segurança e cache. A scrollbar nativa é substituída por uma barra de progresso fina.

## Como rodar

```bash
npm install      # instala as dependências
npm run dev      # servidor de desenvolvimento
npm run build    # gera a versão de produção em dist/
npm run preview  # serve o build localmente
```

## Estrutura

```
src/
├── components/   # uma seção ou peça de interface por arquivo
├── data/         # textos, cards, links e configuração do site
├── hooks/        # useScrollDirection (hide-on-scroll da navbar)
└── utils/        # montagem dos links de WhatsApp
public/
├── photos/       # fotos da Tina e das palestras, imagem de preview
├── _headers      # cabeçalhos de segurança e cache (Cloudflare Pages)
├── _redirects    # redirecionamento de www para o domínio raiz
└── ...           # favicons, manifest, sitemap e robots
```

## Autor

Desenvolvido por [Gustavo Barbosa Lima](https://gustavodev.dev).
