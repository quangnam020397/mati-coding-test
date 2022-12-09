export class Event {
  constructor(
    public id: string,
    public name: string,
    public date: Date,
    public description: string,
    public collectionId: string,
    public quantity: number,
    public index: number,
  ) {}
}
