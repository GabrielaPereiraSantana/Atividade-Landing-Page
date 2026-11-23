# Lumina — Iluminação Inteligente para o Dia a Dia

## Integrantes

- Gabriela Pereira Santana
- Lavinia de Paula Todarelli Faria

## Sobre o produto

O **Lumina** é um produto fictício de iluminação inteligente desenvolvido para tornar os ambientes mais confortáveis, práticos e personalizados. Sua proposta é oferecer uma solução moderna que combine tecnologia, funcionalidade e design, permitindo adaptar a iluminação às necessidades dos usuários.

O produto é direcionado a pessoas que valorizam praticidade, conforto e tecnologia no dia a dia. A landing page apresenta a proposta de valor, os benefícios, os diferenciais e o funcionamento do produto, incentivando o interesse dos visitantes por meio de chamadas para ação.

## Jornada de construção

### Ideia inicial

A ideia surgiu a partir da proposta da atividade acadêmica de criar um produto fictício e desenvolver uma landing page comercial utilizando React.

Buscamos um conceito que permitisse explorar a criatividade, desenvolver uma identidade visual própria e apresentar funcionalidades de maneira clara e atrativa. A iluminação inteligente foi escolhida por combinar tecnologia, praticidade e design, possibilitando a construção de uma experiência visual alinhada à proposta do produto.

A escolha também considerou a possibilidade de organizar a página em seções que apresentassem o produto, seus benefícios, seu funcionamento e sua oferta comercial.

### Pesquisa e referências

A construção da solução foi orientada pelos requisitos da atividade e por princípios de design de interfaces, como hierarquia visual, contraste, consistência, organização do conteúdo e facilidade de navegação.

Foram consideradas características comuns de landing pages comerciais de produtos tecnológicos, como uma seção inicial de destaque, apresentação visual do produto, benefícios organizados em cards, explicação do funcionamento, avaliações demonstrativas, oferta comercial e perguntas frequentes.

A identidade visual foi pensada para transmitir modernidade, conforto e tecnologia, mantendo consistência entre as cores, a tipografia, os componentes e a organização das informações.

## Tecnologias e ferramentas utilizadas

- **React:** desenvolvimento da interface e criação de componentes reutilizáveis.
- **JavaScript:** implementação da lógica e das interações.
- **CSS Modules:** organização e modularização dos estilos.
- **Vite:** ambiente de desenvolvimento e execução da aplicação.
- **Visual Studio Code:** edição e organização dos arquivos.
- **OpenCode:** apoio à implementação, à validação e à revisão do código a partir de instruções.
- **Git e GitHub:** controle de versão e disponibilização do projeto em um repositório público.
- **Accessibility Scanner MCP:** apoio à auditoria automatizada de acessibilidade durante a Atividade 02.
- **Playwright:** testes automatizados de ponta a ponta (end-to-end) durante a Atividade 03.

## Estrutura do projeto (arquitetura MVVM)

```text
src/
  models/          dados do produto (productModel.js)
  viewmodels/      lógica de cada tela (FAQ, produto, compra e favoritos)
  views/components/  componentes visuais (Header, Hero, Pricing, FAQ etc.)
  styles/          estilos globais e variáveis
tests/
  favoritos.spec.js  testes do Playwright
playwright.config.js
playwright-report-ok/      relatório da execução normal
playwright-report-falha/   relatório da execução com falha intencional
```

## Como executar o projeto

```bash
npm install
npm run dev
```

A aplicação abre em `http://127.0.0.1:5173`.

## Uso de inteligência artificial

O OpenCode foi utilizado como ferramenta de apoio ao desenvolvimento da aplicação. Para orientar sua utilização, foram elaborados prompts detalhados com os requisitos da atividade, incluindo a criação do produto fictício, a definição da identidade visual, a organização das seções e a implementação das funcionalidades.

As instruções estabeleceram o uso de React, JavaScript, CSS Modules e arquitetura MVVM, buscando manter o código organizado e separar os dados, a lógica de apresentação e a interface visual.

