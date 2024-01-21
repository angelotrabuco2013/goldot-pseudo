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
  content = '<form id="create" action="#" method="get"><label for="Instructions">Instructions:</label><br><textarea id="Instructions" name="Instructions" rows="5" cols="40" placeholder="Add some Instructions for your new project."></textarea><br/><textarea id="code" name="code" rows="7" cols="40" placeholder="Where the code goes."></textarea><br><label for="type">Language:</label><select name="type"><option value="html">Html</option><option value="js">Javascript</option><option value="java">Java</option><option value="python">Python</option><option value="cpp">C#</option><option value="cpp">C++</option><option value="php">PHP</option><option value="ruby">Ruby</option><option value="swift">Swift</option></select><br><br><input class="button" type="submit" value="Create"></form>';
  document.getElementById("content").innerHTML = content;
}

function createProject() {
  var content;
  content = '<p>uh oh! Looks like Goldot recieved an error!</p>';
  document.getElementById("content").innerHTML = content;
}