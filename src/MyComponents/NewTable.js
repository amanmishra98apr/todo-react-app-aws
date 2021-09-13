import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const NewTable = props => {
    let rows = [
      
        {
          'id': 1,
          'first': 'Mark',
          'last': 'Otto',
          'handle': '@mdo'
        },
        {
            'id': 1,
            'first': 'Mark',
            'last': 'Otto',
            'handle': <button>click</button>
          },
        
      ]
const data = {
  columns: [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'First',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Last',
      field: 'last',
      sort: 'asc'
    },
    {
      label: 'Handle',
      field: 'handle',
      sort: 'asc'
      }
  ],
  rows: rows
};

return (
    <MDBTable scrollY>
      <MDBTableHead columns={data.columns} />
      <MDBTableBody rows={data.rows} />
    </MDBTable>
  );
};

export default NewTable;