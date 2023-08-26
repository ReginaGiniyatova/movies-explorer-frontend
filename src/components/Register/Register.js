import { NavLink } from 'react-router-dom';
import './Register.css';
import { useForm } from '../../hooks/useForm';

function Register({ onSubmit }) {

    const { values, handleChange, setValues, isValid, errors } = useForm({});
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email: values['email'],
            password: values['password'],
            name: values['name'],
        });
    }

    return (
        <section className='register'>
            <div className='register__container'>
                <NavLink to='/' className='register__logo' alt="logo"/>

                <h2 className='register__greeting'>Добро пожаловать!</h2>

                <form className='register-form' onSubmit={handleSubmit}>
                    <div className='register-form__input-container'>
                        <p className='register-form__label'>Имя</p>
                        <input
                            id="register-input"
                            className='register-form__input'
                            type='text'
                            name='name'
                            value={values['name'] || ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                            required
                            />
                        <p className='register-form__input-error'>{errors['name']}</p>
                    </div>

                    <div className='register-form__input-container'>
                        <p className='register-form__label'>E-mail</p>
                        <input
                            id="register-input"
                            className='register-form__input'
                            type='email'
                            name='email'
                            value={values['email'] || ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                            required
                            />
                            <p className='register-form__input-error'>{errors['email']}</p>
                    </div>

                    <div className='register-form__input-container'>
                        <p className='register-form__label'>Пароль</p>
                        <input
                            id="register-input"
                            className='register-form__input'
                            type='password'
                            name='password'
                            value={values['password'] || ''}
                            onChange={handleChange}
                            minLength="2"
                            maxLength="30"
                            required
                            />
                        <p className='register-form__input-error'>{errors['password']}</p>
                    </div>

                    <button className={`register-form__submit-btn ${isValid || 'register-form__submit-btn_disabled' }`} type='submit'>Зарегистрироваться</button>
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