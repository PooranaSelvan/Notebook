export function initialize(applicationInstance) {
  let store = applicationInstance.lookup('service:store');
  store.findAll('notebook');
  store.findAll('note');
}

export default {
  initialize,
};
