import React from "react"
import User from "./User.svg"
import Setting from "./Setting.svg"
import './Card.scss'

export default function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-header-status">Status</div>
                <div className="card-header-setting-box">
                    <img src={Setting} className="card-header-setting"/>
                </div>
            </div>
            <div className="card-content">
                <div className="card-content-header">
                    <img src={User} className="user-logo"/>
                    <div className="card-content-header-title">Title</div>
                </div>
                <div className="card-content-body">
                    <div>Body...</div>
                </div>
            </div>
        </div>
    )
}