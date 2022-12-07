// read file json from path public/bank.json

import { json } from 'express';
import fs from 'fs';
import path from 'path';
import { Transaction } from '../models';

export const getTransactions = () => {
  const jsonData = getJsonData();

  return jsonData.accounts;
};

export const searchTransactions = (search: string) => {
  const jsonData = getJsonData();
  const accounts = jsonData.accounts;
  const results = accounts.filter((account: Transaction) => {
    return account.description.toLowerCase().includes(search.toLowerCase());
  });
  return results;
};

export const getTransactionById = (id: string) => {
  const jsonData = getJsonData();
  const accounts = jsonData.accounts;
  const results = accounts.find((account: Transaction) => {
    return account.id === +id;
  });

  if (!results) {
    return null;
  }

  return results;
};

const getJsonData = (): { metaData: any[]; accounts: Transaction[] } => {
  const data = fs.readFileSync(path.join(__dirname, '../../public/bank.json'), 'utf8');

  return JSON.parse(data);
};
