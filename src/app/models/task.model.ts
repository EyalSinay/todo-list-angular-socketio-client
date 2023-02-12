export class Task {
  constructor(
    public _id: string,
    public task: string,
    public done: boolean,
    public isOnEdit: boolean
  ) {}
}
