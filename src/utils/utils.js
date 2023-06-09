export const parseTableData = (data) => {
  const obj = Object.entries(data)
    .map(([month, dataAuthors]) => {
      if (!dataAuthors) return null;

      const dataAuthorsMutated = Object.entries(dataAuthors)
        .sort((a) => {
          return a[0] === 'Итого' ? 1 : -1;
        })
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

      return Object.entries(dataAuthorsMutated).map(([author, projects]) => {
        const linkFiltered = Object.keys(projects)
          .filter((key) => key !== 'link')
          .reduce((obj, key) => {
            obj[key] = projects[key];
            return obj;
          }, {});

        const link = Object.keys(projects)
          .filter((key) => key === 'link')
          .reduce((obj, key) => {
            obj[key] = projects[key];
            return obj;
          }, {});

        return Object.entries(linkFiltered).map(([projectName, time]) => ({
          projectName,
          author,
          month,
          ...link,
          ...(typeof time === 'number' ? { hours: time, percent: null } : time),
        }));
      });
    })
    .filter(Boolean);

  return obj;
};

export const parseTableData2 = (data) => {
  const obj = Object.entries(data)
    .map(([projectType, dataProject]) => {
      if (dataProject === 'null' || dataProject === 'undefined') {
        return null;
      }

      const dataAuthorsMutated = Object.entries(dataProject)
        .sort((a) => {
          return a[0] === 'amounts' ? 1 : -1;
        })
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

      return Object.entries(dataAuthorsMutated).map(
        ([projectName, projects]) => {
          return Object.entries(projects).map(([month, value]) => ({
            month,
            projectName,
            projectType,
            value,
          }));
        }
      );
    })
    .filter(Boolean);

  return obj;
};

export const parseTableData3 = (data) => {
  const obj = Object.entries(data)
    .filter(([projectType, dataProject]) => {
      if (Object.keys(dataProject).length !== 0) {
        return true;
      }
      return false;
    })
    .map(([projectType, dataProject]) => {
      const dataAuthorsMutated = Object.entries(dataProject)
        .sort((a) => {
          if (a[0] !== 'Итого') return null;
          return a[0] === 'Итого' ? 1 : -1;
        })
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

      const arr = Object.entries(dataAuthorsMutated);

      const value = arr[0][1];

      if (typeof value !== 'object') {
        const res = arr.map(([key, val]) => {
          return {
            month: key,
            projectName: projectType,
            projectType: projectType,
            value: val,
          };
        });
        return [res];
      }

      return arr.map(([projectName, projects]) => {
        return Object.entries(projects).map(([month, value]) => ({
          month,
          projectName,
          projectType,
          value,
        }));
      });
    })
    .filter(Boolean);

  return obj;
};

export const parseTableData4 = (data) => {
  const obj = Object.entries(data)
    .map(([projectType, dataProject]) => {
      return Object.entries(dataProject).map(([projectName, projects]) => {
        if (projects === null || projects === undefined) return null;

        return Object.entries(projects).map(([month, value]) => ({
          month,
          projectName,
          projectType,
          value,
        }));
      });
    })
    .filter(Boolean);

  return obj;
};

export const parseTableData5 = (data) => {
  const obj = Object.entries(data)
    .filter(([projectType, dataProject]) => {
      if (Object.keys(dataProject).length !== 0) {
        return true;
      }
      return false;
    })
    .map(([projectType, dataProject]) => {
      const dataAuthorsMutated = Object.entries(dataProject)
        .sort((a) => {
          return a[0] === 'Итого' ? 1 : -1;
        })
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

      const arr = Object.entries(dataAuthorsMutated);

      const value = arr[0][1];

      if (typeof value !== 'object') {
        const res = arr.map(([key, val]) => {
          return {
            month: key,
            projectName: projectType,
            projectType: projectType,
            value: val,
          };
        });
        return [res];
      }

      return arr.map(([projectName, projects]) => {
        return Object.entries(projects).map(([month, value]) => ({
          month,
          projectName,
          projectType,
          value,
        }));
      });
    })
    .filter(Boolean);

  return obj;
};

export const findProjectByName = (projectName, projects) =>
  projects.find((project) => project.projectName === projectName);

export const findProjectByName2 = (month, projects) =>
  projects.find((project) => project.month === month);

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
  const fromIndex = headers.indexOf('Всего');
  const item = headers.splice(fromIndex, 1)[0];
  headers.splice(headers.length, 1, item);
  return headers;
};

export const getColumnNames2 = (data) => {
  const result = [];

  data.forEach((row) => {
    const columns = row.reduce((acc, item) => {
      acc.push(item.month);
      return acc;
    }, []);
    result.push(...columns);
  });

  const headers = [...new Set(result)];
  return headers;
};

export const numberWithSpaces = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const showResponseMessage = (message, setMessage) => {
  setMessage(message);
  setTimeout(() => setMessage(''), 10000);
};
