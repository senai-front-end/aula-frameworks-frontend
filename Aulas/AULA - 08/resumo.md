# Resumo — Aula 08: Projeto React

## 1. Revisão de JavaScript

JavaScript é uma linguagem usada para adicionar interatividade às páginas web. Pode ser escrito no HTML com a tag `script` ou em arquivos externos.

### Variáveis e tipos de dados
- `const`: declara uma variável que não será reatribuída.
- `let`: declara uma variável cujo valor pode mudar.
- `var`: possui escopo de função e é uma forma mais antiga de declarar variáveis.
- JavaScript diferencia letras maiúsculas e minúsculas.

Principais tipos:
- `String`: texto.
- `Number`: números.
- `Boolean`: `true` ou `false`.
- `Array`: lista de valores.
- `Object`: conjunto de propriedades.
- `null`: ausência intencional de valor.
- `undefined`: valor ainda não definido.

`typeof` permite verificar o tipo de um valor.

### Operadores
- Aritméticos: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`.
- Comparação: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
- Lógicos: `&&` (E), `||` (OU), `!` (NÃO).
- Atribuição: `=`, `+=`, `-=`, `*=`, `/=`.

`===` compara valor e tipo; `==` pode converter os tipos antes de comparar.

### Condicionais e repetições
- `if`, `else if` e `else`: executam caminhos diferentes conforme uma condição.
- `for`: repetição geralmente usada quando se controla a quantidade de vezes.
- `while`: repete enquanto a condição for verdadeira.
- `do...while`: executa ao menos uma vez antes de verificar a condição.
- `break`: encerra a repetição.
- `continue`: pula para a próxima iteração.
- Operador ternário: `condicao ? valorSeVerdadeiro : valorSeFalso`.

### Funções, arrays e objetos
Funções agrupam instruções para realizar tarefas. Podem receber parâmetros e devolver resultados com `return`. Também podem ser escritas como arrow functions: `const somar = (a, b) => a + b`.

Arrays armazenam vários valores em sequência. O índice identifica a posição de um elemento. Métodos importantes:
- `forEach()`: executa uma função para cada item.
- `map()`: transforma cada item e cria um novo array.
- `filter()`: seleciona os itens que atendem a uma condição.
- `length`: informa a quantidade de elementos.

Objetos agrupam dados em propriedades e podem ter métodos. `this` referencia o próprio objeto dentro de seus métodos.

### DOM
O DOM representa a estrutura HTML da página em forma de árvore. JavaScript pode selecionar e alterar elementos usando, por exemplo:
- `getElementById()` e `querySelector()`: selecionam elementos.
- `querySelectorAll()`: seleciona todos os elementos correspondentes.
- `textContent`: altera o texto.
- `value`: acessa ou altera o valor de um campo.
- `classList`: modifica classes CSS.
- `createElement()` e `appendChild()`: criam e adicionam elementos.
- `addEventListener()`: registra eventos, como cliques.

## 2. JSX

JSX é uma extensão de sintaxe que permite escrever estruturas semelhantes a HTML dentro do JavaScript. É usado para descrever a interface dos componentes React.

```jsx
const nome = "João";
const saudacao = <h1>Olá, {nome}!</h1>;
```

As chaves `{}` permitem inserir expressões JavaScript no JSX.

Diferenças importantes em relação ao HTML:
- Use `className` em vez de `class`.
- Use `htmlFor` em vez de `for`.
- Elementos sem conteúdo devem ser fechados, como `<img />`.
- O componente deve retornar um elemento raiz ou usar um Fragment.
- JSX é transformado em JavaScript antes da execução.

## 3. Componentes

Componentes são partes independentes e reutilizáveis da interface. Geralmente são funções JavaScript que retornam JSX.

```jsx
function Cabecalho() {
  return <h1>Catálogo React</h1>;
}

function App() {
  return (
    <main>
      <Cabecalho />
      <p>Bem-vindo!</p>
    </main>
  );
}
```

- O nome do componente começa com letra maiúscula.
- Um componente é utilizado como uma tag: `<Cabecalho />`.
- Uma página pode ser dividida em componentes como cabeçalho, busca, cartões e rodapé.
- A árvore de componentes representa a relação entre o componente principal e seus componentes filhos.

**Vantagens:** organização, reutilização, manutenção mais fácil e consistência visual.

## 4. Props

Props (properties) são dados enviados de um componente pai para um componente filho. Permitem reutilizar a mesma estrutura com informações diferentes.

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

<Saudacao nome="João" />
<Saudacao nome="Maria" />
```

O mesmo componente mostra saudações diferentes conforme a prop recebida.

Props podem conter textos, números, valores booleanos, arrays, objetos, funções ou elementos React. Em geral, o componente pai fornece os dados e o filho os recebe e exibe.

## 5. DOM e Virtual DOM

- **DOM:** representação da estrutura HTML no navegador; pode ser consultado e alterado por JavaScript.
- **Virtual DOM:** representação da interface mantida em memória, usada pelo React para coordenar atualizações.

Quando os dados mudam, o React renderiza novamente os componentes relevantes, compara a nova descrição da interface com a anterior (reconciliação) e aplica as alterações necessárias. Nem toda renderização exige mudanças no DOM real.

Isso permite descrever o resultado esperado da interface sem alterar manualmente cada elemento.

## 6. Listas e Keys

O método `map()` transforma os itens de um array em elementos da interface.

```jsx
const alunos = [
  { id: 101, nome: "Ana" },
  { id: 102, nome: "Bruno" }
];

<ul>
  {alunos.map((aluno) => (
    <li key={aluno.id}>{aluno.nome}</li>
  ))}
</ul>
```

- `map()`: cria um elemento para cada item.
- `key`: identifica cada item entre os elementos irmãos e ajuda o React a reconhecer itens mantidos, adicionados, removidos ou reordenados.
- Prefira uma chave única e estável, como o ID do item.
- `filter()` pode selecionar itens antes de renderizá-los.
- Ao atualizar listas em estado, prefira criar novos arrays em vez de alterar diretamente o array existente.

## 7. Renderização condicional

Permite mostrar conteúdos diferentes conforme uma condição, usando props, estado ou dados da aplicação.

### Com `if` e `return`

```jsx
function MensagemAcesso({ autenticado }) {
  if (autenticado) {
    return <p>Bem-vindo de volta!</p>;
  }

  return <p>Entre para continuar.</p>;
}
```

### Com operador ternário

```jsx
{carregando
  ? <p>Buscando...</p>
  : <p>Busca finalizada.</p>}
```
