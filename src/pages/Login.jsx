import { useNavigate } from "react-router-dom";

import CustomButton from "../components/CustomButton";

import Logo from "../assets/images/google-forms.png";

import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/");
    };

    return (
        <div className="login-container">
            <img src={Logo} alt="logo do app" />
            <div>
                <h2>Gerenciador Tarefas</h2>
            </div>
            <div className="button-container">
                <CustomButton onClick={handleSignInClick}>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
