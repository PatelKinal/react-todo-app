import { useState } from "react";
import styles from '@/styles/Login.module.css';
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";

const Login = () => {
  const [userName, setUserName] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const location = useLocation();
  const form = location.state?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userName) return;
    login(userName);
    setUserName('');
    navigate(form, {replace: true});
  };

  return (
    <div>
      <Header>
        <h1>Login</h1>
      </Header>
       <div className={styles.formWrapper}> 
        <form action=""  className={styles.form} onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="User name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;