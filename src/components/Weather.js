import react from "react";
import '../../src/style/weatherandnews.css';
function Weather(){
    window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
    window.weatherWidgetConfig.push({
        selector:".weatherWidget",
        apiKey:"22DFGEWZCVDKR8SU2K4U6YG9X", //Sign up for your personal key
        location:"Bengaluru, Karnataka", //Enter an address
        unitGroup:"metric", //"us" or "metric"
        forecastDays:5, //how many days forecast to show
        title:"Bengaluru,Karnataka", //optional title to show in the 
        showTitle:true, 
        showConditions:true
    });
    (function() {
        var d = document, s = d.createElement('script');
        s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();   


    return(
        <div className="Hi">
            
               
           
        
           <div className="parent"> 
               <div className="weat">
        <h1 className="weat1">Weather and News</h1>
        </div>
        <div className="weatherWidget"></div>
        <div className="mainDiv">
            <div  className="four">
                <svg  width="80" height="80">
                    <defs>
                        <clipPath id="circleView">
                            <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                        </clipPath>
                    </defs>
                    <image 
                      width="80" 
                      height="80" 
                      href="data:image/png;base64,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" 
                      clip-path="url(#circleView)"
                    />
                 </svg>
                <div className="inboxes_w">
                    <h4 align="center">The Times of India</h4>
                    <p>Indian English-language daily newspaper owned and managed by the Time grp.
                        It is the third-largest newspaper in India by circulation</p>
                        <a href="https://timesofindia.indiatimes.com/" className="newslink">See More{'>'}</a>    
                    </div>
                        
                </div>
            <div  className="four">
                <svg  width="80" height="80">
                    <defs>
                        <clipPath id="circleView">
                            <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                        </clipPath>
                    </defs>
                    <image 
                      width="80" 
                      height="80" 
                      href="https://www.hindustantimes.com/res/images/logo.png" 
                      clip-path="url(#circleView)"
                    />
                 </svg>
                <div className="inboxes_w">
                    <h4 align="center">Hindustan Times</h4>
                    <p>Hindustan Times is an Indian English-language daily newspaper introduced and founded in 1924.</p>
                    <a href="https://www.hindustantimes.com/" className="newslink" >See More{'>'}</a> 
                </div>
            </div>
            <div  className="four">
                <svg  width="80" height="80" >
                    <defs>
                        <clipPath id="circleView">
                            <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                        </clipPath>
                    </defs>
                    <image 
                      width="80" 
                      height="80" 
                      href="https://images.indianexpress.com/2020/10/Express.jpeg" 
                      clip-path="url(#circleView)"
                    />
                 </svg>                
                <div className="inboxes_w">
                    <h4 align="center">The Indian Express</h4>
                    <p>Indian Express Limited is an Indian news media publishing company. It publishes several widely circulated dailies.</p>
                    <a href="https://indianexpress.com/" className="newslink">See More{'>'}</a>
                </div>
            </div>
            <div className="four">
                <svg  width="80" height="80">
                    <defs>
                        <clipPath id="circleView">
                            <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                        </clipPath>
                    </defs>
                    <image 
                      width="80" 
                      height="80" 
                      href="https://images-na.ssl-images-amazon.com/images/I/610xV0rT8kL.png" 
                      clip-path="url(#circleView)"
                    />
                 </svg>                   
                <div className="inboxes_w">
                    <h4 align="center">Economic Times</h4>
                    <p>The Economic Times is an Indian English-language business-focused daily newspaper. It is owned by The Times Group.</p>
                    <a href="https://economictimes.indiatimes.com/" className="newslink">See More{'>'}</a>
                </div>
            </div>
        </div>
        <div className="footer_w"> 
            <div className="bottomnav_w">
                <a href="#premium" className="bott_w">Premium</a>
                <a href="#blog" className="bott_w">Blog</a>
                <a href="#features" className="bott_w">Features</a>
                <a href="#resources" className="bott1_w">Resources</a>
                <a href="#about" className="bott1_w">About</a>
                <a href="http://127.0.0.1:5500/page_login.html" className="bott1_w">Support</a>
            </div>
            <hr/>
            <h2>Day2Day</h2>
        </div>
        </div>
        
        </div>
    );
}

export default Weather;