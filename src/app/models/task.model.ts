export class Task {
  constructor(
    private _id: string,
    public task: string,
    public done: boolean,
    public isOnEdit: boolean
  ) {}
}
