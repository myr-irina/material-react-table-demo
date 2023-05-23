import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import MaterialReactTable from 'material-react-table';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material';
import { getCellColor } from '../../../utils/getCellColor';
import { Link as MuiLink } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import { ExportToCsv } from 'export-to-csv';

// import data from '../../../json/employees-general-fact.json';

export default function LayoutPlainTable(props) {
  const { data, title, header, isLoading } = props;

  const StyledBoxWithData = styled(Box)(({ theme, customColor }) => ({
    borderRadius: '0.25rem',
    color: 'black',
    padding: '0.2rem',
    fontWeight: 600,
    display: 'flex',
    flexDirection: 'column',
  }));

  const columns = useMemo(
    () => [
      {
        header: header,
        id: 'name',
        accessorKey: 'Сотрудники',
        sortDescFirst: false,
        size: 100,
        Cell: ({ cell, row }) => (
          <MuiLink
            component={Link}
            target='_blank'
            rel='noopener noreferrer'
            to={row.original['Связанные ссылки'] ?? '#'}
            underline='none'
          >
            {cell.getValue()}
          </MuiLink>
        ),
      },
      {
        header: 'Январь',
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Январь !== null
            ? `${row?.Январь?.hours}ч. (${row?.Январь?.percent}%)`
            : '',

        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Февраль !== null
            ? `${row?.Февраль?.hours}ч. (${row?.Февраль?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Март !== null
            ? `${row?.Март?.hours}ч. (${row?.Март?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Апрель !== null
            ? `${row?.Апрель?.hours}ч. (${row?.Апрель?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Май !== null
            ? `${row?.Май?.hours}ч. (${row?.Май?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Июнь !== null
            ? `${row?.Июнь?.hours}ч. (${row?.Июнь?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Июль !== null
            ? `${row?.Июль?.hours}ч. (${row?.Июль?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Август !== null
            ? `${row?.Август?.hours}ч. (${row?.Август?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Сентябрь !== null
            ? `${row?.Сентябрь?.hours}ч. (${row?.Сентябрь?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Октябрь !== null
            ? `${row?.Октябрь?.hours}ч. (${row?.Октябрь?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Ноябрь !== null
            ? `${row?.Ноябрь?.hours}ч. (${row?.Ноябрь?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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
        enableColumnActions: false,
        accessorFn: (row) =>
          row.Декабрь !== null
            ? `${row?.Декабрь?.hours}ч. (${row?.Декабрь?.percent}%)`
            : '',
        Cell: ({ cell }) => {
          return cell?.getValue() != null && cell?.getValue()?.length > 0 ? (
            <StyledBoxWithData
              component='span'
              sx={{
                backgroundColor: `${getCellColor(
                  cell?.getValue()?.split('(')[1]?.slice(0, -2)
                )}`,
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

  const csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    useBom: true,
    useKeysAsHeaders: false,
    headers: columns.map((c) => c.header),
  };

  const csvExporter = new ExportToCsv(csvOptions);

  const handleExportData = () => {
    csvExporter.generateCsv(data);
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      defaultColumn={{
        size: 50,
      }}
      enableStickyHeader
      initialState={{
        density: 'compact',
        sorting: [{ id: 'name', desc: false }],
        pagination: { pageSize: 25, pageIndex: 0 },
      }}
      muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 25],
        labelRowsPerPage: 'Количество видимых строк',
      }}
      muiTableProps={{
        sx: {
          tableLayout: 'fixed',
        },
      }}
      enableColumnFilters={false}
      enableHiding={false}
      enableDensityToggle={false}
      state={{ isLoading }}
      renderTopToolbarCustomActions={() => {
        return (
          <>
            <Button
              color='primary'
              onClick={handleExportData}
              startIcon={<FileDownloadIcon />}
              variant='contained'
              mt='15px'
            >
              Export Data
            </Button>
            <Typography variant='h5' mb='25px'>
              {title}
            </Typography>
          </>
        );
      }}
    />
  );
}
