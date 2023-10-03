import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center py-8'>
           <img className='mx-auto pb-5' src={logo} alt="logo" />
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl pt-4'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;