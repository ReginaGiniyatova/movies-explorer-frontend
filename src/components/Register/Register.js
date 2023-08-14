import { NavLink } from 'react-router-dom';
import './Register.css';

function Register() {
    return (
        <section className='register'>
            <div className='register__container'>
                <NavLink to='/' className='register__logo' alt="logo"/>

                <h2 className='register__greeting'>Добро пожаловать!</h2>

                <form className='register-form'>
                    <div className='register-form__input-container'>
                        <p className='register-form__label'>Имя</p>
                        <input
                            id="register-input"
                            className='register-form__input'
                            type='text'
                            name='name'
                            minLength="2"
                            maxLength="30"
                            required
                            />
                        <span className='register-form__input-error'></span>
                    </div>

                    <div className='register-form__input-container'>
                        <p className='register-form__label'>E-mail</p>
                        <input
                            id="register-input"
                            className='register-form__input'
                            type='text'
                            name='email'
                            minLength="2"
                            maxLength="30"
                            required
                            />
                            <span className='register-form__input-error'></span>
                    </div>

                    <div className='register-form__input-container'>
                        <p className='register-form__label'>Пароль</p>
                        <input
                            id="register-input"
                            className='register-form__input'
                            type='password'
                            name='password'
                            minLength="2"
                            maxLength="30"
                            required
                            />
                        <span className='register-form__input-error'></span>
                    </div>

                    <button className='register-form__submit-btn' type='submit'>Зарегистрироваться</button>
                </form>

                <nav className='register__links'>
                    <p className='register__link register__link_inactive'>Уже зарегистрированы?</p>
                    <NavLink to='/signin' className='register__link'>Войти</NavLink>
                </nav>
            </div>
        </section>
    )
}

export default Register;