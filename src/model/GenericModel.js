class GenericModel {
  protected id: string;
  protected createdAt: date;
  protected updatedAt: date;
  protected deletedAt: date;

  constructor(options = {}) {
    this.id = options.id || null;
    this.createdAt = options.createdAt || new Date();
    this.updatedAt = options.updatedAt || new Date();
    this.deletedAt = options.updatedAt || null;
  }

  get id(): string {
    return this.id;
  }
  set id(id: string) {
    this.id = id;
  }
  get createdAt(): date {
    return this.createdAt;
  }
  set createdAt(createdAt: date) {
    this.createdAt = createdAt || new Date();
  }
  get updatedAt(): date {
    return this.createdAt;
  }
  set updatedAt(updatedAt: date) {
    this.updatedAt = updatedAt || new Date();
  }
  get deletedAt(): date {
    return this.deletedAt;
  }
  set deletedAt(deletedAt: date) {
    this.deletedAt = deletedAt || new Date();
  }
}