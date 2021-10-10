module.exports = async function () {
  try {
    const { startDate, endDate, maxCount, minCount } = this.req.body;
    const recordsInRange = await getRecordsInRange.call(this, {
      startDate,
      endDate,
      maxCount,
      minCount,
    });
    this.res.locals = Object.freeze({
      code: 0,
      msg: 'Success',
      records: recordsInRange,
    });
  } catch (err) {
    this.res.locals = Object.freeze({
      status: err.status,
      code: 1,
      message: err.message,
    });
  }
  this.next();
};

async function getRecordsInRange({ startDate, endDate, maxCount, minCount }) {
  const records = await this.db.aggregate({
    model: 'records',
    query: [
      {
        $addFields: {
          totalCount: {
            $size: '$counts',
          },
        },
      },
      {
        $match: {
          createdAt: {
            $gt: new Date(startDate),
            $lt: new Date(endDate),
          },
          totalCount: {
            $gte: minCount,
            $lte: maxCount,
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: 1,
          createdAt: 1,
          totalCount: 1,
        },
      },
    ],
  });
  return records;
}
