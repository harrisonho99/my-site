import styles from '../../../../styles/post-man/Table.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { indigo } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RoundedAddButton from '../ButtonBase/RoundedAddButton';
import { useState } from 'react';
import { v4 } from 'uuid';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    color: indigo[900],
  },
  cell: {
    padding: '10px !important',
    height: 40,
  },
});

function createData(key: string, value: string, id: string, description?: string) {
  return { key, value, description, id };
}

export default function CustomTable() {
  const [rows, setRows] = useState([
    createData('username', 'hoang', v4(), ''),
    createData('password', '1234', v4(), ''),
  ]);
  const classes = useStyles();
  const onAddField = () => {
    setRows((current) => current.concat(createData('', '', v4(), '')));
  };
  const onDeleteField = (id: string) => {
    setRows((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className='relative mb-10'>
      <TableContainer component={Paper} elevation={3}>
        <Table className={`${classes.table}`} id={styles['table-root']} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className='' style={{ fontWeight: 600, fontSize: 14 }}>
                KEY
              </TableCell>
              <TableCell align='left' style={{ fontWeight: 600, fontSize: 14 }}>
                VALUE
              </TableCell>
              <TableCell align='left' style={{ fontWeight: 600, fontSize: 14 }}>
                DESCRIPTION
              </TableCell>
              <TableCell align='center' style={{ fontWeight: 600, fontSize: 14 }}>
                DELETE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className=' '>
            {rows.map((row) => (
              <TableRow key={row.id} className='animate__animated animate__fadeIn'>
                <TableCell component='th' scope='row' className={`${classes.cell}`}>
                  <input
                    type='text'
                    className='rounded-sm w-24 h-full bg-transparent'
                    defaultValue={row.key}
                  />
                </TableCell>
                <TableCell align='left' className={`${classes.cell}`}>
                  <input
                    type='text'
                    className='rounded-sm w-full h-full bg-transparent'
                    defaultValue={row.value}
                  />
                </TableCell>
                <TableCell align='left' className={`${classes.cell}`}>
                  <input
                    type='text'
                    className='rounded-sm h-full w-full bg-transparent'
                    defaultValue={row.description}
                  />
                </TableCell>
                <TableCell component='th' scope='row'>
                  <div className={`flex justify-center items-center`}>
                    <IconButton
                      aria-label='delete'
                      className='bg-red-500 w-7 h-7'
                      style={{ background: '#EF4444' }}
                      onClick={() => {
                        onDeleteField(row.id);
                      }}
                    >
                      <DeleteIcon fontSize='small' />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='float-right mt-2'>
        <RoundedAddButton onClick={onAddField} />
      </div>
    </div>
  );
}
