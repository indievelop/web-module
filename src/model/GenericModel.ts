class GenericModel {
  protected _id: string;
  protected _createdAt: Date;
  protected _updatedAt: Date;
  protected _deletedAt: Date | null;

  constructor() {
    this._createdAt = new Date();
    this._updatedAt = new Date();
    this._deletedAt = null;
  }

  get id(): string {
    return this._id;
  }
  set id(_id: string) {
    this._id = _id;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  set createdAt(_createdAt: Date) {
    this._createdAt = _createdAt || new Date();
  }
  get updatedAt(): Date {
    return this.createdAt;
  }
  set updatedAt(_updatedAt: Date) {
    this._updatedAt = _updatedAt || new Date();
  }
  get deletedAt(): Date | null {
    return this._deletedAt;
  }
  set deletedAt(_deletedAt: Date | null) {
    this._deletedAt = _deletedAt || null;
  }
}

export default GenericModel;