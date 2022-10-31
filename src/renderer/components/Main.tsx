import { Link } from 'react-router-dom';
import icon from '../../../assets/icon.svg';
import AppButton from './common/AppButton';

const Hello = () => {
  return (
    <div>
      <div className="main">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Dashboard</h1>
      <div className="container">
        <AppButton icon="🙏" label="Login" link="/login" newTab={false} />
      </div>
    </div>
  );
};

export default Hello;
