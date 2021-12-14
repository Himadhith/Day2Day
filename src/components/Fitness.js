import react from "react";
import '../../src/style/fitness.css';
function Fitness(){
    var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        const styles = {
            display:"none",
        }
        const styles1={
            display:"block",
        }
        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                return <div style={styles}>{slides[i]}</div>
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            return <div style={styles1}>{slides[slideIndex - 1]}
            {dots[slideIndex - 1].className += " active"}</div>
        }
    return(
        <div className="fitness">
            <div className="header">
        <h1>Day2Day</h1>
    </div>

    <div className="info" >
        <div className="slideshow-container">
            <div className="mySlides fade">
                <div className="subcat">
                    <svg  width="80" height="80">
                        <defs>
                            <clipPath id="circleView">
                                <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                            </clipPath>
                        </defs>
                        <image 
                          width="80" 
                          height="80" 
                          href="https://www.health-total.com/wp-content/uploads/2019/10/bmi-chart-img.jpg" 
                          clip-path="url(#circleView)"
                          
                        />
                     </svg>
                    <h4 align="center">BMI Calclator</h4>
                    <div id="BMI">
                        <p>Advantages of BMI</p>
                        <ul className="bul">
                            <li>BMI is a simple, inexpensive, and noninvasive surrogate measure of body fat.</li>
                            <li>BMI relies solely on height and weight and with access to the proper equipment</li>
                        </ul>
                    </div>
                    <button onclick={window.open('https://tanvi0904.github.io/trial/page_fitness_bmi.html','_self')}>Try Now</button>
                </div>
            </div>

            <div className="mySlides fade">
                <div className="subcat">
                    <svg  width="80" height="80">
                        <defs>
                            <clipPath id="circleView">
                                <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                            </clipPath>
                        </defs>
                        <image 
                          width="80" 
                          height="80" 
                          href="https://images-na.ssl-images-amazon.com/images/I/81a0qQujlXL.jpg" 
                          clip-path="url(#circleView)"
                        />
                     </svg>
                    <h4 align="center">Calorie Counter</h4>
                    <div id="CALC">
                        <p>Advantages of Calorie Caculator</p>
                        <ul className="bul">
                            <li>It can lead to better food choices.</li>
                            <li>It can encourage you to exercise. </li>
                            <li>It can be nutritionally incomplete.</li>
                        </ul>
                    </div>
                    <button onclick={window.open('https://tanvi0904.github.io/trial/page_fitness_calcalc.html','_self')}>Try Now</button>
                </div>
            </div>

            <div className="mySlides fade">

                <div className="subcat">
                    <svg  width="80" height="80">
                        <defs>
                            <clipPath id="circleView">
                                <circle cx="40" cy="40" r="40" fill="#FFFFFF" />
                            </clipPath>
                        </defs>
                        <image 
                          width="80" 
                          height="80" 
                          href="https://samanthavaland.com/wp-content/uploads/2016/08/HealthCalc-BMR.jpg" 
                          clip-path="url(#circleView)"
                        />
                     </svg>
                    <h4 align="center">BMR Calclator</h4>
                    <div id="BMR">
                        <p>Advantages of BMR</p>
                        <ul className="bul">
                            <li>BMR helps the body burn calories</li>
                            <li>You can prevent unwanted weight gain and weight loss.</li>
                        </ul>
                    </div>
                    <button onclick="window.open('https://tanvi0904.github.io/trial/page_fitness_bmr.html','_self')">Try Now</button>
                </div>
            </div>

            <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a className="next" onclick="plusSlides(1)">&#10095;</a>

        </div>
        <br/>

        <div style="text-align:center">
            <span className="dot" onclick="currentSlide(1)"></span>
            <span className="dot" onclick="currentSlide(2)"></span>
            <span className="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>
    <div className="footer">

<div className="bottomnav">
    <a href="#help" className="bottl" >Premium</a>
    <a href="#login" className="bottl">Blog</a>
    <a href="#help" className="bottl">Features</a>
    <a href="#login" className="bottr" >Resources</a>
    <a href="#help" className="bottr">About</a>
    <a href="#login" className="bottr">Support</a>
</div>
<hr />
<h2>Day2Day</h2>
</div>

    
             
        </div>
    );
}

export default Fitness;