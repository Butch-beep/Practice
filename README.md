<!DOCTYPE >
<html>
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@400;600&display=swap" rel="stylesheet"> 
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins&display=swap" rel="stylesheet"> 
</head>

<body>
  <div class="mainIcon">
    <img class ="container-mainIcon" src="./images/logo.svg"></div>
  <div class="container-one">
    <div class="container-three">
      <img class="illustration-mockups" src="./images/illustration-mockups.svg"></div>
    <div class="container-two">
      <h1 class="tagline">Build The Community Your Fans Will Love</h1>
      <p class="descriptions">Huddle re-images the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
      <div class="container-four">
      <button class="register" type="button">Register</button></div></div></div>
  <div class="socialIcon">
    <img class="logo-facebook" src="./images/logo-facebook.svg">
    <img class="logo-twitter" src="./images/logo-twitter.svg">
    <img class="logo-instagram" src="./images/logo-instagram.svg"></div>
</body>
</html>

@media (max-width: 375px) {
    body {
        background-image: url("./images/bg-mobile.svg");
        background-color: hsl(257, 40%, 49%);
        font-family: "Open Sans";
        font-size: 3vw;
        color: white;
    }

    h1 {
        font-family: "Poppins";
        font-weight: 600;
    }
    
    p,
    .register {
        font-family: "Poppins";
        font-weight: 400;
    }
    
    .mainIcon,
    .socialIcon,
    .container-two,
    .container-three {
        display: flex;
    }
    
    .mainIcon{
        height: auto;
        max-width: 10em;
        padding-top: 3em;
        padding-left: 3em;
    }
    
    .container-one {
        margin-top: 1em;
        padding: 3em;
    }
    
    .container-two {
        flex-direction: column;
        text-align: center;
    } 

    .register {
        height: auto;
        width: 150px;
        padding: 10px;
        border-radius: 40px;
        transition-duration: 0.3s;
        box-shadow: 0 8px 16px 0 #00000033, 0 6px 20px 0 #00000030;
        border: white;
    }
    
    .register:hover {
        background-color: hsl(300, 69%, 71%);
        color: white;
    }
    
    .socialIcon {
        justify-content: center;
        padding-top: 2em;
    }
    
    .logo-facebook,
    .logo-twitter,
    .logo-instagram {
        filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(200deg) brightness(106%) contrast(101%);
        padding-right: 10px;
        height: auto;
        width: 30px;
    }
    
    .container-mainIcon {
        height: auto;
        max-width: 100%;
    }
    
    .illustration-mockups {
        height: auto;
        width: 100%;
    }
    
    .tagline {
        font-size: 2.2em;
        margin-top: 2em;
        margin-bottom: 0;
    }

    .descriptions {
        font-size: 1.32em;
    }
}

@media (min-width: 376px) {
    body {
        background-image: url("./images/bg-desktop.svg");
        background-color: #674baf;
        background-size: contain;
        font-family: "Open Sans";
        color: white;
    }

    h1 {
        font-family: "Poppins";
        font-weight: 600;
        font-size: 2.4vw;
    }
    
    p,
    .register {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 1vm;
    }
    
    .mainIcon,
    .socialIcon,
    .container-one,
    .container-two,
    .container-three {
        display: flex;
    }
    
    .mainIcon{
        height: auto;
        max-width: 10%;
        padding: 1.5em 0 0 4em;
    }
    
    .container-one {
        margin: 3em 3em 0 3em;
        justify-content: center;
    }
    
    .container-two {
        flex-direction: column;
        padding: 50px;
    }
    
    .container-three {
    }
    
    .register {
        height: auto;
        width: 150px;
        padding: 10px;
        border-radius: 40px;
        transition-duration: 0.3s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        background-color: white;
        border: white;
    }
    
    .register:hover {
        background-color: hsl(300, 69%, 71%);
        color: white;
    }
    
    .socialIcon {
        justify-content: flex-end;
        padding-right: 3em;
    }
    
    .logo-facebook,
    .logo-twitter,
    .logo-instagram {
        filter: invert(100%) sepia(100%) saturate(1%) hue-rotate(200deg) brightness(106%) contrast(101%);
        padding-right: 10px;
        height: auto;
        width: 30px;
    }
    
    .container-mainIcon {
        height: auto;
        max-width: 100%;
    }
    
    .illustration-mockups {
    }
    
}

body {
    margin: 0;
    padding: 0;
}
