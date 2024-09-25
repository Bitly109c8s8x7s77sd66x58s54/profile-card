const insta = document.getElementById("instagram");
const tiktok = document.getElementById("tiktok");
const fb = document.getElementById("facebook");




fb.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const rest = document.getElementById("link");
    // Initialize the countdown timer
    let countdown = 3;
    let fbk = 'Facebook';
    document.getElementById('countdown').textContent = countdown;

    // Update the text content of the link
    rest.textContent = fbk;

    const interval = setInterval(function() {
        countdown--;
        document.getElementById('countdown').textContent = countdown;

        if (countdown === -1) {
            clearInterval(interval);

            // Redirect to the desired URL after countdown reaches 0
            window.location.href = 'https://www.facebook.com/avebayland'; // Replace with the target URL
            
            
            
            
            
            
            document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
        }
    }, 999);
});


tiktok.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const rest = document.getElementById("link");
    // Initialize the countdown timer
    let countdown = 3;
    let tktk = 'Tiktok';
    document.getElementById('countdown').textContent = countdown;

    // Update the text content of the link
    rest.textContent = tktk;

    const interval = setInterval(function() {
        countdown--;
        document.getElementById('countdown').textContent = countdown;

        if (countdown === -1) {
            clearInterval(interval);

            // Redirect to the desired URL after countdown reaches 0
            window.location.href = 'https://www.tiktok.com/@ave6840?_t=8q0i3A66YO0&_r=1'; // Replace with the target URL
            
            
            
            document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
        }
    }, 999);
});

insta.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const rest = document.getElementById("link");
    // Initialize the countdown timer
    let countdown = 3;
    let inst = 'Instagram';
    document.getElementById('countdown').textContent = countdown;

    // Update the text content of the link
    rest.textContent = inst;

    const interval = setInterval(function() {
        countdown--;
        document.getElementById('countdown').textContent = countdown;

        if (countdown === -1) {
            clearInterval(interval);

            // Redirect to the desired URL after countdown reaches 0
            // Attempt to open the Instagram app directly
window.location.href = "https://instagram.com/avebayland";





document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';

        }
    }, 999);
});



