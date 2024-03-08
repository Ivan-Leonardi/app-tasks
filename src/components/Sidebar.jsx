import CustomButton from "./CustomButton";

import logo from "../assets/images/google-forms.png";

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar-contaiber">
            <div className="logo">
                <img src={logo} alt="logo do aplicativo" />
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
