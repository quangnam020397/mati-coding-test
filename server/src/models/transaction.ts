export class Transaction {
  transactionDate: string;
  description: string;
  category: string;
  debit: number | null;
  credit: number | null;
  id: number;

  constructor(
    transactionDate: string,
    description: string,
    category: string,
    debit: number | null,
    credit: number | null,
    id: number
  ) {
    this.transactionDate = transactionDate;
    this.description = description;
    this.category = category;
    this.debit = debit;
    this.credit = credit;
    this.id = id;
  }
}
