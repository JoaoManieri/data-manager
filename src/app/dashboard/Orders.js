import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title.js';

// Generate Order Data
function createData(id, date, name, valorDoOrcamento, tipoDeProcedimento, amount) {
  return { id, date, name, valorDoOrcamento, tipoDeProcedimento, amount };
}

const rows = [
  createData(
    0,
    '16 Mar, 2023',
    'Leves',
    '620',
    'Abs, Arla, Motor',
    620,
  ),
  createData(
    1,
    '20 Set, 2023',
    'Diesel e Leves',
    '124',
    'Painel, Motor',
    124,
  ),
  createData(
    2, 
    '18 Jan, 2024', 
    'Vans e Ônibus', 
    '6',
    'Transmissão, Arla',
     6
     ),
  createData(
    3,
    '30 Mar, 2024',
    'Vans e Ônibus',
    '451',
    'Motor',
    401,
  ),
  createData(
    4,
    '25 Jun, 2024',
    'Diesel e Leves',
    '295',
    'Motor',
    15,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Lançamentos recentes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Tipo de sistema</TableCell>
            <TableCell>Quantidade de aplicações</TableCell>
            <TableCell>Tipo de aplicação</TableCell>
            <TableCell align="right">Finalizado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.valorDoOrcamento}</TableCell>
              <TableCell>{row.tipoDeProcedimento}</TableCell>
              <TableCell align="right">{`${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Mais lançamentos
      </Link>
    </React.Fragment>
  );
}