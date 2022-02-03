import morning from "../images/morning.png";
import afternoon from "../images/afternoon.png";
import evening from "../images/evening.png";
import do_not_sleep from "../images/do_not_sleep.png";
import do_not_eat from "../images/do_not_eat.png";
//import normal from "../images/normal.png";

function Message(){
  var d = new Date();
  let time = d.getHours();
  if(time >= 6 && time < 11){
    return (
      <div>
        <img
          id = "mes"
          src= {morning}
          width = '20%'
          height = '30%'
          align = 'right'
          alt = "good morning"
        />
        <div className="control" style = {{border:"1px"}, {width:"500px"}, {height:"500px"}}>
          <button id = "btn" type="submit"  className="button is-black" onClick= {function(){
            document.getElementById("mes").style.display = "none";
            document.getElementById("mes").alt = "";
            var bgColor = document.getElementById("btn");
            bgColor.style.backgroundColor = "white";
            bgColor.style.color = "black";
          }}>
            もう食べました
          </button>
        </div>
      </div>
    );
  }else if(time >= 11 && time < 14){
    return (
      <div>
        <img
          id = "mes"
          src= {afternoon}
          width = '20%'
          height = '30%'
          align = 'right'
          alt = "good afternoon"
        />
        <div className="control" style = {{border:"1px"}, {width:"500px"}, {height:"500px"}}>
          <button id = "btn" type="submit"  className="button is-black" onClick= {function(){
            document.getElementById("mes").style.display = "none";
            document.getElementById("mes").alt = "";
            var bgColor = document.getElementById("btn");
            bgColor.style.backgroundColor = "white";
            bgColor.style.color = "black";
          }}>
            もう食べました
          </button>
        </div>
      </div>
    );
  }else if(time >= 17 && time <= 22){
    return (
      <div>
        <img
          id = "mes"
          src= {evening}
          width = '20%'
          height = '30%'
          align = 'right'
          alt = "good evening"
        />
        <div className="control" style = {{border:"1px"}, {width:"500px"}, {height:"500px"}}>
          <button id = "btn" type="submit"  className="button is-black" onClick= {function(){
            document.getElementById("mes").style.display = "none";
            document.getElementById("mes").alt = "";
            var bgColor = document.getElementById("btn");
            bgColor.style.backgroundColor = "white";
            bgColor.style.color = "black";
          }}>
            もう食べました
          </button>
        </div>
      </div>
    );
  }else if(time >= 1 && time < 6){
    return (
      <div>
        <img 
          id = "mes"
          src= {do_not_sleep}
          width = '20%'
          height = '30%'
          align = 'right'
          alt = "good night"
        />
        <div className="control" style = {{border:"1px"}, {width:"500px"}, {height:"500px"}}>
          <button id = "btn" type="submit"  className="button is-black" onClick= {function(){
            document.getElementById("mes").style.display = "none";
            document.getElementById("mes").alt = "";
            var bgColor = document.getElementById("btn");
            bgColor.style.backgroundColor = "white";
            bgColor.style.color = "black";
          }}>
            もう食べました
          </button>
        </div>
      </div>
    );
  }else{
    return (
      <div>
        <img 
          id = "mes"
          src= {do_not_eat}
          width = '20%'
          height = '30%'
          align = 'right'
          alt = "you should eat something"
        />
        <div className="control" style = {{border:"1px"}, {width:"500px"}, {height:"500px"}}>
          <button id = "btn" type="submit"  className="button is-black" onClick= {function(){
            document.getElementById("mes").style.display = "none";
            document.getElementById("mes").alt = "";
            var bgColor = document.getElementById("btn");
            bgColor.style.backgroundColor = "white";
            bgColor.style.color = "black";
          }}>
            もう食べました
          </button>
        </div>
      </div>
    );
  }
}

export default Message;