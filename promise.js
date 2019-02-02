
const users = [
  { id: 1, name: 'jturello' },
  { id: 2, name: 'mbelmont' },
  { id: 3, name: 'tsmith' }
];

const repos = [
  { id: 1, userid: 1, name: 'jt\'s repository' },
  { id: 2, userid: 2, name: 'mb\'s repository' },
  { id: 3, userid: 3, name: 'ts\'s repository' }
];
  
const commits = [
  { id: 1, repoid: 1, desc: 'initial commit' }, 
  { id: 2, repoid: 1, desc: 'add controllers' },
  { id: 3, repoid: 2, desc: 'initial commit' }
];

// getUser('jturello')
//   .then(user => getRepo(user))
//   .then(repo => getCommits(repo))
//   .then(commits => console.log(commits))
//   .catch(err => console.log('Error:', err.message));

async function displayCommits() {
  try {
    const user = await getUser('jturello');
    const repo = await getRepo(user);
    const commits = await getCommits(repo);
    console.log(`Commits for user ${user.name} from repo ${repo.name}:`);
    console.log(commits);
  }
  catch(err) {
    console.log(`Error: ${err.message}`);
  }
}

displayCommits();

function getUser(username) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      // console.log(`Retrieving user ${JSON.stringify(user)} from database...`);
      console.log(`Retrieving user from datastore...`);
      const user = users.find( obj => obj.name === username);  
      if (!user) {
	reject(new Error(`User ${username} not found in datastore`));
      } else {
	resolve(user);
      }
    }, 2000);
  });
}

function getRepo(user) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log(`Retrieving repo for user ${JSON.stringify(user)}...`);
      const repo = repos.find( obj => obj.userid === user.id);
      if (!repo) {
	reject(new Error(`Repo for user ${JSON.stringify(user)} not found`));
      } else {
	resolve(repo);
      }
    }, 2000);
  });
}

function getCommits (repo) {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log(`Retrieving commits for repo ${JSON.stringify(repo)}...`);
      const repocommits = commits.filter( obj => obj.repoid === repo.id);
      if (repocommits.length === 0) {
	reject(new Error(`No commits found for repo ${JSON.stringify(repo)}`));
      } else {
	resolve(repocommits);
      }
    }, 2000);
  });
}

