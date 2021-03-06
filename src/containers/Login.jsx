import React from 'react';
import logo from '../assets/static/brand/logo.svg';
import '../assets/styles/components/Login.scss';
import iconFB from '../assets/static/icons/IconFacebok.svg';
import iconGo from '../assets/static/icons/IconGoogle.svg';

const Login = () => {
  return (
    <div className='FirstContainer'>
      <div className='login_logo'>
        <img src={logo} alt='Logo Pinche App' className='login_Logo--img' />
      </div>
      <section className='loginContainer'>
        <div className='loginContainer__TitleAndSubtitle'>
          <h3 className='loginContainer__TitleAndSubtitle--title'>¡Bienvenido!</h3>
          <p className='loginContainer__TitleAndSubtitle--subtitle'>
            Éntrale o regístrate para cocinar
          </p>
        </div>
        <div className='loginContainer__TitleAndSubtitle__inputs'>
          <input placeholder='Ponga su correo mi niño' type='text' className='loginContainer_email' />
          <input placeholder='Ponga su pass y no se lo diga a nadie' type='text' className='loginContainer_pass' />
        </div>
        <div className='rememberPass'>
          <label className='rememberPass_remember'> 
            <input type='checkbox' className='rememberPass_remember--input' />
            Recuérdame
          </label>
          <p className='rememberPass_remembe--Forget'>¿Olvidaste tu <br /> contraseña?</p>
        </div>
        <a href='' className='loginContainer__rememberPass'>
          Entrar   |   Registrar
        </a>
        <div className='loginContainer__o'>
          <p className='loginContainer__o--txt'>
            - ó -
          </p>
        </div>
        <div className='loginContainer__Rs'>
          <div className='loginContainer__Rs__go'>
            <img src={iconGo} alt='' className='loginContainer__Rs__go--icon' />
            <p className='loginContainer__Rs__go--google'>Google</p>
          </div>
          <div className='loginContainer__Rs__fb'>
            <img src={iconFB} alt='' className='loginContainer__Rs__fb--icon' />
            <p className='loginContainer__Rs__fb--facebook'>Facebook</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Login;
