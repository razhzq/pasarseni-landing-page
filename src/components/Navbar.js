import ReactImage from 'react-image-wrapper';
import Logo from '../static/pasarsenilogo.png'
import Moon from '../static/half-moon.png'

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="nav-logo">
                <ReactImage
                  src={Logo}
                  width={40}
                  height={60}
                  title={Logo}
                
                />
                
            </div>
            <div className="nav-centre">
                <span>pasarseni</span>
            </div>
            <div className="nav-right">
                 <input
                   type="image"
                   src={Moon}
                   width={40}
                   height={40}
                 />
            </div>
            
        </div>
     );
}
 
export default Navbar;