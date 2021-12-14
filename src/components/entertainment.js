import react from "react";
import '../../src/style/entertainment.css';
// import '../../src/assets';
import movie from './movie.jpeg';
import review from './review.jpeg';
function Entertainment(){
    return(
        <div>
                <h1 className="heading">Entertainment</h1>
                <div className="div1">
                    <div className="extdiv">
                        <a href="https://www.google.com">
                        <img src={movie} height="200" width="250" />
                        </a>
                    </div>
                    <div className="extdiv2">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <img className="varunscock" src={review} height="300" width="350"/>
                        </a>
                    </div>
                </div>
            <div className="mainbox">
                

                <div id="div1"> 
                    <div id="div2">
                        <div id='abc'>Movies trending</div>
                            <br/>
                        <ul>
                            <li> Shang chi 7.9</li>
                            <li> Free Guy 7.5 </li>
                            <li> The Green Knight 6.6</li>
                        </ul>

                    </div>

                    <div id="div3">
                        <div id='abc'>Movies watchList </div><br/>
                        <input type="text" spellcheck="true" placeholder="Enter the name of the movie you watched"/><br/>
                        <label for="Movie">Choose a Movie:</label><br/>

                        <select name="Movie" id="Movie">
                        <option >Movie 1 </option>
                        <option >Movie 2</option>
                        <option >Movie 3</option>
                        <option >Movie 4</option>
                        </select><br/>
                        <input type="text" spellcheck="true" placeholder="Enter the name of the movie you watched"/><br/>
                        <input type="text" spellcheck="true" placeholder="Enter the name of the movie you watched"/><br/>
                    </div>
                </div>
                <div id="div1">
                    <div id="div2">
                        <div id='abc'>TV shows trending</div><br/>
                        <ul>
                            <li>Shang chi 7.9</li>
                            <li>Free Guy 7.5 </li>
                            <li>The Green Knight 6.6</li>
                        </ul>
                    </div>
                    <div id="div3">
                        <div id='abc'>TV shows watchList </div><br/>
                        <input type="text" spellcheck="true" placeholder="Enter the name of the movie you watched"/><br/>
                        <label for="Movie">Choose a Movie:</label><br/>

                        <select name="Movie" id="Movie">
                        <option >Movie 1 </option>
                        <option >Movie 2</option>
                        <option >Movie 3</option>
                        <option >Movie 4</option>
                        </select><br/>
                        <input type="text" spellcheck="true" placeholder="Enter the name of the movie you watched"/><br/>
                        <input type="text" spellcheck="true" placeholder="Enter the name of the movie you watched"/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Entertainment;