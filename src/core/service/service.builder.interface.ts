export interface IServiceBuilder<T> {

  BuildInstance(): T;
  BuildInstance(id: number): T;
  BuildInstance(id: number, descriptor: string): T;

  BuildSeekInstance(): T;

}
