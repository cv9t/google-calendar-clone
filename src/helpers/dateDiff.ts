import { Moment } from 'moment';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function dateDiff(from: Moment, to: Moment, type: any): number {
  return from.clone().startOf('day').diff(to.clone().startOf('day'), type);
}

export { dateDiff };
