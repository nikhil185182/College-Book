import Navigation from "./Navigation";
import MainNavigation from "./MainNavigation";
import Main from "./Main";
import Ads from "./Ads";

function Home() {
    if(localStorage.getItem('user')==''){
        return (
          <div>
            <Navigation/>
            <Ads/>
          </div>
        );
      }else{
        return (
          <div>
            <MainNavigation/>
            <Main/>
          </div>
        );
    }
}

export default Home;