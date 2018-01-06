import React from 'react';

import BootstrapTable from 'react-bootstrap-table2';
import Code from 'components/common/code-block';
import { productsGenerator } from 'utils/common';

const products = productsGenerator();

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const sourceCode = `\
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

const cellEdit = {
  mode: 'dbclick'
};

<BootstrapTable
  keyField='id'
  data={ products }
  columns={ columns }
  cellEdit={ cellEdit }
/>
`;

const cellEdit = {
  mode: 'dbclick'
};
export default () => (
  <div>
    <BootstrapTable keyField="id" data={ products } columns={ columns } cellEdit={ cellEdit } />
    <Code>{ sourceCode }</Code>
  </div>
);