import { NavLink } from 'react-router-dom';
import './Login.css';
import { useForm } from '../../hooks/useForm';

function Login({ onSubmit }) {

    const { values, handleChange, setValues, isValid, errors } = useForm({});
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email: values['email'],
            password: values['password'],
        });
    }
    return (
        <section className='login'>
            <div className='login__container'>
                <NavLink to="/" className='login__logo' />

                <h2 className='login__greeting'>Рады видеть!</h2>

                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='login-form__input-container'>
                        <p className='login-form__label'>E-mail</p>
                        <input
                            id="login-input"
                            className='login-form__input'
                            type='email'
                            name='email'
                            value={values['email'] || ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                            required
                            />
                            <p className='login-form__input-error'>{errors['email']}</p>
                    </div>

                    <div className='login-form__input-container'>
                        <p className='login-form__label'>Пароль</p>
                        <input
                            id="login-input"
                            className='login-form__input'
                            type='password'
                            name='password'
                            value={values['password'] || ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                            required
                            />
                        <p className='login-form__input-error'>{errors['password']}</p>
                    </div>

                    <button className={`login-form__submit-btn ${isValid || 'login-form__submit-btn_disabled' }`} type='submit'>Войти</button>
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