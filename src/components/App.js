import React from "react";
import { Component } from "react";

export class App extends Component {

    render() {
        return (

            <form id="loginForm">
                <input type="radio" id="signin" name="loginAction" defaultChecked/>
                <label htmlFor="signin">Войти</label>
                <input type="radio" id="signup" name="loginAction"/>
                <label htmlFor="signup">Регистрация</label>
                <input type="radio" id="reset" name="loginAction"/>
                <label htmlFor="reset">Сбросить</label>
                <div id="wrapper">
                    <ul id="loginInput">
                        <li><input id="email" placeholder="Эл. адрес" type="email"/></li>
                        <li><input id="password" placeholder="Пароль" type="password"/></li>
                        <li><input id="repass" placeholder="Повторите пароль" type="password"/></li>
                    </ul>
                </div>
                <button type="submit">
                    <span>
                        Сбросить пароль <br/>
                        Войти <br/>
                        Отправить
                    </span>
                </button>
            </form>
        )
    }
}
