const container = document.querySelector('.container');
const Button = document.querySelector('.loginOrSignup')

let loginBoolean = false
const changeLayout = () => {
    loginBoolean = !loginBoolean
    container.innerHTML = ''
    displayFunction()
}
const displayFunction = () => {

    loginBoolean ? container.innerHTML += `<div class="container">
    <div class="firstcon">
        <h1>Instagram</h1>
        <input type="tel" class=" username" placeholder="Phone Number, Email or Username">
        <input type="password" class="password" placeholder="Password">
        <button class="log" style="background-color: #B2DFFC">Log In</button>
        <div class="or">
            <h6>____________________</h6>
            <h5>OR</h5>
            <h6>_____________________</h6>
        </div>
         <div class="faceb">
            <img src="https://tse2.mm.bing.net/th?id=OIP.GnLUjWCQ9om9O8jVngiFFgHaHa&pid=Api&P=0">
            <p><b>Log in with facebook</b></p>
        </div>
        <div class="pargra"><p style="margin-top:1vh;">Forgot password</p></div>
         
        
    </div>
    <div class="secondcon">
        <div class="main">
            <p>Don't have an account?</p>
            <button class="loginOrSignup" onclick="changeLayout()"><b>Sign up</b></button>
        </div>
    </div>
    <div class="Thirddcon">
        <div><p class="get">Get the app</p></div>
        <div class="googleplay">
            <img class="goog" src="https://tse1.mm.bing.net/th?id=OIP.5XrTLHgx7u1AgW3jR4i2uQHaCN&pid=Api&P=0">
            <img class="micro"src="https://tse1.mm.bing.net/th?id=OIP.rDoIS3xLd70NYED0G9lDcAHaC3&pid=Api&P=0">
        </div>
    </div>
    
</div>`: container.innerHTML += `<div class="container">
    <div class="tainer">
        <div class="signform">
        <h1 style="margin-left: 10vw;"><i><b>Instagram</b></i></h1>
        <p style="margin-left:5vw;font-size: 1.2rem;color: gray ;"><b>Sign up to see photo and videos</b> </p>
        <p style="margin-left: 9vw;font-size: 1.2rem;color: gray; margin-top: -2vh;"><b>from your friends.</b></p>
        <button style="display:flex; width:20vw;margin-left:5vw; height: 5.5vh; background-color: #0095F6;border: 0.01vh solid transparent;border-radius: 3px;">
            <img style="width: 1.6vw;height:2.5vh; margin-left: 3vw; margin-top: 1vh;" src="data:image/png;base64,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">
            <p style="margin-top:0.9vh; color: white; margin-left:1vw;">Log in with Facebook</p></button>
        <div id="hr"><hr>OR<hr></div>
        <input type="email or number" placeholder="Mobile Number or Email">
        <input type="text" placeholder="Full Name">
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <div id="prgah" style="width: 20vw; margin-left:5vw"><p style="font-size:0.80em ; font-color:#FFFFFF ">People  who use our service may have uploaded your contact information to instagram.<b>Learn More</b></p>
        <p style="font-size:0.80em ;">By using  up, your agree  to our <b>Terms, Privacy Policy </b>and<b>Cookies Policy</b></p></div>
        <button class="loginOrSignup"  style="width: 20vw; height:5vh; background-color:hsla(193, 100%, 48%, 0.714);border: 0.01vh solid transparent; border-radius: 3px; margin-left: 5vw;">Sign up</button>

        <div class="sedic" style="width:30vw; height:12vh;margin-top: 2.5vw; border:0.01vh solid #ccc; display: flex;"><p style="margin-left: 5vw; margin-top: 3vh;">Have an account?</p><button style="width: 5vw; height :5vh; margin-top:2.5vh; border:0.01vh solid transparent; color: #0095F6;" onclick="changeLayout()">Log in</button></div>
        <div class="Thirddcon">
        <div><p class="get">Get the app</p></div>
        <div class="googleplay">
            <img class="goog" src="https://tse1.mm.bing.net/th?id=OIP.5XrTLHgx7u1AgW3jR4i2uQHaCN&pid=Api&P=0">
            <img class="micro"src="https://tse1.mm.bing.net/th?id=OIP.rDoIS3xLd70NYED0G9lDcAHaC3&pid=Api&P=0">
        </div>
    </div>
    </div>
    </div>
</div>`
}
displayFunction()
Button.addEventListener('click', () => {
    loginBoolean = !loginBoolean
    container.innerHTML = ''
    displayFunction()
})
