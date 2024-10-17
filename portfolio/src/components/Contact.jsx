import React, { Component } from 'react';

import GitHub from '../assets/GitHub.jsx';
import LinkedIn from '../assets/LinkedIn.jsx';
import Email from '../assets/Email.jsx';
import PhoneCall from '../assets/PhoneCall.jsx';
import TextMessage from '../assets/TextMessage.jsx';
import '../PortfolioStyles.css';

const MyLinkedIn = 'https://www.linkedin.com/in/taylor-miseray';
const MyGitHub = 'https://github.com/Tmiseray';
const MyEmail = 'mailto:taylormiseray@gmail.com&subject=Portfolio Inquiry&body=Add your inquiry here';
const MyPhone = 'tel:+18504909762';
const MyText = 'sms:+18504909762'


class Contact extends Component {
    render() {
        return (
            <footer className='ContactContainer'>
                <div className='ContactItem'>
                    <a href={MyLinkedIn}>
                        <button type='button'>
                            <LinkedIn />
                        </button>
                    </a>
                </div>
                <div className='ContactItem'>
                    <a href={MyText}>
                        <button type='button'>
                            <TextMessage />
                        </button>
                    </a>
                </div>
                <div className='ContactItem'>
                    <a href={MyEmail}>
                        <button type='button'>
                            <Email />
                        </button>
                    </a>
                </div>
                <div className='ContactItem'>
                    <a href={MyPhone}>
                        <button type='button'>
                            <PhoneCall />
                        </button>
                    </a>
                </div>
                <div className='ContactItem'>
                    <a href={MyGitHub}>
                        <button type='button'>
                            <GitHub />
                        </button>
                    </a>
                </div>
            </footer>
        );
    };
};

export default Contact;