# 📋 Instruções de Uso - Gengibrado

## ✅ Projeto Criado com Sucesso!

O projeto da loja virtual **Gengibrado** foi criado com sucesso. Segue abaixo as próximas etapas:

## 🖼️ Adicionar Imagens

Adicione as seguintes imagens na pasta `public/`:

1. **logo.png** - Logo da marca Gengibrado (recomendado: 200x200px)
2. **og-image.png** - Imagem para compartilhamento em redes sociais (1200x630px)
3. **cookies-hero.png** - Imagem principal do hero (recomendado: 800x600px)
4. **about-biscoitos.png** - Imagem da seção "Sobre" (recomendado: 600x400px)
5. **produto-1.jpg** - Imagem do produto Clássicos (recomendado: 400x300px)
6. **produto-2.jpg** - Imagem do produto Gourmet (recomendado: 400x300px)
7. **produto-3.jpg** - Imagem do produto Zero Açúcar (recomendado: 400x300px)
8. **favicon.ico** - Ícone do site (32x32px)

## ⚙️ Personalizar Conteúdo

Edite os arquivos JSON em `content/settings/` para personalizar:

### `business.json`
- Nome da marca
- Email e telefone
- Links de redes sociais
- Endereço

### `sections.json`
- Textos de todas as seções
- Preços dos produtos
- Depoimentos
- Mensagens de CTA

### `theme.json`
- Cores da marca
- Configurações de header e footer

### `general.json`
- SEO (título, descrição)
- URL do site

## 🚀 Executar o Projeto

```bash
# Instalar dependências (já feito)
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📱 Testar o Site

Após executar `npm run dev`, acesse:
- **http://localhost:3000**

## 🌐 Deploy

O projeto está configurado para export estático. Para fazer deploy:

1. **Netlify** (recomendado):
   - Conecte o repositório
   - Build command: `npm run build`
   - Publish directory: `out`

2. **Vercel**:
   - Conecte o repositório
   - O Vercel detecta automaticamente Next.js

3. **GitHub Pages**:
   - Execute `npm run build`
   - Faça upload da pasta `out/` para o GitHub Pages

## 🎨 Recursos Implementados

✅ Design responsivo (mobile-first)
✅ Dark mode (toggle no header)
✅ SEO otimizado
✅ CRO (Conversão Rate Optimization)
✅ Animações suaves
✅ Top ribbon com mensagem de urgência
✅ Seções: Hero, Sobre, Diferenciais, Preços, Depoimentos, CTA
✅ Links para WhatsApp integrados
✅ Newsletter no footer

## 🔧 Próximos Passos (Opcional)

- [ ] Adicionar imagens reais dos produtos
- [ ] Configurar integração com WhatsApp Business API
- [ ] Adicionar formulário de contato
- [ ] Implementar carrinho de compras (se necessário)
- [ ] Adicionar Google Analytics
- [ ] Configurar domínio personalizado

## 📞 Suporte

Para dúvidas ou ajustes, consulte a documentação do Next.js: https://nextjs.org/docs

