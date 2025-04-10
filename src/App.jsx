import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import building from "./assets/building.png";
import spon from "./assets/sponsr.png";
import http from "./assets/http.png";
import net from "./assets/netflix.png";
import youtube from "./assets/youtube.png";
import hbo from "./assets/hbo.png";
import prime from "./assets/prime.png";
import zav from "./assets/zavod.png";
import mon from "./assets/money.png";
import limit from "./assets/No Limit.png";
import saf from "./assets/Safe.png";
import vpn from "./assets/Fastest VPN.png";
import polic from "./assets/Policy.png";
import qout from "./assets/quotes.png";
import user from "./assets/user.png";
import dote from "./assets/dotes.png";
import zvez from "./assets/zvesda.png";
import sel from "./assets/sel.png";
import fram from "./assets/Frame.png";
import im from "./assets/Group 23.png";
import gr from "./assets/Group 25.png"

const App = () => {
  return (
    <article>
      <header>
        <nav>
          <img src={logo} />
          <li>
            <ul>About</ul>
            <ul>Features</ul>
            <ul>Pricing</ul>
            <ul>Testimonials</ul>
            <ul>Contact</ul>
          </li>
          <aside>
            <button className="log_in">Log in</button>
            <button className="sign_up">Sign up</button>
          </aside>
        </nav>
        <section className="section1">
          <aside className="sec_as">
            <h1>Get access to worlwide content</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </p>
            <p>
              Start from <span className="doll">$2.99</span>/ month
            </p>
            <button className="sign_up get">Get Started</button>
            <p className="day">* 30-Days money back gurantee</p>
          </aside>
          <img src={building} className="bulding" width="750px" />
        </section>
      </header>

      <main>
        <img src={spon} className="spon" />

        <section className="section2">
          <img src={http} className="http" />
          <aside>
            <h1 className="one">One gateway endless entertainment</h1>
            <p>
              Content at the tip of your fingers! With thousands of servers and
              millions of IPs, you can access websites and enjoy your favourite
              movies, TV shows, games, and more; in over 190 countries.
            </p>
            <article>
              <img src={net} />
              <img src={youtube} />
              <img src={prime} />
              <img src={hbo} />
            </article>
          </aside>
        </section>

        <section className="section2 section3">
          <aside>
            <h1 className="one">Putting power back into your hands</h1>
            <p>
              Instant protection to enhance your online privacy. Browse the
              internet safety and anonymously.
            </p>
            <button className="sign_up get st">Get Started</button>
          </aside>
          <img src={zav} className="zav" />
        </section>

        <section className="section2 section3 section4">
          <img src={mon} className="mon" />
          <aside className="days">
            <h1 className="one">30 Days money back guarantee</h1>
            <p>
              Since we trust that you will fall in love with vping, we offer our
              users the option to try it for 30 days. If you don’t enjoy the
              experience, we will give you a 100% refund.
            </p>
            <button className="sign_up get st">Get Started</button>
          </aside>
        </section>

        <section className="section5">
          <h3 className="save">Save big with our annual plans</h3>
          <p className="up">Sign up and save a ton! No logs. No hidden fees.</p>
          <article className="price">
            <article className="Plan">
              <p className="hh prem">Premium Plan</p>
              <h3 className="year">3 Years</h3>
              <h3 className="prValue">
                <span className="prDol">$2.99</span> / month
              </h3>
              <h3 className="dollar">
                $107.55<span className="skidka"> $537.30</span>
              </h3>
              <p className="build">Build every 3 years</p>
              <h3 className="name">Unlimited bandwitch</h3>
              <h3 className="name">Encrypted connection</h3>
              <h3 className="name">No traffic logs</h3>
              <h3 className="name">Works on all devices</h3>
              <h3 className="name">Instant setup</h3>
              <h3 className="name">Torrent allowed</h3>
              <button className="subscribe">Subscribe</button>
            </article>

            <article className="Plan pop">
              <p className="hh">Popular Plan</p>
              <h3 className="year">1 Years</h3>
              <h3 className="prValue">
                <span className="prDol">$7.59</span> / month
              </h3>
              <h3 className="dollar">
                $92.26<span className="skidka"> $170.88</span>
              </h3>
              <p className="build">Build every years</p>
              <h3 className="name">Unlimited bandwitch</h3>
              <h3 className="name">Encrypted connection</h3>
              <h3 className="name">No traffic logs</h3>
              <h3 className="name">Works on all devices</h3>
              <h3 className="name">Instant setup</h3>
              <h3 className="name">Torrent allowed</h3>
              <button className="subscribe brn">Subscribe</button>
            </article>

            <article className="Plan">
              <p className="hh bas">Basic Plan</p>
              <h3 className="year">Monthly</h3>
              <h3 className="prValue">
                <span className="prDol">$14.99</span> / month
              </h3>
              <h3 className="dollar">
                $107.55<span className="skidka"> $537.30</span>
              </h3>
              <p className="build">billed monthly</p>
              <h3 className="name">Unlimited bandwitch</h3>
              <h3 className="name">Encrypted connection</h3>
              <h3 className="name">No traffic logs</h3>
              <h3 className="name">Works on all devices</h3>
              <h3 className="name">Instant setup</h3>
              <h3 className="name">Torrent allowed</h3>
              <button className="subscribe">Subscribe</button>
            </article>
          </article>
        </section>

        <section className="section6">
          <h1 className="premium">A premium experience</h1>
          <article>
            <aside className="box">
              <img src={limit} />
              <h1>No Limits</h1>
              <p>Enjoy unlimited data - nothing will stop you!</p>
            </aside>
            <aside className="box">
              <img src={saf} />
              <h1>100% Safe</h1>
              <p>All your data is encrypted, keeping you safe!</p>
            </aside>
            <aside className="box">
              <img src={vpn} />
              <h1>Fastest VPN</h1>
              <p>HD Streaming with fastest VPN, no buffering!</p>
            </aside>
            <aside className="box">
              <img src={polic} />
              <h1>No-Logs Policy</h1>
              <p>Maintain your online privacy and anonymity.</p>
            </aside>
          </article>
        </section>

        <section className="section7">
          <h1 className="high">The highest rated VPN</h1>
          <p className="tr">Trusted and loved by our users</p>
          <article>
            <aside className="left">
              <aside>
                <img src={qout} className="qout" />
                <p>
                  Since we trust that you will fall in love with vping, we offer
                  our users the option to try it for 30 days. If you don’t enjoy
                  the experience, we will give you a 100% refund. It is a long
                  established fact that a reader will be distracted.
                </p>
              </aside>
              <img className="user" src={user} />
            </aside>
            <img src={zvez} className="zvez" />
          </article>
          <img src={dote} className="dotes" />
        </section>

        <section className="section8">
          <h1>Questions users are asking</h1>
          <article>
            <img src={sel} className="sels" />
            <img src={sel} className="sels" />
          </article>
        </section>
      </main>

      <footer>
        <section className="section1">
          <img src={fram} className="frrr" />
          <aside className="sec_as online">
            <h1 className="what">
              Get what you need online, completely undetected.
            </h1>
            <p>
              30 Day money back guarantee. If you’re not 100% satisfied with
              vping. We’ll refund your payment. No hassle, no risk.
            </p>
            <img src={im} className="imm" />
            <p>
              Start from <span className="doll">$2.99</span>/ month
            </p>
            <button className="sign_up get">Get Started</button>
          </aside>
        </section>

        <section className="section10">
          <aside className="foot_as">
            <img src={logo} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </aside>
          <li className="prod">
            <ul className="kkk">Product</ul>
            <ul>Download</ul>
            <ul>Pricing</ul>
            <ul>Server</ul>
            <ul>VPN for Business</ul>
            <ul>VPN for Non-Profit</ul>
          </li>
          <li className="prod">
            <ul className="kkk">Company</ul>
            <ul>What’s is VPN?</ul>
            <ul>FAQ</ul>
            <ul>Tuitorials</ul>
            <ul>About us</ul>
            <ul>Privacy Policy</ul>
          </li>
          <img src={gr} className="grgr" />
        </section>
      </footer>
    </article>
  );
};

export default App;
