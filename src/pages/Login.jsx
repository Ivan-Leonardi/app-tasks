import CustomButton from "../components/CustomButton";

import Logo from "../assets/images/google-forms.png";

import "./Login.scss";

const Login = () => {
    return (
        <div className="login-container">
            <img src={Logo} alt="logo do app" />
            <div><h2>App Tarefas</h2></div>
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
