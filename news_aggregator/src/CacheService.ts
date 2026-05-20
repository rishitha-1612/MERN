import { Service } from "typedi";

@Service()
export class CacheService {

  private cache = new Map<string, any>();

  set(key: string, value: any): void {

    this.cache.set(key, value);
  }

  get(key: string): any {

    return this.cache.get(key);
  }
}