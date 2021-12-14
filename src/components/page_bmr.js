import React from "react"
import '../../src/style/page_fitness_bmr_style.css';
function PageBMR(){
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
    function BMRFunction() {
        var kg = document.getElementById('kgInput').value
        var lbs = document.getElementById('lbsInput').value
        var m = document.getElementById('mInput').value
        var inc = document.getElementById('inchInput').value
        var cm = document.getElementById('cmInput').value
        var ft = document.getElementById('ftInput').value
        var age = document.getElementById('ageInput').value
        if (kg == "" || lbs == "") {
            alert("Please enter weight.");
        }
        else if (m == "" || inc == "" || cm == "" || ft == "") {
            alert("Please enter height.");
        }
        else if (age == "") {
            alert("Please enter age.");
        }
        else if (!document.getElementById("mgender").checked && !document.getElementById("fgender").checked) {
            alert("Please choose a gender.")
        }
        else {
            var H = document.getElementById('cmInput').value;
            var W = document.getElementById('kgInput').value;
            var A = document.getElementById('ageInput').value;
            var bmr = document.getElementById('bmr');
            var bmrvalue

            if (document.getElementById("mgender").checked) {
                bmrvalue =  ((9.99*W)+(6.25*H)-(4.92*A)+5).toFixed(2)
            }
            else if (document.getElementById("fgender").checked) {
                bmrvalue =  ((9.99*W)+(6.25*H)-(4.92*A)-161).toFixed(2)
            }

            bmr.innerHTML = "Your Basal Metabolic Rate is " + bmrvalue.bold();
        }
    }
    return(
        <><div className="header">
            <h1>Day2Day</h1>
        </div><div className="container">
                <div className="info" >
                    <div className="leftcolumn_bmr">
                        <div className="gender">
                            <h4>Gender</h4>
                            <form>
                                <table className="style1_bmr">
                                    <tr>
                                        <td>
                                            <input type="radio" id="mgender" name="gender" value="Male"/>
                                        </td>
                                        <td className="style2_bmr">Male</td>
                                    </tr>
                                    <tr>
                                        <td><input type="radio" id="fgender" name="gender" value="Female"/>
                                        </td>
                                        <td className="style2_bmr">Female</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className="age">
                            <h4>Age</h4>
                            <form>
                                <table className="style1_bmr">
                                    <tr>
                                        <td><input id="ageInput" type="number" min ="1" placeholder="Age..."/>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className="weight">
                            <h4>Weight</h4>
                            <form>
                                <table className="style1_bmr">
                                    <tr>
                                        <td><input id="lbsInput" type="number" step="0.01" placeholder="Pounds..."/>
                                        </td>
                                        <td className="style3_bmr">lbs</td>
                                    </tr>
                                    <tr>
                                        <td><input id="kgInput" type="number" step="0.01" placeholder="Kilograms..."/>
                                        </td>
                                        <td className="style3_bmr">kg</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                        <div className="height">
                            <h4>Height</h4>
                            <form>
                                <table className="style1_bmr">
                                    <tr>
                                        <td><input id="cmInput" type="number" step="0.0001" class="form-control form-control-lg"
                                            placeholder="Centimeters..."/></td>
                                        <td className="style4_bmr">cm</td>
                                        <td><input id="mInput" type="number" step="0.01" class="form-control form-control-lg"
                                            placeholder="Meters..."/></td>
                                        <td className="style4_bmr">m</td>
                                    </tr>
                                    <tr>
                                        <td><input id="ftInput" type="number" step="0.01" class="form-control form-control-lg"
                                            placeholder="Feet..."/></td>
                                        <td className="style4_bmr">ft</td>
                                        <td><input id="inchInput" type="number" step="0.01" class="form-control form-control-lg"
                                            placeholder="Inches..."/></td>
                                        <td className="style4_bmr">in</td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>

                    <div className="rightcolumn">
                        <div className="index">
                            <h4>Health Index</h4>
                            <form>
                                <table className="style1_bmr">
                                    <tr>
                                        <td>
                                            <div className="indexcol" id="bmr">
                                                <p className="style5_bmr">Basal Metabolic Rate...</p>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                    </div>

                    <div className="row">
                        <div className="">
                            <form ><button type="submit" className="btn1">Clear</button></form>
                        </div>
                        <div className="">
                            <button className="btn2" onClick={BMRFunction}>Calculate</button>
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
export default PageBMR;