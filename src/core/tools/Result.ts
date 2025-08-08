
export enum ResultType {
  error,
  warning,
  successful,
  info
}

export class Result {

  constructor(
    public id: number = 0,
    public message: string,
    public resultType: ResultType = ResultType.info,
    public body: string = '') {

  }

  public isSucceeded: boolean = false;



}