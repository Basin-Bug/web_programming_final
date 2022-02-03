import Introduction  from "./components/introduction";
import Header from "./components/header";
import Footer from "./components/footer";
import Lesence from "./components/lesence";
import Main from "./components/main";
import CannotUse from "./components/connotUse";


function App() {
  var nowDate = new Date();
  if(nowDate.getDate() < 28){
    return (
      <div>
        <Header />
        <Introduction />
        <Main />
        <div class="sharethis-inline-share-buttons"></div>	
        <Footer />
        <Lesence />
      </div>
    );
  }else{
    return(
      <div>
        <Header />
        <CannotUse/>
        <div class="sharethis-inline-share-buttons"></div>	
        <Footer />
        <Lesence />
      </div>
    );
  }
}

export default App;