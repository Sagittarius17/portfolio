import React from 'react';
import logo from '../assets/images/lambda.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-6 h-6 mr-2" />
                    <span>© 2022-2026 Shuvendu Singha. All Rights Reserved.</span>
                </div>
                <div className="flex space-x-6">
                    {/* Add social media links here */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
