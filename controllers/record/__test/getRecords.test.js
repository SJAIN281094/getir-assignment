const RecordController = require('../index');
const services = require('../../../services');
const utils = require('../../../utils');

describe('Get Records', () => {
  let recordInstance;
  const aggregate = jest.fn();

  const mockRequest = (props) => {
    return {
      headers: props.headers || {},
      body: props.body || {},
      params: props.params || {},
      query: props.query || {},
      files: props.files || [],
    };
  };

  const mockResponse = () => {
    return {
      locals: {},
    };
  };

  const mockDatabase = () => {
    return {
      aggregate,
    };
  };

  beforeEach(() => {
    aggregate.mockReset();
  });

  test('should return records', async () => {
    aggregate.mockResolvedValue([{
      key: '2016-01-01',
      createdAt: '2018-12-31',
      totalCount: 1000,
    }]);

    services.db = mockDatabase();
    recordInstance = new RecordController({
      services,
      utils,
      req:{
        headers: {},
        body: {},
        params: {},
        query: {},
        files: [],
      },
      res: {},
      next: () => {},
    });

    recordInstance.req = mockRequest({
      body: { startDate: '2016-01-01', endDate: '2018-12-31', maxCount: 1000, minCount: 0 },
    });
    recordInstance.res = mockResponse();
    await recordInstance.getRecords();
    
    expect(aggregate.mock.calls.length).toBe(1);
    expect(recordInstance.res.locals).toHaveProperty('code');
    expect(recordInstance.res.locals.records[0].code).toBeFalsy();
    expect(recordInstance.res.locals).toHaveProperty('msg');
    expect(recordInstance.res.locals.msg).toContain('Success');
    expect(recordInstance.res.locals.records[0]).toHaveProperty('key');
    expect(recordInstance.res.locals.records[0].key).not.toBeFalsy();
    expect(recordInstance.res.locals.records[0]).toHaveProperty('createdAt');
    expect(recordInstance.res.locals.records[0].createdAt).not.toBeFalsy();
    expect(recordInstance.res.locals.records[0]).toHaveProperty('totalCount');
    expect(recordInstance.res.locals.records[0].totalCount).not.toBeFalsy();
  });
});
