console.log('This is were we collect data and do tests on goldots devolopment')

function profile() {
  let user = "devoloperUser";

  let pfp = document.getElementById('pfp');
  pfp.src = "images/default.svg";
  document.getElementById('title-header').innerHTML = user + "'s profile";
  document.title = user + " on Goldot";
}

function getYear() {
    var msg;
    var year;
    year =  new Date().getFullYear();
    msg = 'Goldot inc ©' + year;
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
  content = '<br/><form id="create" action="#" method="get"><label for="Instructions">Instructions:</label><br><textarea id="instructions" name="Instructions" rows="5" cols="40" placeholder="Add some Instructions for your new project.">';
  content += '</textarea><br/><textarea id="code" name="code" rows="7" cols="40" placeholder="Where the code goes."></textarea><br><label for="type">Language:</label><select name="type"><option value="html">Html</option><option value="js">Javascript</option>';
  content += '<option value="java">Java</option><option value="python">Python</option><option value="cpp">C#</option><option value="cpp">C++</option><option value="php">PHP</option><option value="ruby">Ruby</option><option value="swift">Swift</option></select><br><br><input class="button" type="submit" value="Create" onclick="createA()"></form>';
  document.getElementById("content").innerHTML = content;
}

function createProject() {
  var content;
  content = '<h3>Please select a button</h3><button class="button"> <> HTML editor</button><br/><br/><button class="button"> {} javascript editor</button><br/><br/><button class="button">Gogo Goldot</button>';
  document.getElementById("content").innerHTML = content;
}

function welcomeUser() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  let email = document.getElementById('email').value;
  if (username != '', password != '', email != '') {
    document.getElementById("content").innerHTML = '<h2>Welcome to Goldot ' + username + '!</h2>';
  }
}

function showMail() {
  let user = 'TheRandomUser';
  let msg = 'Hello! I love your content!';
  document.getElementById('mail').innerHTML = '<div class="box"><h5>' + user + '</h5>' + msg +'</div>';
}

function createA() {
  let info = document.getElementById('instructions').value;
  let code = document.getElementById('code').value;
  console.log(info + code);

  var content;
  content = info + '</div><br/><br/>' + code;
  document.getElementById('content').innerHTML = content;
  if ( content = document.getElementById('content') ) {
    console.log('Topic creation sucessful');
  }else{
    console.log('Topic creation failed');
  }
}
