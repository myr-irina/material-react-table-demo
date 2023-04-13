export const parseTableData = (data) => {
  return Object.entries(data[0]).map(([month, dataAuthors]) => {
    return Object.entries(dataAuthors).map(([author, projects]) => {
      console.log(author, dataAuthors);
      return Object.entries(projects).map(([projectName, time]) => ({
        projectName,
        author,
        month,
        ...time,
      }));
    });
  });
};

// месяц
// [
// Авторы
//   [
// Автор
//     [[][][]]
//     [[][][]]
//   ]
// ]
