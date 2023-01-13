import Link from 'next/link';
import * as React from 'react';

export default function Footer() {
return (
<footer className="css-rzmzie">

  <div className="css-1f79j9i">
    <div className="css-rccscy">
        <Link href="/" className="css-e34m0p">
          <span className="css-5znzvm">Home</span>
        </Link>
        <Link href="/our-story" className="css-e34m0p">
            <span className="css-11by0lh">Our Story</span>
        </Link>
        <Link href="/photos" className="css-e34m0p">
            <span className="css-11by0lh">Photos</span>
        </Link>
        <Link href="/wedding-party" className="css-e34m0p">
            <span className="css-11by0lh">Wedding Party</span>
          </Link>
        <Link href="/location" className="css-e34m0p">
            <span className="css-11by0lh">Location</span>
        </Link>
        <Link href="/registry" className="css-e34m0p">
          <span className="css-11by0lh">Registry</span>
          </Link>
        <Link href="/rsvp" className="css-e34m0p">
            <span className="css-11by0lh">RSVP</span>
        </Link>
    </div>
  </div>


  <div className="css-10xb0p9">
    <div className="css-13plroh">J&amp;A</div>
    <div className="css-prffhe">4.2.2022</div>
  </div>
  <div className="css-ilar4i">Created on The Knot<br />Getting married?
    <a href="https://www.theknot.com/gs/wedding-websites" rel="nofollow noopener noreferrer" target="_blank"
      className="underline css-1n7kop4 mx-1">Create your wedding website for free.</a>
  </div>
</footer>
);
}