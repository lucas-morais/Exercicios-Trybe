export interface Entity {
  id?: number
}


export default interface CRUD<T extends Entity> {
  getById(id: number):Promise<T>;
  getAll():Promise<T[]>;
  create(obj: T): Promise<T>
  update(obj: T): Promise<void>
  deleteById(id: number): Promise<void>
}