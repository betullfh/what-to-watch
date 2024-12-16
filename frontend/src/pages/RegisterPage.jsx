import { Grid, InputAdornment, TextField, Button, Grid2 } from "@mui/material";
import React, { useState } from "react";
import { FaLock, FaUserCircle } from "react-icons/fa";
import "../css/LoginPage.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import registerPageService from "../services/RegisterPageService";

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const newUser = { username, password };
      await registerPageService.register(newUser);
      toast.success("Kayıt başarılı! Giriş yapabilirsiniz.");
      navigate("/login"); 
    } catch (err) {
      toast.error("Kayıt sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="register-login">
      <div className="main">
        <h3 className="login-register-title">WhatToWatch</h3>
        <form className="register-form" onSubmit={handleRegister}>
          <div className="input-form">
            <h3 className="login-title">Kayıt Ol</h3>
            <div className="inputs">
              <Grid2 container spacing={2}>
                <TextField
                  id="username"
                  placeholder="Kullanıcı adı"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FaUserCircle style={{ color: "gray", fontSize: "18px" }} />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
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
                        <FaLock style={{ color: "gray", fontSize: "18px" }} />
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
                />
              </Grid2>
            </div>

            <div className="actions">
              <div className="form-button">
               <Button type="submit"
               color="primary" size="medium">
                Kayıt Ol
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
              <p onClick={() => navigate("/login")} className="login-p">
                Zaten bir hesabın var mı? Giriş Yap.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
