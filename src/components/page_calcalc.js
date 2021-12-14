import React from 'react'
import '../../src/style/page_fitness_calcalc_style.css';
function PageCalcalc(){
            window.onload = function () {
        document.getElementById('lbsInput').addEventListener('input', function (e) {
            let lbs = e.target.value;
            document.getElementById('kgInput').value = (lbs * 0.453592).toFixed(4);
        });
        document.getElementById('kgInput').addEventListener('input', function (e) {
            let kg = e.target.value;
            document.getElementById('lbsInput').value = (kg * 2.20462).toFixed(4);
        });
        document.getElementById('cmInput').addEventListener('input', function (e) {
            let cm = e.target.value;
            document.getElementById('mInput').value = (cm * 0.01).toFixed(4);
            document.getElementById('inchInput').value = (cm * 0.393701).toFixed(4);
            document.getElementById('ftInput').value = (cm * 0.032808399).toFixed(4);
        });
        document.getElementById('mInput').addEventListener('input', function (e) {
            let m = e.target.value;
            document.getElementById('cmInput').value = (m * 100).toFixed(4);
            document.getElementById('inchInput').value = (m * 39.3701).toFixed(4);
            document.getElementById('ftInput').value = (m * 3.280841666667).toFixed(4);
        });
        document.getElementById('inchInput').addEventListener('input', function (e) {
            let inch = e.target.value;
            document.getElementById('mInput').value = (inch * 0.02539998984).toFixed(4);
            document.getElementById('cmInput').value = (inch * 2.5399989839999999042).toFixed(4);
            document.getElementById('ftInput').value = (inch * 0.0833333).toFixed(4);
        });
        document.getElementById('ftInput').addEventListener('input', function (e) {
            let ft = e.target.value;
            document.getElementById('mInput').value = (ft * 0.3048000097536).toFixed(4);
            document.getElementById('inchInput').value = (ft * 12).toFixed(4);
            document.getElementById('cmInput').value = (ft * 30.48).toFixed(4);
        });
    }
    function CalFunction() {
        var kg = document.getElementById('kgInput').value
        var lbs = document.getElementById('lbsInput').value
        var m = document.getElementById('mInput').value
        var inc = document.getElementById('inchInput').value
        var cm = document.getElementById('cmInput').value
        var ft = document.getElementById('ftInput').value
        var age = document.getElementById('ageInput').value
        if (kg === "" || lbs === "") {
            alert("Please enter weight.");
        }
        else if (m === "" || inc === "" || cm === "" || ft === "") {
            alert("Please enter height.");
        }
        else if (age === "") {
            alert("Please enter age.");
        }
        else if (!document.getElementById("mgender").checked && !document.getElementById("fgender").checked) {
            alert("Please choose a gender.");
        }
        else {
            var H = document.getElementById('cmInput').value;
            var W = document.getElementById('kgInput').value;
            var A = document.getElementById('ageInput').value;
            var mw = document.getElementById('mw');
            var lw = document.getElementById('lw');
            var gw = document.getElementById('gw');
            var bmrvalue
            var cal
            if (document.getElementById("mgender").checked) {
                bmrvalue =  ((9.99*W)+(6.25*H)-(4.92*A)+5).toFixed(2)
            }
            else if (document.getElementById("fgender").checked) {
                bmrvalue =  ((9.99*W)+(6.25*H)-(4.92*A)-161).toFixed(2)
            }

            if (document.getElementById("1").selected) {
                cal = bmrvalue*1.2
            }

            if (document.getElementById("2").selected) {
                cal = bmrvalue*1.375
            }

            if (document.getElementById("3").selected) {
                cal = bmrvalue*1.55
            }
            
            if (document.getElementById("4").selected) {
                cal = bmrvalue*1.725
            }

            if (document.getElementById("5").selected) {
                cal = bmrvalue*1.9
            }

            mw.innerHTML = "Maintain Weight: " + cal + " Calories/day";
            lw.innerHTML = "Lose Weight: " + (cal*0.8) + " Calories/day"
            gw.innerHTML = "Gain Weight: " + (cal*1.2) + " Calories/day"
        }
    }
    
    return(
        <><div className="header">
            <h1>Day2Day</h1>
        </div>
        <div className="container">
            <div className="info">
                <div className="leftcolumn">
                    <div className="gender">
                        <h4>Gender</h4>
                        <form>
                            <table className="style1">
                                <tr>
                                    <td>
                                        <input type="radio" id="mgender" name="gender" value="Male"/>
                                    </td>
                                    <td className="style2">Male</td>
                                </tr>
                                <tr>
                                    <td><input type="radio" id="fgender" name="gender" value="Female"/>
                                    </td>
                                    <td className="style2">Female</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="age">
                        <h4>Age</h4>
                        <form>
                            <table className="style1">
                                <tr>
                                    <td><input id="ageInput" type="number" min="1" placeholder="Age..."/>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="activity">
                        <h4>Activity</h4>
                        <form>
                            <table className="style1">
                                <tr>
                                    <td>
                                        <select className="actInput" required>
                                            <option value="1" id="1">Little/No exercise</option>
                                            <option value="2" id="2">Low activity (exercise 1-3 times/week)</option>
                                            <option value="3" id="3">Active (daily exercise or intense exercise 3-4 times/week)</option>
                                            <option value="4" id="4">High activity (intense exercise 6-7 times/week)</option>
                                            <option value="5" id="5">Very high activity (very intense exercise daily, or physical job)</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="weight">
                        <h4>Weight</h4>
                        <form>
                            <table className="style1">
                                <tr>
                                    <td><input id="lbsInput" type="number" step="0.01" placeholder="Pounds..."/>
                                    </td>
                                    <td className="style3">lbs</td>
                                </tr>
                                <tr>
                                    <td><input id="kgInput" type="number" step="0.01" placeholder="Kilograms..."/>
                                    </td>
                                    <td className="style3">kg</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="height">
                        <h4>Height</h4>
                        <form className="form1">
                        
                            <table className="style1">
                                <tr>
                                    <td><input id="cmInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Centimeters..."/></td>
                                    <td className="style4">cm</td>
                                    <td><input id="mInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Meters..."/></td>
                                    <td className="style4">m</td>
                                </tr>
                                <tr>
                                    <td><input id="ftInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Feet..."/></td>
                                    <td className="style4">ft</td>
                                    <td><input id="inchInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Inches..."/></td>
                                    <td className="style4">in</td>
                                </tr>
                            </table>
                        </form>
                        <button className="btn1">Clear</button>
                    </div>
                    
                </div>

                <div className="rightcolumn_calc">
                    <div className="index">
                        <h4>Calorie Count</h4>
                        <form>
                            <table className="style1">
                                <tr>
                                    <td>
                                        <div className="indexcol" id="mw">
                                            <p className="style5">Maintain Weight...</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="indexcol" id="lw">
                                            <p>Lose Weight...</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="indexcol" id="gw">
                                            <p>Gain Weight...</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <button className="btn2_c" onClick={CalFunction}>Calculate</button>
                        </form>
                    </div>
                </div>



                <div className="row">
                    <div className="">
                        {/* <button className="btn1">Clear</button> */}
                    </div>
                    <div className="">
                        {/* <button className="btn2" onClick={CalFunction}>Calculate</button> */}
                    </div>
                </div>
            </div>

            <div className="bottomnav">
                <a href="#premium" className="bott">Premium</a>
                <a href="#blog" className="bott">Blog</a>
                <a href="#features" className="bott">Features</a>
                <a href="#resources" className="bott1">Resources</a>
                <a href="#about" className="bott1">About</a>
                <a href="http://127.0.0.1:5500/page_login.html" className="bott1">Support</a>
            </div>
            <hr />
            <h2 align="center">Day2Day</h2>
        </div></>
    );
}
export default PageCalcalc;