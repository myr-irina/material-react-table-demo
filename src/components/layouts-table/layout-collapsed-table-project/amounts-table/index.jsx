import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

import { numberWithSpaces } from '../../../../utils/utils';

const AmountsTable = ({ data }) => {
  return (
    <Table
      stickyHeader
      sx={{
        tableLayout: 'fixed',
        margin: '0 auto',
        width: '100%',
        '& .MuiTableCell-root:first-of-type': {
          width: '170px',
        },
      }}
      // size='small'
    >
      <TableHead sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <TableRow>
          <TableCell>
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '14px',
                overflowX: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              {data[0].projectName}
            </Typography>
          </TableCell>
          {data.map((cell) => (
            <TableCell component='th' key={cell}>
              <Typography
                sx={{
                  fontWeight: '700',
                  fontSize: '14px',
                  overflowX: 'hidden',
                  whiteSpace: 'nowrap',
                  color: 'black',
                }}
              >
                {cell.month}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
          {data.map((cell) => (
            <TableCell>{`${numberWithSpaces(cell.value)} р.`}</TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AmountsTable;
