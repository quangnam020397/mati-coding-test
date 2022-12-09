import { Event } from './Event';

export class Collection {
  constructor(public id: string, public name: string, public index: number, public date: Date, public items: Event[]) {}
}
