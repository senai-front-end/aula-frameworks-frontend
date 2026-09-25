# Frameworks CSS

## 1. CSS

CSS é usado para definir a aparência e o layout de páginas web. Ele controla cores, fontes, tamanhos, margens, alinhamentos, espaçamentos e posicionamento.

A estrutura básica é:

```css
seletor {
  propriedade: valor;
}
```

Exemplo:

```css
body {
  background-color: red;
}
```

## 2. Formas de aplicar CSS

### CSS Inline
É colocado diretamente no elemento HTML usando `style`.

```html
<p style="color: red;">Texto</p>
```

É útil para alterações rápidas e pontuais.

### CSS Interno
É colocado dentro da tag `<style>` no HTML.

```html
<style>
  p {
    color: blue;
  }
</style>
```

É útil quando o estilo será usado em uma única página.

### CSS Externo
É colocado em um arquivo `.css` separado e conectado ao HTML com `<link>`.

```html
<link rel="stylesheet" href="style.css">
```

É a forma mais recomendada para projetos maiores, pois facilita a organização e reutilização dos estilos.

## 3. Principais propriedades CSS

- `color`: cor do texto.
- `background-color`: cor de fundo.
- `font-family`: tipo de fonte.
- `font-size`: tamanho do texto.
- `margin`: espaço externo do elemento.
- `padding`: espaço interno do elemento.
- `border`: borda do elemento.
- `width`: largura.
- `height`: altura.
- `display`: define como o elemento é exibido.
- `position`: define o posicionamento.
- `top`, `right`, `bottom`, `left`: ajudam a posicionar elementos.
- `text-align`: alinha o texto.

## 4. Classes e IDs

### Class
Permite aplicar o mesmo estilo a vários elementos.

```css
.botao {
  background: blue;
}
```

### ID
É usado principalmente para identificar um elemento específico.

```css
#cabecalho {
  height: 80px;
}
```

## 5. Box Model

O Box Model representa cada elemento HTML como uma caixa formada por:

```text
Content → Padding → Border → Margin
```

- `Content`: conteúdo do elemento.
- `Padding`: espaço entre o conteúdo e a borda.
- `Border`: borda ao redor do conteúdo.
- `Margin`: espaço externo entre o elemento e outros elementos.

O Box Model ajuda a controlar tamanhos, espaçamentos e organização do layout.

## 6. Flexbox

Flexbox é um sistema de layout usado para organizar elementos em linhas ou colunas.

Principais propriedades:

- `flex-direction`: define a direção dos elementos.
- `justify-content`: controla o alinhamento no eixo principal.
- `align-items`: controla o alinhamento no eixo secundário.
- `flex-wrap`: permite que os elementos quebrem para outra linha.
- `gap`: define o espaço entre os elementos.

Exemplo:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

## 7. Layout Responsivo

Layout responsivo é uma técnica que adapta o conteúdo para diferentes tamanhos de tela, como:

- Celular
- Tablet
- Desktop

O objetivo é melhorar a usabilidade e evitar a necessidade de criar uma versão diferente do site para cada dispositivo.

## 8. Framework CSS

Um framework CSS é um conjunto de recursos, padrões, classes e componentes que facilita e padroniza a criação de interfaces web.

Ele pode oferecer:

- Layouts com Grid e Flexbox.
- Responsividade.
- Cores.
- Espaçamentos.
- Tipografia.
- Botões.
- Cards.
- Menus e outros componentes.

A principal ideia é reduzir o trabalho de criar todo o CSS manualmente.

## 9. Tailwind CSS

O Tailwind CSS é um framework baseado no conceito **Utility-First**.

Em vez de criar uma classe CSS completa para cada componente, são usadas pequenas classes diretamente no HTML.

Exemplo:

```html
<button class="bg-blue-600 text-white px-6 py-3 rounded-lg">
  Enviar
</button>
```

Cada classe possui uma função:

- `bg-blue-600`: cor de fundo.
- `text-white`: cor do texto.
- `px-6`: espaçamento horizontal.
- `py-3`: espaçamento vertical.
- `rounded-lg`: bordas arredondadas.

A ideia principal é:

```text
Uma classe = uma responsabilidade
Várias classes = um componente
```

## 10. Vantagens do Tailwind

O Tailwind ajuda a:

- Reduzir o tempo de desenvolvimento.
- Criar interfaces de forma flexível.
- Facilitar a personalização.
- Manter consistência visual.
- Criar layouts responsivos.
- Evitar a criação de várias regras CSS separadas.

## 11. Instalação e uso

Para testes, o Tailwind pode ser carregado diretamente no HTML usando o Play CDN.

Também é possível instalar o Tailwind usando npm e integrá-lo ao processo de desenvolvimento do projeto.

O framework pode ser utilizado junto com ferramentas e frameworks como Next.js, Laravel, Angular e Ruby on Rails.

## 12. Tailwind IntelliSense

O Tailwind IntelliSense é uma extensão para editores de código.

Ele oferece:

- Autocompletar classes.
- Sugestões de propriedades.
- Visualização dos estilos.
- Ajuda para evitar erros de digitação.

## Resumo final

```text
CSS
 ↓
Estilização e layout
 ↓
Box Model + Flexbox
 ↓
Layout Responsivo
 ↓
Frameworks CSS
 ↓
Tailwind CSS
 ↓
Classes Utility-First
```

### Para lembrar para a prova

- **CSS** = aparência e organização da página.
- **Margin** = espaço fora.
- **Padding** = espaço dentro.
- **Border** = borda.
- **Content** = conteúdo.
- **Flexbox** = organização e alinhamento dos elementos.
- **Responsividade** = adaptação para diferentes telas.
- **Framework CSS** = conjunto de recursos para facilitar o desenvolvimento.
- **Tailwind** = framework baseado em classes utilitárias.
- **Utility-First** = pequenas classes com funções específicas.
