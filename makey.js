console.log('This is were we collect data and do tests on goldots devolopment')

function getYear() {
    var msg;
    var year;
    year =  new Date().getFullYear();
    msg = '©Goldot ' + year;
    document.getElementById("someText").innerHTML = msg;
}

function togglePW() {
    var x = document.getElementById("myPW");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function createTopic() {
  var content;
  content = '<a style="color: dodgerBlue;" href="make.html">Back</a><br/><br/><form id="create" action="#" method="get"><label for="Instructions">Instructions:</label><br><textarea id="Instructions" name="Instructions" rows="5" cols="40" placeholder="Add some Instructions for your new project."></textarea><br/><textarea id="code" name="code" rows="7" cols="40" placeholder="Where the code goes."></textarea><br><label for="type">Language:</label><select name="type"><option value="html">Html</option><option value="js">Javascript</option><option value="java">Java</option><option value="python">Python</option><option value="cpp">C#</option><option value="cpp">C++</option><option value="php">PHP</option><option value="ruby">Ruby</option><option value="swift">Swift</option></select><br><br><input class="button" type="submit" value="Create"></form>';
  document.getElementById("content").innerHTML = content;
}

function createProject() {
  var content;
  content = '<h2>Uh oh! Looks like Goldot recieved an error!</h2><img src="images/Sad.png" alt="error">';
  document.getElementById("content").innerHTML = content;
}

function welcomeUser() {
  let username = document.getElementById('username').value;
    let username = document.getElementById('password').value;
        let username = document.getElementById('email').value;
  if (username != '' ,  password != '', email != '') {
    document.getElementById("content").innerHTML = '<h2>Welcome to Goldot ' + username + '!</h2>';
  }
}

function showMail() {
  let user = 'TheRandomUser';
  let msg = 'Hello! I love your content!';
  document.getElementById('mail').innerHTML = '<div class="box"><h5>' + user + '</h5>' + msg +'</div>';
}
