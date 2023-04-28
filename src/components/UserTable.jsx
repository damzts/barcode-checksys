import * as React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';



export default function UserTable({ rows }) {
    return (
        <React.Fragment>
            <Title>Users</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell># Empleado</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Tipo_Nomina</TableCell>
                        <TableCell>Empresa</TableCell>
                        <TableCell>Fecha_Creacion</TableCell>
                        <TableCell>Hora_Creacion</TableCell>
                        <TableCell>Eliminar</TableCell>
                        <TableCell>Editar</TableCell>
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
                            <TableCell>
                                <IconButton aria-label="delete" color='error'>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>
                                <IconButton aria-label="delete" color='secondary'>
                                    <EditIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}