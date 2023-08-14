import { NavLink } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <section className='login'>
            <div className='login__container'>
                <NavLink to="/" className='login__logo' />

                <h2 className='login__greeting'>Рады видеть!</h2>

                <form className='login-form'>
                    <div className='login-form__input-container'>
                        <p className='login-form__label'>E-mail</p>
                        <input
                            id="login-input"
                            className='login-form__input'
                            type='text'
                            name='email'
                            minLength="2"
                            maxLength="30"
                            required
                            />
                            <span className='login-form__input-error'></span>
                    </div>

                    <div className='login-form__input-container'>
                        <p className='login-form__label'>Пароль</p>
                        <input
                            id="login-input"
                            className='login-form__input'
                            type='password'
                            name='password'
                            minLength="2"
                            maxLength="30"
                            required
                            />
                        <span className='login-form__input-error'></span>
                    </div>

                    <button className='login-form__submit-btn' type='submit'>Войти</button>
                </form>

                <nav className='login__links'>
                    <p className='login__link login__link_inactive'>Ещё не зарегистрированы?</p>
                    <NavLink to='/signup' className='login__link'>Регистрация</NavLink>
                </nav>
            </div>
        </section>
    )
}

export default Login;