export class Task {
  constructor(
    public _id: string,
    public text: string,
    public done: boolean,
    public isOnEdit: boolean
  ) {}
}
