import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import employeesRawData from '../../../json/employees-general-plan.json';
console.log({ employeesRawData });

const TABLE_HEAD2 = employeesRawData.map((item) => Object.keys(item));
function pickHex(color1, color2, weight) {
  var w1 = weight;
  var w2 = 1 - w1;
  var rgb = [
    Math.round(color1[0] * w1 + color2[0] * w2),
    Math.round(color1[1] * w1 + color2[1] * w2),
    Math.round(color1[2] * w1 + color2[2] * w2),
  ];
  return rgb;
}

const green = [0, 255, 0];
const white = [255, 255, 255];
const red = [255, 0, 0];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {TABLE_HEAD2[0].map((key, index) => {
              return <TableCell key={index}>{key}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {employeesRawData.map((data) => (
            <TableRow>
              {Object.values(data).map((item, index) => {
                let backgroundColor;

                const ratio = index / (data.length / 2);

                if (ratio > 1) {
                  backgroundColor = pickHex(red, white, ratio - 1);
                } else {
                  backgroundColor = pickHex(white, green, ratio);
                }
                backgroundColor = `rgba(${backgroundColor.join(',')})`;
                console.log({ backgroundColor });

                return typeof item === 'object' && item !== null ? (
                  <TableCell
                    sx={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      minWidth: '55px',
                      backgroundColor: backgroundColor,
                    }}
                  >
                    {item.percent}
                  </TableCell>
                ) : (
                  <TableCell
                    sx={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      minWidth: '55px',
                    }}
                  >
                    {item}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
