import React from 'react';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='logo' />
        <h1>Ларёк марёк нарёк</h1>
      </header>
      <nav className='nav'>
        <div><a href='/'>Товары</a></div>
        <div><a href='/'>Акции</a></div>
        <div><a href='/'>Оплата</a></div>
        <div><a href='/'>Доставка</a></div>
        <div><a href='/'>Контакты</a></div>
      </nav>
      <div className='cases'>
        <div className='searсh'>
          <input placeholder='Введите текст'></input>
          <button>Поиск</button>
        </div>
        <div className='content'>
          <div className='case-1 case'>
            <h1>Товар</h1>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmchmFyShR8-d_2nNNzZm5XMSrSNxewUgtWw7_HWB02EbURBAdijwah7gqD7SmyawKamE&usqp=CAU' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-2 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/7704636.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-3 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/0139850.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-4 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/8447465.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-5 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/2169494.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-6 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/7838580.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-7 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/9419281.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-8 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/8493688.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
          <div className='case-9 case'>
            <h1>Товар</h1>
            <img src='http://zornet.ru/_fr/81/9601951.jpg' alt='img'></img>
            <h3>Описание</h3>
            <h4>Стоимость</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
