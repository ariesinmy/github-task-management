import React, { useState } from "react";
import User from "./User.svg"
import './Header.scss'
import { Button } from "react-bootstrap";

export default function Header() {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false); // 控制登出畫面的展示
    const activeStyle = {
        color: "#FFFFFF",
        backgroundColor: "var(--bg-hover-color)",
        textDecorationLine: "none",
    }
    const inactiveStyle = {
        textDecorationLine: "none",
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="header">
            {/* 網頁 LOGO */}
            <h1 className="header-logo">Task</h1>

            {/* Header右側: 登入 登出 以及其他用戶設定 */}
            <div className="login">
                <img src={User} className="user-logo"/>
                <Button
                    className="btn-login"
                >
                    Login to GitHub
                </Button>
            </div>
        </header>
    )
}