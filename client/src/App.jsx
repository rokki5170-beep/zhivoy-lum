import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "./supabase";
function Home() {
  return (
    <div className="app">
      <header className="hero">
        <h1>🏡 Живой-Лум</h1>
        <p>Добро пожаловать в социальную сеть нашего села.</p>

        <div className="buttons">
          <Link to="/login">
            <button>Войти</button>
          </Link>

          <Link to="/register">
            <button className="green">Регистрация</button>
          </Link>
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <h2>📰 Новости</h2>
          <p>Следите за последними событиями села.</p>
        </div>

        <div className="card">
          <h2>📷 Фото и видео</h2>
          <p>Делитесь воспоминаниями.</p>
        </div>

        <div className="card">
          <h2>💬 Общение</h2>
          <p>Общайтесь с односельчанами.</p>
        </div>
      </section>
    </div>
  );
}

function Login() {
  return (
    <div className="app">
      <h1>Вход</h1>

      <input placeholder="Логин" />
      <br /><br />

      <input type="password" placeholder="Пароль" />
      <br /><br />

      <button>Войти</button>

      <br /><br />

      <Link to="/">← На главную</Link>
    </div>
  );
}

  function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <div className="app">
      <h1>Регистрация</h1>

      <input placeholder="Имя" />
      <br /><br />

      <input placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Пароль" />
      <br /><br />

      <button className="green">Создать аккаунт</button>

      <br /><br />

      <Link to="/">← На главную</Link>
    </div>
  );
  }
