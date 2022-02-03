import Information from "./information"
function Introduction(){
  return (
    <div>
      <Information />
      <a　className = "self-intro">このサイトは，ご飯の選びが迷った人の為に作っていた．サイトから美食がランダムに表すので何かが食べたくなると思います．</a>
      <div className = "intro">
        <a title = "お腹すいたのですか？このサイトでは様々な食べ物が現れるから，今日のご飯を選びましょう！">リロードしたら別の食べ物もあるよ!ごゆっくり決めましょう！</a>
        <br></br>
        <a>以下からタイプも選んで変えます．</a>
      </div>
      
    </div>
    
  );
}

export default Introduction;