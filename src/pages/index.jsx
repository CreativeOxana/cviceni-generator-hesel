import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch(
  'https://randomuser.me/api/?password=upper,lower,12',
);
const data = await response.json();
const password = data.results[0].login.password;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Webová aplikace</h1>
    <p>Vaše heslo je: {password}</p>
  </div>,
);
