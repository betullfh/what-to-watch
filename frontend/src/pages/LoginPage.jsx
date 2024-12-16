import { Grid2, InputAdornment, TextField, Button } from "@mui/material";
import { FaLock, FaUserCircle } from "react-icons/fa";
import "../css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import loginPageService from "../services/LoginPageService";



function LoginPage() {
    const navigate=useNavigate()
    const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 


  
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginPageService.login(username, password);
      toast.success(`Hoş geldin, ${username}!`);
      navigate("/"); // Giriş başarılıysa ana sayfaya yönlendir
    } catch (err) {
      toast.error("Kullanıcı adı veya şifre hatalı.");
    }
  };



    

  return (
    <div className="register-login">
      <div className="main">
        <h3 className="login-register-title">WhatToWatch</h3>
        <form  className="register-form" onSubmit={handleLogin}>
           
          <div className="input-form">
          <h3 className="login-title">Giriş Yap</h3>
            <div className="inputs">
              <Grid2 container spacing={2}>
                <TextField
                  id="username"
                  placeholder="Ad"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle style={{ color: "gray", fontSize:"18px" }} />{" "}
                      </InputAdornment>
                    ),
                    disableUnderline: true,
                  }}
                  sx={{
                    marginBottom: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb", 
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px", 
                      padding: "0px 10px",
                      color: "black", 
                    },
                    "& .MuiInputBase-root": {
                      border: "1px solid #ccc",
                    },
                    "&::placeholder": {
                      color: "black", 
                    },
                  }}
                  variant="filled"
                  color="primary"
                />
                <TextField
                  id="password"
                  type="password"
                  placeholder="Şifre"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaLock style={{ color: "gray" }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    marginBottom: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#dce6eb", 
                    "& .MuiFilledInput-root": {
                      borderRadius: "10px", 
                      padding: "0px 10px", 
                      color: "black", 
                    },
                    "& .MuiInputBase-root": {
                      border: "1px solid #ccc", 
                    },
                    "&::placeholder": {
                      color: "black", 
                    },
                  }}
                  variant="filled"
                  color="primary"
                />
              </Grid2>
            </div>
           

            <div className="actions">
              <div className="form-button">
               <Button type="submit"
               color="primary" size="medium">
                Giriş Yap
               </Button>
               <Button
               color="gray" size="medium" onClick={() => {
                setUsername("");
                setPassword("");
              }}
              >
                Temizle
               </Button>
                
              </div>
            </div>
            <div className="login-choice">
              <p onClick={()=>navigate("/signup")} className="login-p">Hesabınız Yok mu? Kaydolun.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
