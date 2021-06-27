import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { indigo } from '@material-ui/core/colors';
import styles from '../../../../styles/post-man/Table.module.css';

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

function createData(key: string, value: string, description?: string) {
  return { key, value, description };
}

const rows = [createData('username', 'hoang'), createData('password', '1234')];

export default function CustomTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table
        className={`${classes.table}`}
        id={styles['table-root']}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell className='' style={{ fontWeight: 600, fontSize: 14 }}>
              KEY
            </TableCell>
            <TableCell
              className=''
              align='left'
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              VALUE
            </TableCell>
            <TableCell
              className=''
              align='left'
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              DESCRIPTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className=' '>
          {rows.map((row) => (
            <TableRow key={row.key}>
              <TableCell
                component='th'
                scope='row'
                className={`${classes.cell}`}
              >
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
