import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';

const PersonalTable = ({ data }) => {
  const monthes = [
    ...Object.keys(data.find((row) => row.month === 'amounts').value),
    'amount_salary',
  ].filter((key) => key !== 'amount');

  const amountsRow = data.find(({ month }) => month === 'amounts');
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
      size='small'
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
              }}
            >
              {data[0].projectName}
            </Typography>
          </TableCell>
          {monthes.map((cell) => (
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
                {cell}
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => {
          if (row.month === 'amounts') return;
          const rowData = Object.entries(row.value);
          return (
            <TableRow>
              <TableCell>{row.month}</TableCell>
              {monthes.map((month) => {
                const val = rowData.find(([monthKey]) => monthKey === month);
                if (!val) return <TableCell></TableCell>;
                return (
                  <TableCell>
                    {typeof val[1] === 'object' ? val[1].hours : val[1]}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
        <TableRow>
          <TableCell>amounts</TableCell>
          {monthes.map((month) => {
            const val = Object.entries(amountsRow.value).find(
              ([monthKey]) => monthKey === month
            );

            if (!val) return <TableCell></TableCell>;
            return <TableCell>{val[1]}</TableCell>;
          })}
        </TableRow>
        {/* <TableRow>
          <TableCell></TableCell>
          {data.map((cell) => (
            <TableCell>{cell.value}</TableCell>
          ))}
        </TableRow> */}
      </TableBody>
    </Table>
  );
};

export default PersonalTable;
