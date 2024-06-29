import { Routes,Route } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import MatrixChallenge from "./pages/Matrix";
import WebDeceptionRoot from "./pages/WebDeceptionRoot"
import WebDeceptionRobots from "./pages/WebDeceptionRobots";
import WebDeceptionR1 from "./pages/WebDeceptionR1";
import WebDeceptionR2 from "./pages/WebDeceptionR2";
import WebDeceptionR3 from "./pages/WebDeceptionR3";
import WebDeceptionSecrets from "./pages/WebDeceptionSecrets";
import SecretRecipe from "./pages/SecretRecipe";
import Crypto1 from "./pages/Crypto1";
import Crypto2 from "./pages/Crypto2";
import Crypto3 from "./pages/Crypto3";
import Crypto4 from "./pages/Crypto4";
import Crypto5 from "./pages/Crypto5";
import RevEng3 from "./pages/RevEng3";
import Forensics1 from "./pages/Forensics1";
import Forensics2 from "./pages/Forensics2";
import Forensics3 from "./pages/Forensics3";
import APITrailblazer from "./pages/APITrailblazer";

function App() {
  return (
    <main>
      <Routes>
        <Route path={"/home"} element={<Home/>}/>

        {/*Web Exploitation*/}
        <Route path={"/matrix_conundrum"} element={<MatrixChallenge/>}/>
        <Route path={"/web_of_deception"} element={<WebDeceptionRoot/>}/>
        <Route path={"/web_of_deception/robots.txt"} element={<WebDeceptionRobots/>}/>
        <Route path={"/web_of_deception/riddle1.html"} element={<WebDeceptionR1/>}/>
        <Route path={"/web_of_deception/h312jkl4h312jklh4jk1234jkl.html"} element={<WebDeceptionR2/>}/>
        <Route path={"/web_of_deception/12kl3j12kl3jl12;j3kl1jlk13.html"} element={<WebDeceptionR3/>}/>
        <Route path={"/web_of_deception/secrets.html"} element={<WebDeceptionSecrets/>}/>

        {/*Reverse Engineering */}
        <Route path={"/secret_recipe"} element={<SecretRecipe/>}/>
        <Route path={"/security_info"} element={<RevEng3/>}/>

        {/*Crypto */}
        <Route path={"/crypto/p1"} element={<Crypto1/>}/>
        <Route path={"/crypto/sdafjklasd"} element={<Crypto2/>}/>
        <Route path={"/crypto/asdnerwnds"} element={<Crypto3/>}/>
        <Route path={"/crypto/asdfg;hmxc"} element={<Crypto4/>}/>
        <Route path={"/crypto/das;kfljss"} element={<Crypto5/>}/>

        {/*Forensics*/}
        <Route path={"/corrupted_image"} element={<Forensics1/>}/>
        <Route path={"/memory_dump"} element={<Forensics2/>}/>
        <Route path={"/i_love_it"} element={<Forensics3/>}/>

        {/* Api trailblazer */}
        <Route path={"/api-trailblazer"} element={<APITrailblazer/>}/>
      
      </Routes>
    </main>
  );
}

export default App; 
