import React from 'react'
import '../styles/Footer.css'
import logo from './logo.png';
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
                <p className='call'>Questions? Call 000-800-040-1843</p>
                <div className="mid-grid">
                    <div className="col">
                        <p>FAQ</p>
                        <p>Investor Relations</p>
                        <p>Privacy</p>
                        <p> Speed Test</p>
                    </div>
                    <div className="col">
                        <p>Help Centre</p>
                        <p>Jobs</p>
                        <p>Cookie Preferences</p>
                        <p> Legal Notices</p>
                    </div>
                    <div className="col">
                        <p> Account</p>
                        <p> Ways to Watch</p>
                        <p> Corporate Information</p>
                        <p> Only on Netflix</p>
                    </div>
                    <div className="col">
                        <p>Media Centre</p>
                        <p>Terms of Use</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <button className='btns'><img src={logo} style={{width:'40px',color:'white',paddingRight:'15px'}}/> English </button>
                <p>Netflix India</p>
                <p className='creator'>Website Created By @AkashDeo</p>
            </div>
        </div>
    )
}

export default Footer
