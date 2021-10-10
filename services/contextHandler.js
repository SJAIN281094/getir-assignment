module.exports = async (req, res) => {
  if(isObjectEmpty(res.locals)){
    res.status(404);
    return res.send(
      Object.freeze({
        success: false,
        code: 1,
        error: {
          message: 'Url not found',
        },
      }),
    );
  }

  const status = res.locals.status || 200;
  res.status(status);
  if (status >= 200 && status <= 209) {
    return res.send(
      Object.freeze({
        success: true,
        data: res.locals || null,
      }),
    );
  } else {
    return res.send(
      Object.freeze({
        success: false,
        error: {
          message: res.locals?.message || 'Something went wrong',
        },
      }),
    );
  }
};

function isObjectEmpty(object) {
  var isEmpty = true;
  for (keys in object) {
    isEmpty = false;
    break;
  }
  return isEmpty;
}
