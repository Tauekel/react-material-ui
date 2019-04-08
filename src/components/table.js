import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(idTask, status, taskName, taskDescription, executionDate, importance, tag, action) {
    id += 1;
    return { id, idTask, status, taskName, taskDescription, executionDate, importance, tag, action };
}

const rows = [
    createData('F', 159, 6.0, 24, 4.0),
    createData('F', 159, 6.0, 24, 4.0),
    createData('F', 159, 6.0, 24, 4.0)
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>id задачи</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right">Название задачи</TableCell>
                        <TableCell align="right">Описание задачи</TableCell>
                        <TableCell align="right">Дата выполнения</TableCell>
                        <TableCell align="right">Важность</TableCell>
                        <TableCell align="right">Тег</TableCell>
                        <TableCell align="right">Действие</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.idTask}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.taskName}</TableCell>
                            <TableCell align="right">{row.taskDescription}</TableCell>
                            <TableCell align="right">{row.executionDate}</TableCell>
                            <TableCell align="right">{row.importance}</TableCell>
                            <TableCell align="right">{row.tag}</TableCell>
                            <TableCell align="right">{row.action}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);