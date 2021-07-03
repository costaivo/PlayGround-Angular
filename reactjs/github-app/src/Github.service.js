import axios from 'axios';
    
const githubUrl =`https://api.github.com/users`

  async function getGithubUser(userName) {
    const response = await axios.get(
      `${githubUrl}/${userName}`
    );
  return response;
  }


export default getGithubUser;
