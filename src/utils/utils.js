export const parseTableData = (data) => {
  return Object.entries(data)
    .map(([month, dataAuthors]) => {
      if (!dataAuthors) return;
      return Object.entries(dataAuthors).map(([author, projects]) => {
        // console.log([author, projects]);
        // if (author === 'common_amounts') {
        //   return Object.entries(projects).map(
        //     ([projectName, time = Object.values(projectName)]) => ({
        //       projectName,
        //       author,
        //       month,
        //       ...time,
        //     })
        //   );
        // }
        return Object.entries(projects).map(([projectName, time]) => ({
          projectName,
          author,
          month,
          ...time,
        }));
      });
    })
    .filter(Boolean);
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
