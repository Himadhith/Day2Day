import react from "react";
import '../../src/style/bmi.css';

function PageBMI()
{
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
    function BMIFunction() {
        var kg = document.getElementById('kgInput').value
        var lbs = document.getElementById('lbsInput').value
        var m = document.getElementById('mInput').value
        var inc = document.getElementById('inchInput').value
        var cm = document.getElementById('cmInput').value
        var ft = document.getElementById('ftInput').value
        if (kg == "" || lbs == "") {
            alert("Please enter weight.");
        }
        else if (m == "" || inc == "" || cm == "" || ft == "") {
            alert("Please enter height.");
        }
        else {
            var meters = document.getElementById('mInput').value;
            var kilograms = document.getElementById('kgInput').value;
            var bmi = document.getElementById('bmi')
            var comment = document.getElementById('comment')
            var bmiValue = (kilograms / (meters * meters)).toFixed(2)
            bmi.innerHTML = "Your Body Mass Index is " + bmiValue.bold();
            if (bmiValue < 18.5) {
                comment.innerHTML = "You are underweight. Consult a doctor!";
            }
            else if (bmiValue > 24.9 && bmiValue < 30) {
                comment.innerHTML = "You are overweight. Consult a doctor!";
            }
            else if (bmiValue > 29.9) {
                comment.innerHTML = "You are obese. It's an alarming health situation. Go to the doctor!";
            }
            else {
                comment.innerHTML = "You're okay but a little workout never hurt anybody!";
            }
        }
    }
    return(
        <><div className="header">
            <h1>Day2Day</h1>
        </div><div className="container">
                <div className="info">
                    <div className="infobox1">
                        <h4>Weight</h4>
                        <form>
                            <table className="tab">
                                <tr>
                                    <td><input id="lbsInput" type="number" step="0.01" placeholder="Pounds..." />
                                    </td>
                                    <td className="style1">lbs</td>
                                </tr>
                                <tr>
                                    <td><input id="kgInput" type="number" step="0.01" placeholder="Kilograms..." />
                                    </td>
                                    <td className="style1">kg</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="infobox2">
                        <h4>Height</h4>
                        <form>
                            <table className="tab">
                                <tr>
                                    <td><input id="cmInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Centimeters..." /></td>
                                    <td className="style1">cm</td>
                                </tr>
                                <tr>
                                    <td><input id="inchInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Inches..." /></td>
                                    <td className="style1">in</td>
                                </tr>
                                <tr>
                                    <td><input id="mInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Meters..." /></td>
                                    <td className="style1">m</td>
                                </tr>
                                <tr>
                                    <td><input id="ftInput" type="number" step="0.01" className="form-control form-control-lg"
                                        placeholder="Feet..." /></td>
                                    <td className="style1">ft</td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="infobox3">
                        <h4>Health Index</h4>
                        <form>
                            <table className="tab">
                                <tr>
                                    <td>
                                        <div className="indexcol" id="bmi">
                                            <p className="style3">Body Mass Index...</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="indexcol" id="comment">
                                            <p>Comment...</p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div className="row">
                        <div className="">
                            <button className="btn1" >Clear</button>
                        </div>
                        <div className="">
                            <button className="btn2" onClick={BMIFunction}>Calculate</button>
                        </div>
                    </div>
                </div>
            </div><div className="footer">

                <div className="bottomnav">
                    <a href="#premium" className="bott">Premium</a>
                    <a href="#blog" className="bott">Blog</a>
                    <a href="#features" className="bott">Features</a>
                    <a href="#resources" className="bott1">Resources</a>
                    <a href="#about" className="bott1">About</a>
                    <a href="http://127.0.0.1:5500/page_login.html" className="bott1">Support</a>
                </div>
                <hr />
                <h2>Day2Day</h2>
            </div></>
    );
}
export default PageBMI;