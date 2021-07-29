import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    navbar,
    navLinks,
    navLinkText3,
    navLinkText2,
    navLinkText,
    hidden,
    hidden2,
    navLinkItem,
    rcorners1,
    rcorners2,
    copyright,
    footer,
    icons_2,
    left,
    lms_teacher,
    mid,
    socials,
    icons,
    right,
    privacy,
    logo,
    button,
    arrow,
  } from './layout.module.css'
const Layout = ({ pageTitle, children }) => {
  return (
    <body>
      <main className={container}>
      <nav className={navbar}>
      <ul className={navLinks}>
      <li >
        <Link to="/" className={navLinkText3}>
        <StaticImage

          alt="E Acad"
          src="../images/e acad.jpg"
        />
        </Link>
      </li>
        <li>
          <Link to="/" className={navLinkText2}>
            E Acad
          </Link>
        </li>
        <li >
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li>
        <li >
          <Link to="/about" className={navLinkText}>
            Contact
          </Link>
        </li>
        </li>
        <li >
          <Link to="/" className={navLinkText}>
            Courses
          </Link>

        </li>
        <li >
          <Link to="/" className={navLinkText}>
            Careers
          </Link>
        </li>
        <li >
          <Link to="/" className={navLinkText}>
            FAQ
          </Link>
        </li>
        <li >
          <Link to="/" className={navLinkText}>
            Blog
          </Link>
        </li>
        <li  className={navLinkItem}>
          <Link to="/" className={rcorners2}>
            Log In
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/" className={rcorners1}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
        <title>{pageTitle}</title>
        {children}
        <Link className={button} to="/">
          <StaticImage className={arrow}
          alt="Up arrow"
          src="../images/white_arrow.png"
          />
        </Link>
      </main>
      <div className={footer}>
        <div className={left}>
          <div className={lms_teacher}>
            <p style={{color:'whitesmoke'}}><u>E Acad Lms</u></p>
            <p style={{color:'whitesmoke'}}><u>Become a Teacher</u></p>
            <p></p>
            <p style={{color:'whitesmoke'}}><u>Our Partners</u></p>
            <p style={{color:'whitesmoke'}}><u>Testimonials</u></p>
            <p style={{color:'whitesmoke'}}><u>FAQs</u></p>
          </div>
        </div>
        <div className={mid}>
          <div className={socials}>
            <Link to="/" >
              <StaticImage  className={logo}
              alt="E Acad logo"
              src="../images/eacad-logo.jpg"
              />
            </Link>
            <p style={{color:'whitesmoke'}}><u>Follow us on social media:</u></p>
            <StaticImage  className={icons}
            alt="Facebook logo"
            src="../images/facebook.png"
            />
            <StaticImage  className={icons}
            alt="Linked In logo"
            src="../images/linked.png"
            />
            <StaticImage  className={icons}
            alt="Youtube logo"
            src="../images/yt.png"
            />
          </div>
        </div>
        <div className={right}>
          <div className={privacy}>
              <p style={{color:'whitesmoke'}}><u>Contact Us</u></p>
              <StaticImage  className={icons_2}
              alt="Phone icon"
              src="../images/phone2.png"
              />
              <StaticImage  className={icons_2}
              alt="Mail icon"
              src="../images/mail.png"
              />
              <p style={{color:'whitesmoke'}}><u>Privacy Note</u></p>
              <p style={{color:'whitesmoke'}}><u>Cookies Notice</u></p>
              <p style={{color:'whitesmoke'}}><u>Terms and Conditions</u></p>
          </div>
        </div>
      </div>
      <div className={copyright}>
        <p style={{color:"whitesmoke"}}><strong>Copyright: E ACAD, 2021</strong></p>
      </div>
    </body>
  )
}
export default Layout
