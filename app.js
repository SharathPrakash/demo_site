const generateUserTemplate = (user) =>{
    return `<div class="animated fadeIn col-xs-offset-1 col-xs-3 user_card">
    <img src="${user.avatar_url}" alt="centerimg">
    <h3>${user.login}</h3>
    <a href="${user.html_url}" class="btn">View More</a>
  </div>`;
}

const apiCall = async function() {
    const asyncData = await fetch('https://api.github.com/users');
    const githubUsers = await asyncData.json();
    const templateArray = githubUsers.map((user) => {
        return generateUserTemplate(user);
    });
    console.log(templateArray);
    
    document.querySelector('#userList').innerHTML = templateArray; 
}

window.addEventListener('DOMContentLoaded', () => {
    // fetching data from url using promises
    // const data = fetch('https://api.github.com/users');
    // data.then((response) => {
    //     return response.json();
    // }).then((data) => {
    //     console.log(data);
    // }).catch(() => {
    //     console.log('something went wrong');
        
    // });

    apiCall();
    
});
