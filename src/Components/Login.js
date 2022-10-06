import React,{useState,useEffect}from "react";
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import axios from "axios";
import {Link} from 'react-router-dom';
function Login(){
    let loginvalues={
        email:"",
        name:"",
        error: {
            email: "",
            name: ""
           
        }
    };
    const [Logindata,setlogindata]=useState(loginvalues);
    const [apidata, setapidata] = useState([]);
    const [logedUser,setlogeduser]=useState(false);
  
  //mounting phase of the component 
  useEffect(() => {
    // on mounting phase here i hit the api and get the response
      async function getapidata() {
      const response = await axios.get("https://6321f66582f8687273bdac1b.mockapi.io/users");

      setapidata(response.data);
    }
   
    getapidata();
  }, []);
  /// here is onchange function 
    const commonchange=(e)=>{
        let error = { ...Logindata.error };
    if (e.target.value === "") {

      error[e.target.name] = `${e.target.name} is Required`;
    } else {

      error[e.target.name] = "";
    }
    setlogindata({ ...Logindata, [e.target.name]: e.target.value, error });
    
      } ;
    const handlesumit=()=>{
      const abc = apidata.map((reply)=>{
  
        if(Logindata.name===reply.name&&Logindata.email===reply.email){
          setlogeduser(!logedUser);
          console.log(reply.name);
         
        }
        
        });
        

    };
    return(
        <div className="formcontainer" >
  <CssVarsProvider>
      <main >
        
        <Sheet
          sx={{
            maxWidth: 400,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
        
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome To Day 26 Task!</b><br/>
              <b>There is No Password for our page </b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            onChange={(e)=>commonchange(e)}
            
            placeholder="ranjith@email.com"
            // pass down to FormLabel as children
            label="Email"
          /><br/>
          <span style={{ color: 'red' }}>{Logindata.error.email}</span>
          <TextField
            name="name"
            type="Name"
            onChange={(e)=>commonchange(e)}
            placeholder="ranjith"
            label="Name"
          /><br/>
          <span style={{ color: "red" }}>{Logindata.error.name}</span>
          <Button
            sx={{
              mt: 1, // margin top
            }}
           onClick={handlesumit}
            component={Link}
            to={logedUser?"./navbar":""}
          >
            Log in
          </Button>
          
            Don&apos;t have an account? 
            <Button component={Link} to="./form" size="large" variant='Outlined' color="info">
         Sign UP!
        </Button>
          
        </Sheet>
      </main>
    </CssVarsProvider>

        </div>
    );
}
export default Login;