function saklar(params) {
      console.log(params);
      let lampu1 = document.getElementById("lampu1");
      if(params == "on"){
        lampu1.src = "on.gif";
      }
      if(params == "off"){
        lampu1.src = "off.gif";
      }
      return lampu1;
}
var on = new Audio();
  on.src = "on.mp3";
      
var off = new Audio();
  off.src = "off.mp3"