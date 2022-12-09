import request from 'supertest';
import app from '../index';

describe('GET /calendar', () => {
  describe('when get data with full params', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get(
        '/api/v1/calendar?from=2022-12-03T17:00:00.000Z&to=2022-12-10T17:00:00.000Z',
      );

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('data');
    });

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get(
          '/api/v1/calendar?to=2022-12-10T17:00:00.000Z',
        );
        expect(response.statusCode).toBe(400);
      });
  });
});
