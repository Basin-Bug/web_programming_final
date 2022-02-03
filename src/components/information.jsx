function Information(){
  var txt;
  var person = prompt("名前を入力してください：", "Basin Taro");
  while(person == null || person == "" || person === "Basin Taro") {
    person = prompt("名前を入力してください：", "Basin Taro");
  }
  txt = person;
  return(
    <div style = {{textAlign: "center"}}>
      <span>
      <button id = "info" className = "is-white"  onClick = {function(){
        person = prompt("名前を入力してください：", "Basin Taro");
        txt = person;
        document.querySelector('h2').textContent = "こんにちは，" + txt + "さん";
      }}>
        名前を変更
      </button>
      </span>
      <span>
      <h2 className="has-text-centered">こんにちは，{txt}さん</h2>
      </span>
    </div>
    
  )
}

export default Information;