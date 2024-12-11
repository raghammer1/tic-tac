export const checkRow = (rowIndex, newArr, curr) => {
  let i = 0;
  while (i < newArr[0].length) {
    const currNum = newArr[rowIndex][i];
    if (currNum !== curr) {
      return false;
    }
    i += 1;
  }
  return true;
};

export const checkCol = (colIndex, newArr, curr) => {
  let i = 0;
  while (i < newArr.length) {
    const currNum = newArr[i][colIndex];
    if (currNum !== curr) {
      return false;
    }
    i += 1;
  }
  return true;
};

export const checkLeftDiagonal = (rowIndex, colIndex, newArr, curr) => {
  if (rowIndex !== colIndex) {
    return false;
  }
  let i = 0;
  while (i < newArr.length) {
    const currNum = newArr[i][i];
    if (currNum !== curr) {
      return false;
    }
    i += 1;
  }
  return true;
};

export const checkRightDiagonal = (rowIndex, colIndex, newArr, curr) => {
  if (rowIndex + colIndex !== newArr.length - 1) {
    return false;
  }
  let i = newArr.length - 1;
  let j = 0;
  while (j < newArr.length) {
    const currNum = newArr[i][j];
    if (currNum !== curr) {
      return false;
    }
    i -= 1;
    j += 1;
  }
  return true;
};
