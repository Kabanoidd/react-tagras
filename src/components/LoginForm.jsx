import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate()

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    const validationErrors = {};
    if (!login) {
      validationErrors.login = 'Поле логина обязательно для заполнения';
    }
    if (!password) {
      validationErrors.password = 'Поле пароля обязательно для заполнения';
    }

    // Update errors state
    setErrors(validationErrors);

    // If no errors, proceed with login
    if (Object.keys(validationErrors).length === 0) {
      // ... Handle login logic here ...
      navigate("/personal")
      console.log('Login submitted:', login, password);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen bg-[url(./images/bg_login.png)] bg-cover">
        <div className='max-w-[892px] w-full max-h-[557px] h-full bg-white flex justify-center items-center'>
          <form
            onSubmit={handleSubmit}
            className="bg-white border-[#005C62] border-[3px] max-w-[713px] w-full max-h-[435px] h-full px-[130px] py-[40px] flex justify-between flex-col"
          >
            <h2 className="text-2xl font-semibold text-center">Авторизация</h2>
            <div>
              <input
                type="text"
                placeholder="Введите логин..."
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                maxLength={6}
                className="w-full p-2 mb-4 border border-[#005C62] focus:outline-none text-[20px]"
              />
              {errors.login && (
                <span className="text-red-500">{errors.login}</span>
              )}
              <input
                type="password"
                placeholder="Введите пароль..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={5}
                className="w-full p-2 border border-[#005C62] focus:outline-none text-[20px]"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password}</span>
              )}
            </div>
            <div >
              <button
                type="submit"
                className="w-full bg-[#00474B] border-[#005C62] text-white p-2 mb-4 text-[20px]"
              >
                Авторизироваться
              </button>
              <button
                type="button"
                className="w-full bg-[#00474B] border-[#005C62] text-white p-2 text-[20px]"
                onClick={()=> navigate("/")}
              >
                Закрыть
              </button>
            </div>

          </form>
        </div>

      </div>
      <Footer />
    </div>

  );
};

export default LoginForm;
