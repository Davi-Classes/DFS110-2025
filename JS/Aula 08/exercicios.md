# Ex01.

Crie um programa em Javascript, onde ele deve começar com uma 
lista de nomes preenchida.

Utilize o `.map` para criar uma nova lista onde todos os nomes devem estar em maiusculo.

Exemplo:
```js
// Array Inicial
const nomes = ['PeDro', 'carlos', 'camiLA', 'RICArdo']

// Array Final
['PEDRO', 'CARLOS', 'CAMILA', 'RICARDO']
```

# Ex02.

Crie um programa em Javascript, onde ele deve começar com uma 
lista de numeros preenchida.

Você deve utilizar o `filter` para criar um novo array somente com os numeros ìmpares.

Exemplo:
```js
// Array Inicial
const numeros = [1, 2, 6, 8, 7, 11, 13, 12, 20]

// Array Final
[1, 7, 11, 13]
```

# Ex03.

1. Faça um programa que deve ter um input para adicionar numeros, esses numeros devem ser armazenados em um array de numeros.

2. Faça um filtro para os numeros utilizando um `select`, ele deve conter as opções "Todos", "Pares" e "Impares". Quando o usuário alterar o valor do select você deve mostrar somente o valor filtrado

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Numeros</title>
  </head>
  <body>
    <h1>Numeros</h1>

    <div>
      <input type="text" id="numero" placeholder="Digite um numero" />
      <button onclick="handleAdicionarNumero()">Adicionar</button>
    </div>

    <hr />

    <select id="filtro" onchange="handleFiltrar()">
      <option value="todos" selected>Todos</option>
      <option value="pares">Pares</option>
      <option value="impares">Impares</option>
    </select>

    <ul id="numeros"></ul>

    <script>
      const numeros = [];

      const numeroInput = document.getElementById("numero");
      const filtroSelect = document.getElementById("filtro");

      function handleAdicionarNumero() {
        //...
      }

      function handleFiltrar() {
        // 1. Buscar o Valor do Select

        // 2. Se for todos, não filtrar.
        // se for par, filtrar os pares
        // se for impar, filtrar os impares

        // 3. Chamar a função "handleMostrarNumeros"
      }

      function handleMostrarNumeros(numeros) {
        //...
      }
    </script>
  </body>
</html>

```


