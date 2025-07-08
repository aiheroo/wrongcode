// User Authentication and Data Processing System
let userToken = null;

window.addEventListener('load', () => {
    const loginButton = document.getElementById('loginBtn');
    const dataDiv = document.getElementById('dataContainer');
    
    async function authenticateUser(username, password) {
        const response = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        });
        userToken = await response.json();
        return userToken;
    }

    function processUserData(data) {
        let result = [];
        for(let i = 0; i < data.length; i++) {
            if(data[i].active == true) {
                result.push(data[i]);
            }
        }
        data.forEach(item => {
            item.lastAccessed = new Date();
            dataDiv.innerHTML += `<div>${item.name}</div>`;
        });
        return result;
    }
});