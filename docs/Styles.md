## Styles

Definição da padronização de estilos do Tema do projeto.


### Theme
> ./commons/styles/theme.js

Paleta de cores e estilos padrão.

### Global
> ./commons/styles/global.js

Estilos globais de componentes, tags e estruturas.

### Layout
> ./commons/layout

```js
import Layout from '../../commons/layout';

export default () => (
  <Layout aside={<Component />}>
    <div>Child Component</div>
  </Layout>
);
```

#### Opções

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">Nome</th>
        <th style="width: 50px;">Tipo</th>
        <th style="width: 50px;">Defult</th>
        <th>Descrição</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>children</td>
          <td>element</td>
          <td></td>
          <td>Renderização de componentes</td>
        </tr>
        <tr>
          <td>aside</td>
          <td>element</td>
          <td></td>
          <td>Renderização do container lateral</td>
        </tr>
        <tr>
          <td>footer</td>
          <td>function</td>
          <td></element>
          <td>Renderização do container de rodapé</td>
        </tr>
    </tbody>
</table>
