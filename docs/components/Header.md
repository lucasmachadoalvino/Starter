## Header

Componente Header (Cabeçalho) das sections internas

### Basic Example

```js
import Header from '../../components/Header';

export default () => (
  <Header
    title="Título"
    subtitle="Descrição"
    />
);

```

## Props

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
          <td>title</td>
          <td>string</td>
          <td></td>
          <td>Título principal do Header</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td>string</td>
          <td></td>
          <td>Subtitulo ou Descrição</td>
        </tr>
        <tr>
          <td>back</td>
          <td>boolean</td>
          <td>false</td>
          <td>Botão para voltar</td>
        </tr>
        <tr>
          <td>center</td>
          <td>boolean</td>
          <td>false</td>
          <td>Centralizar o Título e Subtitulo</td>
        </tr>
        <tr>
          <td>children</td>
          <td>Element</td>
          <td></td>
          <td>Header content</td>
        </tr>
    </tbody>
</table>


## Styles

> Estilos: components/Header/style.js

#### Estilo do cabeçalho pode ser alterado conforme ao container utilizado `commons/layout/styles.js`
