import React from 'react'

import "./login.css"
import { useState, useEffect } from 'react'

const Login = () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {

    }, [index])

    const Login = () => {
        return (

            <div className='login-row'>
                <form className='login-form'>
                    <input
                        type="email"
                        placeholder="E-Posta"
                        onChange=""
                        required />
                    <input
                        type="password"
                        placeholder="Şifre"
                        onChange=""
                        required />
                    <button type="submit">Giriş Yap</button>

                    <div className="login-row2-col1">
                        Şifremi Unuttum
                    </div>
                </form>
            </div>

        )
    }

    const Sign = () => {
        return (
            <div className="signup-row">
                <form className='sign-form'>
                    <input
                        type="text"
                        placeholder="İsim ve Soyisim"
                        onChange=""
                        required />
                    <input
                        type="email"
                        placeholder="E-posta"
                        onChange=""
                        required />
                    <input
                        type="text"
                        placeholder="Telefon Numarası"
                        onChange=""
                        required />
                    <input
                        type="password"
                        placeholder="Şifre"
                        onChange=""
                        required />
                    <button type="submit">Kayıt Ol</button>


                </form>
            </div>
        )
    }
    const mainColor  = '#22A2D1';

    const borderColorLogin = index === 0 ? mainColor  : 'white';
    const borderColorSign = index === 1 ? mainColor : 'white';

    return (
        <div className='form-page'>
            <div className="form-container">
                <div className="form-logo">
                    <img src="/img/logo2.png" alt="" className="logo" />
                </div>
                <div className="form-row1">
                    <div style={{ borderColor: borderColorLogin, color: index === 0 ? mainColor: '#9DA7B2' }} className="form-row1-col1" onClick={() => setIndex(0)}>Giriş Yap</div>
                    <div style={{ borderColor: borderColorSign, color: index === 1 ? mainColor : '#9DA7B2' }} className="form-row1-col2" onClick={() => setIndex(1)}>Yeni Misin?</div>

                </div>
                {index === 0 ? <Login /> : <Sign />}

            </div>

        </div>
    )
}

export default Login