A IA foi utilizada como apoio à estruturação dos componentes, à organização dos estilos e à implementação das interações no front-end. As sugestões foram orientadas pelos requisitos acadêmicos, pela clareza do código, pela experiência de navegação e pela coerência visual do produto.

Na Atividade 03, o OpenCode (modelo GPT-5.3 Codex, conforme configuração da sessão) foi usado para validar a funcionalidade com o Playwright, revisar os testes, introduzir a falha intencional, executar os testes e reverter a alteração. O modelo específico depende da configuração selecionada em cada sessão.

---

## Evolução da solução — Atividade 02 (Acessibilidade)

Na segunda atividade, a landing page foi revisada com foco em **acessibilidade digital**. O objetivo foi identificar problemas técnicos, implementar melhorias justificadas e validar as alterações com apoio de um servidor MCP (*Model Context Protocol*).

### 1. MCP utilizado e motivo da escolha

Foi selecionado o **Accessibility Scanner MCP** (`accessibility-scanner-mcp`), uma ferramenta especializada em auditorias automatizadas de acessibilidade.

- **Catálogo MCP Servers:** [Página do Accessibility Scanner MCP](https://mcpservers.org/pt-BR/servers/bishop81/accessibility-scanner-mcp)
- **Repositório técnico:** [Bishop81/accessibility-scanner-mcp](https://github.com/Bishop81/accessibility-scanner-mcp)
- **Ferramenta utilizada no processo:** `scan_accessibility`

O MCP foi utilizado para integrar uma ferramenta especializada em acessibilidade ao processo de desenvolvimento. Seu objetivo foi analisar a landing page e identificar problemas que poderiam dificultar a navegação e a utilização do site por pessoas com deficiência ou por usuários que utilizam recursos de acessibilidade.

A ferramenta realiza verificações automatizadas relacionadas às diretrizes **WCAG 2.2, níveis A e AA**. A escolha foi motivada pela relação direta entre a ferramenta e o objetivo da atividade: evoluir uma landing page existente com base em uma análise técnica, e não apenas em avaliações visuais ou suposições.

### 2. Análise inicial

A análise inicial foi realizada no ambiente local `http://127.0.0.1:5173`. De acordo com o relatório registrado durante o desenvolvimento, foram identificados:

- **4 regras com violações**;
- **2 itens que exigiam revisão manual**;
- **39 verificações aprovadas**.

Entre os problemas apontados estavam:

- Contraste insuficiente entre texto e fundo em diversos elementos;
- Uso inadequado de atributos ARIA;
- Problemas na organização de regiões semânticas (*landmarks*);
- Uso de papéis ARIA em elementos;
- Pontos que precisavam de avaliação manual, como contraste sobre gradientes e elementos sociais.

Esses resultados foram utilizados como referência para orientar as alterações no código.

### 3. Melhorias realizadas e sua relevância

Com base na análise e na revisão do código, foram realizadas alterações em `index.html`, `src/App.jsx`, `src/styles/global.css` e em componentes como cabeçalho, rodapé, hero, FAQ, preços, CTA, modal e formulário.

As principais mudanças registradas foram:

- **Navegação por teclado:** implementação de um link para pular diretamente ao conteúdo principal (*skip link*), facilitando a navegação sem mouse.
- **Foco visível:** inclusão de estilos `:focus-visible` para indicar visualmente qual elemento está selecionado durante a navegação por teclado.
- **Semântica e estrutura:** ajustes em elementos HTML e atributos ARIA, além da identificação da área principal com `id="main-content"`.
- **Formulários e componentes interativos:** melhorias em atributos relacionados à acessibilidade, como `aria-required` e `aria-busy`, além de ajustes nos tipos de botões.
- **Elementos decorativos:** ajustes em SVGs decorativos para evitar que sejam interpretados desnecessariamente por tecnologias assistivas.
- **Preferências de movimento:** implementação de suporte à configuração `prefers-reduced-motion`, respeitando usuários que preferem reduzir animações.
- **Metadados e idioma:** definição do idioma da página como `pt-BR` e ajustes no título e na descrição.

Essas alterações tornam a navegação mais compreensível e previsível para diferentes usuários, além de contribuir para a manutenção e a qualidade geral da interface. Algumas melhorias atuam principalmente no comportamento com teclado e na interpretação por tecnologias assistivas, sem alterar significativamente a aparência normal da página.

### 4. Utilização do MCP e avaliação dos resultados

A utilização do MCP ocorreu em um ciclo de análise e melhoria:

1. **Auditoria inicial:** a página foi analisada com a ferramenta `scan_accessibility`.
2. **Interpretação dos resultados:** os problemas apontados foram revisados para identificar quais partes do código precisavam de ajustes.
3. **Implementação:** foram realizadas alterações no HTML, nos componentes React e nos estilos CSS.
4. **Nova análise:** a página foi verificada novamente para comparar os resultados antes e depois das mudanças.
5. **Validação da compilação:** foi executado o comando `npm run build`, que foi concluído com sucesso.

De acordo com o relatório gerado durante o desenvolvimento, a pontuação passou de **82 para 88 pontos**, e os problemas relacionados ao critério *bypass blocks* foram corrigidos.

| Evidência | Resultado relatado |
|---|---|
| Análise inicial | 82 pontos |
| Análise após as melhorias | 88 pontos |
| Problemas de *bypass blocks* | Corrigidos |
| Compilação do projeto | Concluída com sucesso (`npm run build`) |
| Pendências identificadas | Estrutura de títulos e regiões de status |
| Testes manuais | Ainda precisam ser documentados |

Os resultados indicam uma evolução nas verificações realizadas, mas a pontuação não deve ser interpretada como garantia de conformidade integral com as WCAG. A análise posterior ainda apontou questões relacionadas à estrutura de títulos e às regiões de status.

### 5. Limitações e evidências

Verificações automatizadas não conseguem avaliar completamente a clareza do conteúdo, a experiência real de navegação ou todos os comportamentos de componentes interativos. Por isso, a validação deve ser complementada com testes manuais (navegação por teclado, modal, formulários, hierarquia de títulos, contraste contextual e leitores de tela).

Os arquivos das auditorias estão na raiz do repositório: `audit-initial-static-dev.json`, `audit-initial-static-dist.json`, `audit-post-static-dev.json` e `audit-post-static-dist.json`.

---

## Evolução da solução — Atividade 03 (Favoritos + testes com Playwright)

Na terceira atividade, a landing page recebeu uma nova funcionalidade, validada com testes automatizados de ponta a ponta usando o **Playwright** com apoio de inteligência artificial (OpenCode).

### 1. Funcionalidade escolhida: Favoritos nos planos

O visitante pode **favoritar os planos** (Lumina Essencial, Lumina Pro e Lumina Studio) para compará-los depois. A funcionalidade é relevante para a landing page porque o visitante precisa decidir entre três planos de preços diferentes, e marcar favoritos ajuda nessa decisão.

**Como funciona:**

- Cada card de plano tem um botão "♡ Favoritar".
- Ao clicar, o botão passa a mostrar "♥ Favoritado" e o plano fica marcado.
- Ao clicar de novo, o favorito é removido.
- O cabeçalho mostra um contador ("♥ N") com a quantidade de planos favoritos.
- Os favoritos são guardados no `localStorage` e continuam após recarregar a página.

**Arquivos criados ou alterados:**

| Arquivo | Alteração |
|---|---|
| `src/viewmodels/useFavoritesViewModel.js` | novo: lógica dos favoritos (adicionar, remover, salvar) |
| `src/App.jsx` | usa o novo viewmodel e passa as props ao Header e ao Pricing |
| `src/views/components/Header/Header.jsx` e `.module.css` | contador de favoritos |
| `src/views/components/Pricing/Pricing.jsx` e `.module.css` | botão de favoritar em cada plano |

### 2. Especificação (prompt em linguagem natural)

```text
Adicione à landing page a funcionalidade de favoritar planos. Cada card de plano deve ter um botão "Favoritar". Ao clicar, o botão passa a mostrar "Favoritado" e o plano é marcado como favorito. Ao clicar de novo, o favorito é removido. O Header deve mostrar um contador com o número de planos favoritos, começando em 0. Os planos devem ser independentes entre si. Os favoritos devem continuar após recarregar a página.
```

### 3. Validação inicial com Playwright

Com a funcionalidade implementada, foi solicitado ao OpenCode que usasse o Playwright para verificar se ela atendia ao comportamento especificado. A implementação estava de acordo com a especificação.

### 4. Testes automatizados criados

Os testes ficam em `tests/favoritos.spec.js`, e a configuração está em `playwright.config.js` (o Playwright sobe o servidor do Vite sozinho).

| # | Teste | Comportamento validado |
|---|---|---|
| 1 | começa com zero favoritos | contador em 0 e botões não marcados |
| 2 | favoritar um plano atualiza o botão e o contador | botão vira "Favoritado" e contador vai para 1 |
| 3 | clicar de novo remove o plano dos favoritos | botão e contador voltam ao estado inicial |
| 4 | favoritar vários planos funciona de forma independente | favoritar 2 planos e remover 1 mantém o outro marcado |
| 5 | favoritos continuam depois de recarregar a página | persistência via `localStorage` |

### 5. Teste de falha (alteração intencional)

Para demonstrar que os testes identificam problemas reais, a implementação foi alterada de propósito.

- **Arquivo:** `src/viewmodels/useFavoritesViewModel.js`
- **Código original:**

```js
setFavorites(favorites.filter((id) => id !== planId));
```

- **Código com a falha:**

```js
setFavorites([...favorites]);
```

Com essa mudança, **desfavoritar deixa de funcionar**: o plano continua marcado e o contador não diminui.

### 6. Resultados das execuções

| Execução | Aprovados | Reprovados | Observação |
|---|---|---|---|
| Implementação correta | 5 | 0 | todos os comportamentos validados (`playwright-report-ok`) |
| Com a alteração intencional | 3 | 2 | falharam os testes 3 e 4 (`playwright-report-falha`) |
| Após reverter a alteração | 5 | 0 | testes voltaram a passar |

**Testes que identificaram o problema:**

- **"clicar de novo remove o plano dos favoritos":** depois de clicar para desfavoritar, o plano continuou favorito e o botão "Favoritar" não voltou a aparecer.
- **"favoritar vários planos funciona de forma independente":** ao remover um dos favoritos, o contador deveria ir para `♥ 1`, mas permaneceu em `♥ 2`.

Os testes 1, 2 e 5 continuaram passando, porque a falha atinge apenas a remoção de favoritos. Isso mostra que cada teste verifica um comportamento específico.

### 7. Como executar os testes

```bash
npm install
npx playwright install
npx playwright test
```

Para abrir os relatórios:

```bash
npx playwright show-report playwright-report-ok
npx playwright show-report playwright-report-falha
```


## Conclusão

A landing page do Lumina evoluiu em etapas: primeiro a construção do produto e da identidade visual, depois a acessibilidade, com apoio do Accessibility Scanner MCP, e por fim uma nova funcionalidade validada com testes automatizados.

Na Atividade 03, o Playwright mostrou que um teste útil não serve apenas para passar: ele precisa falhar quando o comportamento deixa de atender ao que foi especificado. Ao quebrar a função de remover favoritos de propósito, os testes corretos reprovaram, e ao reverter a alteração voltaram a passar. A combinação de auditorias automatizadas, testes de ponta a ponta e testes manuais oferece uma visão mais completa da qualidade da interface.

## Repositório

https://github.com/GabrielaPereiraSantana/Atividade-Landing-Page.git
