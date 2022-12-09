import { Router } from 'express';
import dayjs from 'dayjs';
import DataResponse from '../models/DataResponse';
import collectionServ from '../services/collection';

const router = Router();

router.get('/', async (request, response) => {
  // get date range from query params
  const { from, to } = request.query;

  if (!from || !to) {
    return response.status(400).json({ message: 'Missing query params' });
  }
  const fromDate = dayjs(from.toString());
  const toDate = dayjs(to.toString());
  if (!fromDate.isValid() || !toDate.isValid()) {
    return response.status(400).json({ message: 'Invalid date' });
  }

  // check if from date is before to date
  if (fromDate.isAfter(toDate)) {
    return response.status(400).json({ message: 'Invalid date range' });
  }

  // get days between fromDate and toDate including fromDate and toDate
  const days = Array.from({ length: toDate.diff(fromDate, 'day') + 1 }, (_, i) => {
    return fromDate.add(i, 'day');
  });

  const _data = await collectionServ.getCollectionsInRangeDate(fromDate.toDate(), toDate.toDate());

  const obj = new DataResponse(_data, true, 200);
  response.status(obj.status);

  return response.json(obj);
});

export default router;
