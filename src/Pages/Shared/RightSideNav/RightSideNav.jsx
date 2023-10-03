import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from
    "react-icons/fa6";

import QZone1 from '../../../assets/qZone1.png';
import QZone2 from '../../../assets/qZone2.png';
import QZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>

            {/* Loging With */}
            <div className="px-4 pb-4 pt-0 space-y-3 mb-6">
                <h2 className="text-3xl font-semibold pb-4">Login With</h2>
                <button className="btn btn-outline w-full my-4">
                    <FaGoogle className="text-blue-700 text-xl"></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub className="text-black text-xl"></FaGithub>
                    Github
                </button>
            </div>

            {/* Find On Us */}
            <div className="p-4  mb-6">
                <h2 className="text-3xl font-semibold pb-4">Find Us On</h2>
                <a className="flex items-center gap-3 text-lg border rounded-t-lg p-2" href="">
                    <FaFacebook className="text-blue-700 text-xl"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a className="flex items-center gap-3 text-lg border-x p-2" href="">
                    <FaTwitter className="text-blue-700 text-xl"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className="flex items-center gap-3 text-lg border rounded-b-lg p-2" href="">
                    <FaInstagram className="text-orange-700 text-xl"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            {/* Q-zone */}
            <div className="p-4 mx-auto  mb-6">
                <h2 className="text-3xl font-semibold pb-4">Q Zone</h2>
                <div className="flex justify-center">
                    <div>
                        <img src={QZone1} alt="Q-Zone" />
                        <img src={QZone2} alt="Q-Zone" />
                        <img src={QZone3} alt="Q-Zone" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;