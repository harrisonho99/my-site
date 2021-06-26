import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'tailwindcss/tailwind.css';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
    color: indigo[900],
  },
  cell: {
    padding: '2px !important',
    height: 40,
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table
        className={`${classes.table} bg-gray-200 bg-opacity-100 dark:bg-gray-700 `}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            <TableCell
              className='text-gray-900'
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              KEY
            </TableCell>
            <TableCell
              className='text-gray-900'
              align='left'
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              VALUE
            </TableCell>
            <TableCell
              className='text-gray-900'
              align='left'
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              DESCRIPTION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='text-indigo-600 '>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component='th'
                scope='row'
                className={`${classes.cell}`}
              >
                <input
                  type='text'
                  className='rounded-sm w-32 h-full bg-transparent border border-gray-100'
                />
              </TableCell>
              <TableCell align='left' className={`${classes.cell}`}>
                <input
                  type='text'
                  className='rounded-sm w-32 h-full bg-transparent border border-gray-100'
                />
              </TableCell>
              <TableCell align='left' className={`${classes.cell}`}>
                <input
                  type='text'
                  className='rounded-sm h-full w-full transparent bg-transparent border border-gray-100'
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
