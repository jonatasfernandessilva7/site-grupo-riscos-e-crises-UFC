# Site - Grupo de Riscos e Crises (UFC)

Arquivos criados:
- `index.html` - página principal
- `members.html` - página listando membros (mesmo conteúdo dinâmico)
- `publications.html` - página de publicações
- `achievements.html` - página de conquistas
- `editais.html` - página de editais e chamadas
- `css/styles.css` - estilos com variáveis de cor para fácil customização
- `js/script.js` - dados de exemplo e lógica para popular a página
- `img/` - pasta com imagens de exemplo (placeholders)

Como usar:
1. Abra `index.html` no navegador (ou qualquer outra página).
2. Para alterar cores, edite as variáveis em `css/styles.css` no seletor `:root`.
3. Para editar membros, publicações, conquistas e editais, abra `js/script.js` e altere/adicione objetos nos arrays `members`, `publications`, `achievements` e `editais`.

Navbar:
- Há uma barra de navegação no topo com links para cada página. Todos os arquivos HTML já incluem a mesma navegação; para adicionar novas páginas, crie o arquivo e adicione o link nas `<ul>` de navegação em cada página (ou copie um header existente).

Se desejar, posso substituir as cores pelas cores exatas da sua logo se você me enviar os valores hex (por exemplo `#123456`) ou enviar a imagem da logo com boa qualidade e eu extraio as cores para você.

Parceiros / logos no rodapé:
- As páginas mostram as logos da USP e da UEL no rodapé (links externos). Os arquivos de imagem estão em `img/usp.svg` e `img/uel.svg`.
- Para substituir por versões oficiais, coloque os arquivos com os mesmos nomes na pasta `img/` (ex.: `img/usp.svg`) ou altere os `src` no HTML do rodapé.

Assistente informativo (tela inicial):
- A página inicial agora exibe um widget estático no canto inferior direito com um ícone e uma pequena explicação sobre o grupo. O markup está embutido em `index.html` e o ícone em `img/assistant.svg`.
- Para alterar o texto, edite o HTML em `index.html` dentro da div `.assistant-widget`.
