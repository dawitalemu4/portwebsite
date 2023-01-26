<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dawit Alemu</title>
     <link rel="icon" type="image/png" href="da.png">
    <link rel="stylesheet" href="styles.css" />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
      integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Navbar Section -->
    <nav class="navbar">
      <div class="navbar__container">
     
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item1" id = "navbar__item1">
            <a href="/" id = "home" class="navbar__links">Home</a>
          </li>
          <li class="navbar__item2">
            <a href="/" id = "experience" class="navbar__links">Experience</a>
          </li>
          <li class="navbar__item3">
            <a href="/" id = "projects" class="navbar__links">Projects</a>
          </li>
          <li class="navbar__btn">
            <a href="/" id = "contact" class="button">Contact</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hidden">
    <div class="main" id ="homeSection">
      <div class="main__container">
        <div class="main__content">
          <h1>Dawit Alemu</h1>
          <p>Aspiring Software Developer</p>
          <div id="scroll-down-animation">
            <span class="mouse">
              <span class="move"></span>
            </span>
          </div>
        </div>
        <div class="main__img--container">
          <img id="main__img" src="yoshi.png" />
          <img src="eyes.png" class= "eye" id="eyes"/>
        </div>
       
        </div>
      </div>
    </div>
  </section>

    <!-- Services Section -->
    <section class="hidden">
    <div class="services">
      <h1>About Me</h1>
      <img id="da" src="da.jpg" alt="da">
      <div id="pacman-container">
       
        <img src="dots.png" id="dots"/>
     </div>
     
     <script>
        var images = [
          
          'dots.png',
          'dots.png','dots.png','dots.png','dots2.png',
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
            '11.png'
            
            
        ];
        var currentImage = 0;
     </script>
     
      
      <p>Hello! My name is Dawit Alemu and I'm currently a sophomore at Towson University. <br><br> My main interests are game and web development. <br><br> Click while he's pulling below for a suprise! </p>
      
      <h4>Experience</h4>
      <div id="game-container">
        <img id="game-gif" src="luffy fish.gif" alt="Game GIF">
        <h5>Click while he's pulling</h5>
        <img class="game-image" src="hatclose.png" id="hatclose" style="display:none;">
        <img class="game-image" src="hatmid.png" id="hatmid" style="display:none;">
        <img class="game-image" src="hatopen.png" id="hatopen" style="display:none;">
      </div>    


      <h7>Above are some langauges I've used, mainly Javascript/CSS/HTML, C++, and Java.<br><br>You can also view my resume by clicking <a href="https://docs.google.com/document/d/185MMC8HKNxFohJYiGbxKixKi0EAvASdd/edit" target="_blank">here</a> <br><br>If you would like to be part of that image in the future, go to the contact section at the bottom!</h7>
      
      <h3>Projects</h3>
      <h8>Coming Soon...</h8>
      
      <div class="services__container">
        
        </div>
      </div>
    </div>
  </section>

    <!-- Footer Section -->
    <div class="footer__container">
      <div class="footer__links">
<h1>*Use desktop or laptop for full experience (mini games and illusions)*</h1>

        <form action="https://api.web3forms.com/submit" method="POST">

          <input type="hidden" name="access_key" value="d36e5828-ad1a-4661-9a5a-5252d677f340">
      
          Name<input id="ename" type="text" name="name" required>
          Email<input id="email" type="email" name="email" required>
          Message<input id="message" type="message" name="message" required>
          <input type="hidden" name="redirect" value="https://web3forms.com/success">
      
          <button id="submit" type="submit">Send Email</button>
      
      </form>

        <div class="footer__link--wrapper">
          <div class="footer__link--items">
            
            
          </div>
          <div class="footer__link--items">
          
            </a>
            <a
              class="social__icon--link"
              href="https://www.linkedin.com/in/dawit-alemu4/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
            class="social__icon--link"
            href="https://github.com/dawitalemu4"
            target="_blank"
            aria-label="Github"
          >
          <i class="fab fa-github"></i>
          </a>

          <a
          class="social__icon--link"
          href="https://mail.google.com/mail?view=cm&fs=1&to=dndawita@gmail.com&su=Draft"
          target="_blank"
          aria-label="Email"
        >
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>
          </div>
        </div>
        <img id="pikachu" src="pikachu.gif" alt="pikachu">
      </section>

    </div>
    <script src="app.js"></script>
  </body>
</html>
