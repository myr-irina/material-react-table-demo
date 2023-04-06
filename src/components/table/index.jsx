import React, { useEffect, useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Typography } from '@mui/material';
import data from './../../json/employees-general-plan.json';
import { styled } from '@mui/material';

import { getWorkingHoursPlan } from '../../utils/api-requests';

export default function Table() {
  // const [workingHours, setWorkingHours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   getWorkingHoursPlan()
  //     .then((data) => {
  //       setWorkingHours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const StyledBoxWithData = styled(Box)(({ theme, customColor }) => ({
    // backgroundColor: customColor,
    borderRadius: '0.25rem',
    color: '#fff',
    maxWidth: '9ch',
    p: '0.25rem',
    display: 'flex',
    flexDirection: 'column',
  }));

  const StyledBoxWithNoData = styled(Box)(({ theme }) => ({
    backgroundColor: 'transparent',
  }));

  const columns = useMemo(
    () => [
      {
        header: 'Сотрудники',
        accessorKey: 'staff',
      },
      {
        header: 'Январь',
        accessorFn: (row) =>
          row.january !== null
            ? `${row?.january?.hours}ч. (${row?.january?.percent}%)`
            : '',

        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Февраль',
        accessorFn: (row) =>
          row.february !== null
            ? `${row?.february?.hours}ч. (${row?.february?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Март',
        accessorFn: (row) =>
          row.march !== null
            ? `${row?.march?.hours}ч. (${row?.march?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Апрель',
        accessorFn: (row) =>
          row.april !== null
            ? `${row?.april?.hours}ч. (${row?.april?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Май',
        accessorFn: (row) =>
          row.may !== null
            ? `${row?.may?.hours}ч. (${row?.may?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Июнь',
        accessorFn: (row) =>
          row.june !== null
            ? `${row?.june?.hours}ч. (${row?.june?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Июль',
        accessorFn: (row) =>
          row.july !== null
            ? `${row?.july?.hours}ч. (${row?.july?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Август',
        accessorFn: (row) =>
          row.august !== null
            ? `${row?.august?.hours}ч. (${row?.august?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Сентябрь',
        accessorFn: (row) =>
          row.september !== null
            ? `${row?.september?.hours}ч. (${row?.september?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Октябрь',
        accessorFn: (row) =>
          row.october !== null
            ? `${row?.october?.hours}ч. (${row?.october?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Ноябрь',
        accessorFn: (row) =>
          row.november !== null
            ? `${row?.november?.hours}ч. (${row?.november?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
      {
        header: 'Декабрь',
        accessorFn: (row) =>
          row.december !== null
            ? `${row?.december?.hours}ч. (${row?.december?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor:
                  cell?.getValue()?.split('(')[1]?.slice(0, -2) < 100
                    ? 'orange'
                    : cell?.getValue()?.split('(')[1]?.slice(0, -2) == 100
                    ? 'green'
                    : 'red',
              }}
            >
              <span>{cell?.getValue()?.split(' ').slice(0, 1)}</span>
              <span>{cell?.getValue()?.split(' ').slice(1)}</span>
            </StyledBoxWithData>
          ) : null;
        },
      },
    ],
    []
  );

  return (
    <Box sx={{ width: '1200px', margin: '0 auto' }}>
      <Typography variant='h4' gutterBottom sx={{ mt: '50px' }}>
        Сотрудники_общий_план
      </Typography>
      <MaterialReactTable
        columns={columns}
        data={data}
        // muiTableBodyProps={{
        //   sx: {
        //     '& tr:nth-of-type(odd)': {
        //       backgroundColor: '#f5f5f5',
        //     },
        //   },
        // }}
        // muiTableBodyCellProps={{
        //   sx: {
        //     height: '50px',
        //   },
        // }}
        // localization={{ noRecordsToDisplay: 'No data!!' }}
        localization={{
          body: {
            emptyDataSourceMessage: <Box>Create your ad now</Box>,
          },
        }}
        enableStickyHeader
        initialState={{ density: 'compact' }}
      />
    </Box>
  );
}
