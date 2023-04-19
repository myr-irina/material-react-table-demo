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

export const findProjectByName = (projectName, projects) =>
  projects.find((project) => project.projectName === projectName);

// месяц
// [
// Авторы
//   [
// Автор
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
