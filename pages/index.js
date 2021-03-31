import React, { useState } from "react";
import Head from "next/head";
import { logo, hamburger } from "../utils/svg";

export default function Home() {

  const [openNav, setOpenNav] = useState(false)

  const navStyle = {
    opacity: openNav ? 1 : 0,
    display: openNav ? 'block' : 'none'
  }

  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <header>
          <nav>

            <div className="menu-desktop">
              <div className="logo">{logo}</div>
              <div className="links">
                <a href="#">
                  Mobile <i className="fas fa-chevron-down"></i>
                </a>
                <a href="#">
                  Company <i className="fas fa-chevron-down"></i>
                </a>
                <a href="#">
                  Connect <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
            <div className="right">
              <a href="#">Login</a>
              <a href="#" className="button">
                Sign Up
              </a>
            </div>


            <div className="mobile">
              <div className="logo">{logo}</div>
              <div className="menu-icon" onClick={ () => setOpenNav(!openNav)}>{hamburger}</div>
              <div className="nav" style={ navStyle}>
              <a href="#">
                  Mobile <i className="fas fa-chevron-down"></i>
                </a>
                <a href="#">
                  Company <i className="fas fa-chevron-down"></i>
                </a>
                <a href="#">
                  Connect <i className="fas fa-chevron-down"></i>
                </a>
              </div>
            </div>
          
          
          </nav>
          <div className="hero">
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="ctagroup">
              <a href="#" className="button">
                Start for free
              </a>
              <a href="#" className="button outline">
                Learn more
              </a>
            </div>
          </div>
        </header>

        <section className="features">
          <div className="box">
            <h2 className="section-title">Designed for the future</h2>

            <div className="container">
              <div className="pars">
                <div className="paragraph 1">
                  <h3>Introducing an extensible editor</h3>
                  <p>
                    Blogr features an exceedingly intuitive interface which lets
                    you focus on one thing: creating content. The editor
                    supports management of multiple blogs and allows easy
                    manipulation of embeds such as images, videos, and Markdown.
                    Extensibility with plugins and themes provide easy ways to
                    add functionality or change the looks of a blog.
                  </p>
                </div>
                <div className="paragraph 2">
                  <h3>Robust content management</h3>
                  <p>
                    Flexible content management enables users to easily move
                    through posts. Increase the usability of your blog by adding
                    customized categories, sections, format, or flow. With this
                    functionality, you’re in full control.
                  </p>
                </div>
              </div>

              <img
                src="/images/illustration-editor-desktop.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </section>

        <section className="infrastructure">
          <div className="bg"></div>
          <div className="box">
            <div className="phones">
              <img src="/images/illustration-phones.svg" alt="" srcset="" />
            </div>
            <div className="text">
              <h2>State of the Art Infrastructure</h2>
              <p>
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </section>

        <section className="last-section">
          <div className="box">

            <div className="img">
              <img
                src="/images/illustration-laptop-desktop.svg"
                alt=""
                srcset=""
              />
            </div>

            <div className="pars">
              <div className="last-paragraph">
                <h3>Introducing an extensible editor</h3>
                <p>
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor
                  supports management of multiple blogs and allows easy
                  manipulation of embeds such as images, videos, and Markdown.
                  Extensibility with plugins and themes provide easy ways to
                  add functionality or change the looks of a blog.
                  </p>
              </div>
              <div className="last-paragraph">
                <h3>Robust content management</h3>
                <p>
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you’re in full control.
                  </p>
              </div>
            </div>

          </div>

        </section>
      </main>
    </React.Fragment>
  );
}
