
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

/**** NESTED CALLBACKS (CALLBACK HELL) ****

getUser('jturello', (user) => {
  getRepo (user, (repo) => {
    getCommits (repo, (commits) => {
      console.log(commits);
    });
  });
});

*******************************************/

getUser('jturello', getUserRepo);

function getUserRepo (user) {
  getRepo(user, getRepoCommits);
}

function getRepoCommits (repo) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(username, callback) {
 setTimeout(() => {
   const user = users.find( obj => obj.name === username);  
   console.log(`Retrieving user ${JSON.stringify(user)} from database...`);
   callback(user);
 }, 2000);
}

function getRepo(user, callback) {
  setTimeout( () => {
    const repo = repos.find( obj => obj.userid === user.id);
    console.log(`Retrieving repo ${JSON.stringify(repo)} from database...`);
    callback(repo);
  }, 2000);
}

function getCommits (repo, callback) {
  setTimeout( () => {
    const repocommits = commits.filter( obj => obj.repoid === repo.id);
    console.log(`Retrieving commits for repo ${JSON.stringify(repo)} from database...`);
    callback(repocommits);
  }, 2000);
}

