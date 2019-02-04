import test from 'ava';
const displayCommits  = require('../promise');

test('returns commits', async t => {
  t.deepEqual(await displayCommits('jturello'), 
    [ { id: 1, repoid: 1, desc: 'initial commit' },
      { id: 2, repoid: 1, desc: 'add controllers' } ]
  );
})
