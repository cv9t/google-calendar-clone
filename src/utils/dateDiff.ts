import { Moment } from 'moment';

const dateDiff = (from: Moment, to: Moment, type: any): number => {
  return from.clone().startOf('day').diff(to.clone().startOf('day'), type);
};

export { dateDiff };
