import React, { useState, useEffect } from 'react'
import baseUrl from '../../baseUrl'

const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [allEmails, setAllEmails] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`${baseUrl}/api/all-submitted-form`)
            const data = await res.json();
            setAllEmails(data)
        }
        fetchData();

    }, [])


    const handleSubmit = (e) => {
        debugger
        e.preventDefault()
        console.log('Sending')
        let data = {
            name,
            email,
            phone,
            subject,
            message
        }

        fetch(`${baseUrl}/api/submit-contact-form`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setEmail('')
            }
        })
    }



    return (
        <div className='layout_padding'>
            <section className="contact-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="fa fa-info"></span>
                                </div>
                                <h3 className="contact-info__title">About</h3>
                                <p className="contact-info__text">Lorem ipsum is simply free text dolor sit amet, conse ullam blandit.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="fa fa-address-card"></span>
                                </div>
                                <h3 className="contact-info__title">address</h3>
                                <p className="contact-info__text">60 broklyn golden street,  New york. United States of America</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            <div className="contact-info__single contact-info__single-last">
                                <div className="contact-info__icon">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <h3 className="contact-info__title">contact</h3>
                                <h4>
                                    <a href="mailto:needhelp@company.com" className="contact-info__mail">needhelp@company.com </a>
                                    <a href="tel:926668880000" className="contact-info__phone">92 666 888 0000</a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page contact-page-two">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">contact with us</span>
                        <h2 className="section-title__title">have any questions?</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-page__form">
                                <form onSubmit={handleSubmit} className="comment-one__form contact-form-validated">
                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your name" name="name" onChange={(e) => { setName(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Email address" name="email" onChange={(e) => { setEmail(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Phone number" name="phone" onChange={(e) => { setPhone(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Subject" name="subject" onChange={(e) => { setSubject(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box">
                                                <textarea name="message" placeholder="Write a message" onChange={(e) => { setMessage(e.target.value) }} ></textarea>
                                            </div>
                                            <button type="submit" className="thm-btn comment-form__btn">send a message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-page contact-page-two">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="section-title__tagline">contact with us</span>
                        <h2 className="section-title__title">have any questions?</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Subject</th>
                                        <th>Message</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allEmails && allEmails.map((item, idx) => (
                                        <tr key={idx}>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.subject}</td>
                                            <td>{item.message}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ContactUs