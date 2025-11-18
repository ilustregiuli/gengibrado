# 🍪 Gengibrado - Loja de Biscoitos Artesanais

Landing page de conversão (one-page) para a loja de biscoitos artesanais **Gengibrado**, desenvolvida com Next.js 16, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- **Next.js 16** - Framework React
- **Tailwind CSS** - Estilização
- **next-themes** - Suporte a dark mode
- **react-icons** - Ícones
- **framer-motion** - Animações (opcional)

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🏗️ Build para Produção

```bash
npm run build
```

O build gera uma pasta `out/` com arquivos estáticos prontos para deploy.

## 📁 Estrutura do Projeto

```
/
├── components/
│   ├── ui/          # Componentes de UI reutilizáveis
│   └── layout/      # Componentes de layout
├── content/
│   └── settings/    # Configurações em JSON
├── lib/             # Utilitários e helpers
├── pages/           # Páginas Next.js
├── public/          # Arquivos estáticos (imagens, etc.)
└── styles/          # Estilos globais
```

## 🎨 Personalização

Todo o conteúdo do site pode ser personalizado através dos arquivos JSON em `content/settings/`:

- `business.json` - Informações da marca
- `general.json` - Configurações gerais e SEO
- `theme.json` - Cores e tema
- `sections.json` - Conteúdo das seções

## 📸 Imagens Necessárias

Adicione as seguintes imagens na pasta `public/`:

- `logo.png` - Logo da marca
- `og-image.png` - Imagem para Open Graph
- `cookies-hero.png` - Imagem do hero
- `about-biscoitos.png` - Imagem da seção sobre
- `produto-1.jpg` - Imagem do produto Clássicos
- `produto-2.jpg` - Imagem do produto Gourmet
- `produto-3.jpg` - Imagem do produto Zero Açúcar
- `favicon.ico` - Favicon do site

## 🌐 Deploy

O projeto está configurado para export estático (`output: 'export'`), ideal para deploy em:

- **Netlify** (recomendado)
- **Vercel**
- **GitHub Pages**
- Qualquer servidor de arquivos estáticos

## 📝 Licença

Este projeto é privado e pertence à Gengibrado.

