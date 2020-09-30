import React from "react";

let projectName ="";
let projectLanguage = "";
let created = "";
let repoURL = "";
let gitName = "";
let picLink = "";

function getQuote()
{
  let gitapi = '';

  fetch('https://api.github.com/users/hannovdw/repos')
  .then(function(response){
     gitapi =  response.json();
     return gitapi;
  })
  .then(function(gitjson){
    projectName = gitjson[0].name;
    projectLanguage = gitjson[0].language;
    created = gitjson[0].created_at;
    repoURL = gitjson[0].svn_url;
    gitName = gitjson[0].owner.login;
    picLink = gitjson[0].owner.avatar_url;


    setProject(projectName);
    setPic(picLink);
    setLanguage(projectLanguage);
    setCreated(created);
    setRepo(repoURL);
    setName(gitName);
    
    console.log(gitapi);
    return gitapi;
  })
  .catch((err) => {
    console.error(err);
  })
}

function setProject(name)
{
    projectName = name;
}
function setPic(link)
{
    picLink = link;
}
function setName(namee)
{
    gitName = namee;
}

function setRepo(repo)
{
    repoURL = repo;
}

function setCreated(cr)
{
    created = cr;
}
function setLanguage(lang)
{
    projectLanguage = lang;
}


function QuoteAPI(){
  return(
    <div className ="git">
        {getQuote()}
        <img src = {picLink} alt="GithubAvatar" height="200" width="200" className="gitimg" />
        <p><ul>Github Username: {gitName}</ul></p>
        <p>Project Name: {projectName}</p>
        <p>Project Language: {projectLanguage}</p>
        <p>Date Created: {created}</p>
        <p className="git">Repository URL: {repoURL}</p>
    </div>
  );
}

export default QuoteAPI;