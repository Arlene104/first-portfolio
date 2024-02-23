function openPopup(){
    fetch('signin.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('popup').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching signin.html:', error);
        });
}

function closePopup(){
    document.getElementById('popup').innerHTML = ''; // Clear the popup content
}
