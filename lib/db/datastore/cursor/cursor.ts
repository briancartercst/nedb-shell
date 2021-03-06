
import * as NeDBDataStore from "nedb";
import NeDB = NeDBDataStore;

import { _Sort, _Skip, _Limit, _Exec, _Count,
        _toArray, _Pretty} from './index';

export class Cursor{
  private cursor: Cursor;
  private _sort: {} = {};
  private _skip: number = 0;
  private _limit: number = 20;

  constructor(cursor: any){
    this.cursor = cursor;
  }
  sort = _Sort;
  skip = _Skip;
  limit = _Limit;
  count = _Count;
  exec = _Exec;
  pretty = _Pretty;
  toArray = _toArray;
}
