import { helper } from '@ember/component/helper';

export default helper(function reducesize([str]) {
  if (!str) {
    return;
  }
  return str.length > 150 ? str.slice(0, 150) + '...' : str;
});
