import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';



export default function Entries({ rows }) {
    return (
        <React.Fragment>
            <Title>Ultimas Entradas</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell># Empleado</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Tipo_Nomina</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Hora</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.nomina}</TableCell>
                            <TableCell>{row.empresa}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.time}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}