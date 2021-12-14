import React from "react";
import '../../src/style/start.css';
import enter from "./enter.jpeg"
function Start()
{
   return(
   <div className="parent"> 
   <div className="header">
    <h1>Day2Day</h1>
    <h1 id="heading">CHOOSE THE SECTIONS YOU WOULD LIKE TO START WITH</h1>
</div>
<div className="main1">
    <form>
    
        <div className="right">
            
            <div className="inf">
                <p className="notes1">Notes+</p>
                <p>Have problems keeping your notes organised? Make notes for each subject and keep them sorted easily in the notes sections</p>
                <input type="checkbox"/>
            </div>
            <div className="img">
                <img src="data:image/jpeg;base64,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" alt="Image not available"/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="left">
            <div className="inf">
                <p className="notes1">To-do list</p>
                <p>Always busy? Too many tasks at hand? Don't worry we got you covered! Keep track of your tasks easily</p>
                <input type="checkbox"/>
            </div>
            <div className="img">
                <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt="Image not available"/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="right">
            <div className="inf">
                <p className="notes1">Fitness Tracking</p>
                <p>Worried about your health? Be on top of your health by calculating your Calories, BMI and Metabolism rate all in one place.</p>
                <input type="checkbox"/>
            </div>
            <div className="img">
                <img src="data:image/png;base64,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" alt="Image not available"/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="left" >
            <div className="inf">
                <p className="notes1">Entertainment</p>
                <p>Never have to miss out on your favorite shows and new upcoming content. Keep a watch-list and relax amidst your busy schedule.</p>
                <input type="checkbox"/>
            </div>
            <div className="img">
                <img src={enter} alt="Image not available"/>
            </div>
        </div>
        <br/>
        <br/>
        <div className="right">
            <div className="inf">
                <p className="notes1">Weather and News</p>
                <p>Check the Weather and News on the click of a button whether it be local or global.</p>
                
                <input type="checkbox"/>
            </div>
            <div className="img">
                <img src="https://media.wired.co.uk/photos/606dba1c9a15f73a597a2aa1/master/w_1600%2Cc_limit/weather.jpg" alt="Image not available"/>
            </div>
        </div>
    </form>
</div>


<div className="footer">
    
    <div className="bottomnav">
        <a href="#premium" className="bottl" >Premium</a>
        <a href="#blog" className="bottl" >Blog</a>
        <a href="#features" className="bottl" >Features</a>
        <a href="#resources" className="bottr" >Resources</a>
        <a href="#about" className="bottr" >About</a>
        <a href="http://127.0.0.1:5500/page_login.html" className="bottr">Support</a>
    </div>
    <hr/>
    <h2>Day2Day</h2>
</div>
</div>
   ) 
}
export default Start;