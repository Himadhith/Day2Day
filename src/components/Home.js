import React,{useState} from "react";
import '../../src/style/home.css';
import axios from "axios";
import  { Redirect,Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
function Home(){
    var modal = document.getElementById('id01');
    const handleOnclick = function(event) {
        return (
            document.getElementById('id01').style.display='none'
        );
      }
  
      const history = useHistory();

 /*  const handleOnclick = (event) =>{
      return ()
  } */
  const handleLogin =function(){
      return (
        document.getElementById('id01').style.display='block'
      )
  }
  
      const [input,setInput] = useState({
          username:'',
          password:''
      })
  
  function handleChange(event)
  {
    const {name,value} = event.target;

    setInput(prevInput=>{
        return{
            ...prevInput,
            [name]:value
        }
    })
    
  }
  
  function handleClick(event)
  {
      event.preventDefault();
      const newUser = {
          username:input.username,
          password:input.password
      }
      console.log(newUser)
      axios.post('http://localhost:3001/create',newUser)
       setInput({
          username:'',
          password:''
      })
      document.getElementById('id01').style.display='none'
      history.push("/");
  }
    return(
        <div className="container_home">
              <div className="header_home">
        </div>
        
        <div className="topnav_home">
            <a href="#help" className="help_home">Help</a>
            <a href="#login" className="help_home" onClick={handleLogin}>Login</a>
            <a href="#" className="anchorTag_home">Link</a>
        </div>

        <div id="id01" className="modal">
        
            <form className="modal-content animate" action="/action_page.php" method="post">

                <div className="container">
                    <label className="" htmlFor="uname"><b>Username</b></label><br/>
                    <input className="boxinp" type="text" placeholder="Enter Username"  name="username" value={input.username} required onChange={handleChange} autoComplete="off"/><br/>

                    <label className="" htmlFor="psw"><b>Password</b></label><br/>
                    <input className="boxinp" type="password" placeholder="Enter Password" name="password" value={input.password} required onChange={handleChange}/>
                        
                    <Link to><button type="submit" onClick={handleClick}>Login</button></Link>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> Remember me
                    </label></div>
                
               

                <div className="container1_home">
                    <button type="button" onClick={handleOnclick} className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span>
                </div>

            </form>
        </div>

       
        


        <div className="row_home">
            <div className="leftcolumn_home">
                <div className="card_home" >
                    <h2>Ready to get started?</h2><br/>
                    <p>SignUp to Day2Day today!</p>

                    <button className="contact_home">Contact Us</button>
                    <button className="signup_home">Sign Up </button>
                    
                </div>
                {/* <div className="cardabout_home">
                    <h2>ABOUT US</h2>
                    <div className="fakeimg_home">Image</div>
                    
                </div> */}
                <div className="info_home">
                    <h2>Categories</h2>
                    <div className="infobox_home" >
                        
                        <div className="b1_home">
                            <img className="bimages_home" src="https://thumbs.dreamstime.com/b/newspaper-icon-red-background-flat-style-vector-illustration-179114524.jpg"/>
                            {/* <h5 align="center" className="bheader_home">News</h5>
                            <a href="#news" className="bcmore_home">See More {'>'}</a> */}
                        </div>
                        <div className="b2_home">
                        <img className="bimages_home" src="https://etimg.etb2bimg.com/photo/81478822.cms"/>
                            {/* <h5 align="center" className="bheader1_home">Entertainment</h5>
                            <a href="#news" className="bcmore_home">See More  {'>'}</a> */}
                        </div>
                        <div className="b3_home">
                        <img className="bimages_home" src="https://data.whicdn.com/images/296083019/original.png"/>
                            {/* <h5 align="center" className="bheader_home">Work & Study</h5>
                            <a href="#news" className="bcmore1_home">See More  {'>'}</a> */}
                        </div>
                        <div className="b4_home">
                            <img className="bimages_home" src="https://media.istockphoto.com/photos/teenage-girl-jogging-in-city-park-picture-id1061745418?k=20&m=1061745418&s=612x612&w=0&h=cV0FkBHPOTDXELUZhfh5uXi3AQKVw1PT71-LA8E-pJM="/>
                            {/* <h5 align="center" className="bheader_home">Fitness</h5>
                            <a href="page_fitness_main.html" className="bcmore_home">See More  {'>'}</a> */}
                        </div>

                        <div className="b11_home">
                            {/* <img className="bimages_home" src="https://thumbs.dreamstime.com/b/newspaper-icon-red-background-flat-style-vector-illustration-179114524.jpg"/> */}
                            <h5 align="center" className="bheader_home">News</h5>
                            <a href="#news" className="bcmore_home">See More {'>'}</a>
                        </div>
                        <div className="b22_home">
                        {/* <img className="bimages_home" src="https://etimg.etb2bimg.com/photo/81478822.cms"/> */}
                            <h5 align="center" className="bheader1_home">Entertainment</h5>
                            <a href="#news" className="bcmore_home">See More  {'>'}</a>
                        </div>
                        <div className="b33_home">
                        {/* <img className="bimages_home" src="https://data.whicdn.com/images/296083019/original.png"/> */}
                            <h5 align="center" className="bheader_home">Work & Study</h5>
                            <a href="#news" className="bcmore1_home">See More  {'>'}</a>
                        </div>
                        <div className="b44_home">
                            {/* <img className="bimages_home" src="https://media.istockphoto.com/photos/teenage-girl-jogging-in-city-park-picture-id1061745418?k=20&m=1061745418&s=612x612&w=0&h=cV0FkBHPOTDXELUZhfh5uXi3AQKVw1PT71-LA8E-pJM="/> */}
                            <h5 align="center" className="bheader_home">Fitness</h5>
                            <a href="page_fitness_main.html" className="bcmore_home">See More  {'>'}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightcolumn_home">
                <div className="card_home">
                    <h2>About Me</h2>
                    <div className="fakeimg1_home">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                </div>
                <div className="card_home">
                    <h3>Popular Post</h3>
                    <div className="fakeimg_home"><p>Image</p></div>
                    <div className="fakeimg_home"><p>Image</p></div>
                    <div className="fakeimg_home"><p>Image</p></div>
                </div>
                <div className="card_home">
                    <h3>Follow Me</h3>
                    <div className="icon-bar">
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a> 
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a> 
                        <a href="#" className="google"><i className="fa fa-google"></i></a> 
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                        <a href="#" className="youtube"><i className="fa fa-youtube"></i></a> 
                      </div>
                </div>
            </div>
        </div>

        <div className="footer_home">
            
            <div className="bottomnav_home">
                <a href="#premium" className="bott_home">Premium</a>
                <a href="#blog" className="bott_home">Blog</a>
                <a href="#features" className="bott_home">Features</a>
                <a href="#resources" className="bott1_home">Resources</a>
                <a href="#about" className="bott1_home">About</a>
                <a href="http://127.0.0.1:5500/page_login.html" className="bott1_home">Support</a>
            </div>
            <hr/>
            <h2>Day2Day</h2>
        </div>
        </div>
    );
}

export default Home;