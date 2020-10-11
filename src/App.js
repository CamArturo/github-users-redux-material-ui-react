import React, { useState } from 'react';
import Header from './components/Header'
import './App.scss';
import CardList from './components/CardList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
const axios = require('axios');
const user = {
  "login": "CamArturo",
  "id": 8752377,
  "node_id": "MDQ6VXNlcjg3NTIzNzc=",
  "avatar_url": "https://avatars0.githubusercontent.com/u/8752377?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/CamArturo",
  "html_url": "https://github.com/CamArturo",
  "followers_url": "https://api.github.com/users/CamArturo/followers",
  "following_url": "https://api.github.com/users/CamArturo/following{/other_user}",
  "gists_url": "https://api.github.com/users/CamArturo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/CamArturo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/CamArturo/subscriptions",
  "organizations_url": "https://api.github.com/users/CamArturo/orgs",
  "repos_url": "https://api.github.com/users/CamArturo/repos",
  "events_url": "https://api.github.com/users/CamArturo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/CamArturo/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Camilo Snapp",
  "company": null,
  "blog": "",
  "location": "Tampa, FL",
  "email": null,
  "hireable": null,
  "bio": "Front-End Developer with experience creating hand-coded websites. I am passionate about learning and applying new skills. ",
  "twitter_username": null,
  "public_repos": 35,
  "public_gists": 3,
  "followers": 7,
  "following": 23,
  "created_at": "2014-09-12T17:10:28Z",
  "updated_at": "2020-10-04T23:21:22Z"
}

function App() {
  const [inputValue, handleSearchInput] = useState('');
  let [users, addUser] = useState([user]);

  function updateUsers (userData) {
    addUser([...users, userData])
  }

  async function getUser() {
    try {
      const response = await axios.get(`https://api.github.com/users/${inputValue}`);
      updateUsers(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
    <CssBaseline />
    <div className="App">
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header onSearchInputChange={handleSearchInput} getUser={getUser}></Header>
        </Grid>
        
        <CardList users={users}></CardList>
      </Grid>
    </div>
    </>
  );
}

export default App;
