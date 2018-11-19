export default {
  eos: {
    // authorization account private key
    keyProvider: ['5J3HpoXuz67v1eiQWwB3GZMwUVhLq6HE6Kjm6Jt66PRE3KYWbHX'],
    httpEndpoint: 'http://127.0.0.1:8888',
    chanId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
    contract: {
      scope: 'eos.a',
      code: 'eos.test',
      table: 'task',
      authorization: 'eos.a',
    },
  },
};
