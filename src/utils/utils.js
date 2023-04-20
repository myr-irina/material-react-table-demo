export const parseTableData = (data) => {
  const obj = Object.entries(data)
    .map(([month, dataAuthors]) => {
      if (!dataAuthors) return;

      return Object.entries(dataAuthors).map(([author, projects]) => {
        // if (author === 'common_amounts') {
        //   console.log({ author, projects });
        //   const fromIndex =
        //     Object.entries(dataAuthors).indexOf('common_amounts');

        //   const item = Object.entries(dataAuthors).splice(fromIndex, 1)[0];

        //   console.log(
        //     Object.entries(dataAuthors).splice(dataAuthors.length, 1, item)
        //   );

        //   Object.entries(dataAuthors).splice(dataAuthors.length, 1, item);
        //   console.log(Object.entries(dataAuthors));
        //   return Object.entries(dataAuthors);
        // }

        return Object.entries(projects).map(([projectName, time]) => ({
          projectName,
          author,
          month,
          ...(typeof time === 'number' ? { hours: time, percent: null } : time),
        }));
      });
    })
    .filter(Boolean);
  // console.log({ obj });

  return obj;
};

export const getColumnNames = (data) => {
  const result = [];

  data.forEach((row) => {
    const columns = row.reduce((acc, item) => {
      if (item.author !== 'common_amounts') acc.push(item.projectName);
      return acc;
    }, []);
    result.push(...columns);
  });

  const headers = [...new Set(result)];
  const fromIndex = headers.indexOf('amount_values');
  const item = headers.splice(fromIndex, 1)[0];
  headers.splice(headers.length, 1, item);
  return headers;
};

//columnName, rowproject[]
export const findProjectByName = (projectName, projects) =>
  projects.find((project) => project.projectName === projectName);

export const findProjectByName2 = (month, projects) =>
  projects.find((project) => project.month === month);

// месяц
// [
// Авторы
//   [
// Автор
//     [[][][]]
//     [[][][]]
//   ]
// ]

// projectType
// [
// projects
//   [
// project
//     [[][][]]
//     [[][][]]
//   ]
// ]

export const showProps = (obj) => {
  let result = '';
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result = `${obj['hours']}ч.
       (${obj['percent']}%)`;
    }
  }
  return result;
};

// export const parseTableData2 = (data) => {
//   const obj = Object.entries(data).map(([projectType, projects]) => {
//     if (!projects) return;

//     return Object.entries(projects).map(([projectName, values]) => ({
//       projectType,
//       projectName,
//       ...values,
//     }));
//   });

//   return obj;
// };

export const parseTableData2 = (data) => {
  const obj = Object.entries(data)
    .map(([projectType, dataProject]) => {
      // console.log([projectType, dataProject]);
      if (!dataProject) return;

      return Object.entries(dataProject).map(([projectName, projects]) => {
        return Object.entries(projects).map(([month, value]) => ({
          month,
          projectName,
          projectType,
          value,
        }));
      });
    })
    .filter(Boolean);
  // console.log({ obj });

  return obj;
};

export const getColumnNames2 = (data) => {
  // console.log(data, 'data');
  const result = [];

  data.forEach((row) => {
    // console.log({ row });
    const columns = row.reduce((acc, item) => {
      acc.push(item.month);
      return acc;
    }, []);
    result.push(...columns);
  });

  const headers = [...new Set(result)];
  return headers;
};

//разбить число на разряды
export const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
