# Forte Galpões — Site Oficial

Landing page institucional da **Forte Galpões**, consultoria imobiliária especializada em galpões industriais, empresariais e terrenos em Fortaleza/CE e região.

🌐 **Produção:** [https://fortegalpoes.com](https://fortegalpoes.com)

## Intuito do projeto

O site é o canal digital de captação de clientes da consultoria. Seus objetivos são:

1. **Visibilidade em mecanismos de busca** — SEO completo (metadados, dados estruturados, sitemap) para ranquear em pesquisas por galpões e terrenos na região;
2. **Conversão via WhatsApp** — o principal canal de negócio; o site direciona o visitante para contato direto com o consultor (botão flutuante, links com mensagem pré-preenchida);
3. **Apresentação dos serviços** — consultoria imobiliária e oportunidades de imóveis, com identidade visual própria e animações modernas.

## Stack e arquitetura

Site **100% estático** — sem framework JavaScript, sem etapa de build obrigatória para servir as páginas. A arquitetura prioriza simplicidade, performance e hospedagem barata (cPanel).

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 semântico (páginas independentes) |
| Estilo | Bootstrap 5.2 customizado via SCSS + CSS próprio |
| Interações | JavaScript vanilla + AOS (scroll), Typed.js (digitação), Glide (carrossel) |
| Fonte | Roboto (Google Fonts, com `preconnect` e pesos reduzidos) |
| Analytics | Google tag (gtag.js) |
| Deploy | cPanel via `.cpanel.yml` (cópia direta para `public_html`) |

### Estrutura de diretórios

```
ForteGalpoes/
├── index.html              # Home (hero, sobre, serviços, formulário de contato)
├── about-us.html           # Sobre a empresa
├── services.html           # Detalhamento dos serviços
├── contact-us.html         # Formulário de contato (mailto provisório)
├── robots.txt              # Diretivas de crawling + referência ao sitemap
├── sitemap.xml             # Mapa do site (somente as 4 páginas principais)
├── site.webmanifest        # Manifest PWA básico (nome, ícones, cores)
├── .cpanel.yml             # Pipeline de deploy (cópia para public_html)
└── assets/
    ├── css/
    │   ├── main.min.css    # Bootstrap customizado COMPILADO (não editar à mão)
    │   └── style.css       # Estilos próprios: animações, hero, navbar glass, WhatsApp flutuante
    ├── scss/               # Design system (fonte do main.min.css)
    │   ├── _variables.scss # Tokens: cores da marca, espaçamentos, componentes
    │   ├── _utilities.scss # Utilitários extras
    │   └── main.scss       # Entry point da compilação
    ├── js/scripts.js       # Comportamentos: navbar glass, back-to-top, AOS, Typed, Glide
    ├── library/            # Bibliotecas locais (Bootstrap, AOS, Typed, Glide)
    ├── img/, logo/, media/ # Imagens, logotipos e mídia
    └── php/                # Script do formulário de contato (e-mail)
```

### Páginas órfãs do template

Os arquivos `blog*.html`, `pricing.html`, `terms-conditions.html` e `index-rtl.html` são herança do template original. **Não devem ser removidos** (decisão do projeto), mas carregam `<meta name="robots" content="noindex, nofollow">` e ficam fora do `sitemap.xml` para não interferirem no SEO.

## Design system

Os tokens visuais vivem em [`assets/scss/_variables.scss`](assets/scss/_variables.scss):

| Token | Valor | Uso |
|---|---|---|
| `$primary` | `#FC9E00` (laranja) | Cor da marca, CTAs, destaque do hero |
| `$dark` | `#101d2d` (azul-escuro) | Seções escuras, navbar glass, `theme-color` |
| `$info` | `#FEFE62` (amarelo) | Botões secundários e textos de destaque em fundo escuro |
| `$secondary` | `rgb(51, 65, 85)` | Textos de apoio |
| `$light` | `#f0f2f5` | Fundos claros, rodapé |

Para alterar o tema, edite as variáveis SCSS e recompile (requer [Sass](https://sass-lang.com/install)):

```bash
cd assets/scss
npm install        # instala o Bootstrap 5.2 (dependência da compilação)
npm run build      # compila main.scss → ../css/main.min.css (watch + compressed)
```

> Estilos pontuais (animações, classes utilitárias próprias) ficam em `assets/css/style.css` e **não** exigem compilação.

## SEO e descobribilidade

Cada página principal contém:

- `<title>` e `meta description` únicos, em pt-BR;
- `canonical`, Open Graph (previews no WhatsApp/Facebook/LinkedIn) e Twitter Card;
- Dados estruturados **JSON-LD**: `RealEstateAgent` + `WebSite` na home, `BreadcrumbList`/`ContactPage` nas internas;
- `robots.txt` e `sitemap.xml` na raiz.

Após cada deploy relevante, atualize o `<lastmod>` do `sitemap.xml`. O sitemap deve estar cadastrado no [Google Search Console](https://search.google.com/search-console) e no [Bing Webmaster Tools](https://www.bing.com/webmasters) (que alimenta também o Yahoo).

## Acessibilidade e performance

- `lang="pt-BR"`, hierarquia de headings correta (um `<h1>` por página), `alt` descritivos, skip-link e `aria-label` nos ícones;
- Animações respeitam `prefers-reduced-motion`;
- Imagens de fundo comprimidas (≤ 1920px, JPEG progressivo), `preload` da imagem do hero, `preconnect` para Google Fonts e lazy loading abaixo da dobra.

## Desenvolvimento local

Não há build para rodar o site — basta servir os arquivos estáticos:

```bash
python -m http.server 8765
# http://localhost:8765
```

## Deploy

Push na branch `main` aciona o deploy do cPanel ([`.cpanel.yml`](.cpanel.yml)), que copia **todos os arquivos do repositório** para `public_html`. Atenção: qualquer arquivo commitado vai para produção.

## Contato do negócio

- **Consultor:** Mauricio Mac Dowell
- **WhatsApp:** +55 (85) 98819-7244
- **E-mail:** mamaucar@hotmail.com
