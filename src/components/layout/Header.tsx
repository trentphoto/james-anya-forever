import Link from 'next/link';
import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function Header() {
  return (
    <>
      <header className="css-mj00yc mt-24">
        <h1 className="css-jx617y">James &amp; Anya</h1>
        <div className="css-lxcy76">April 2, 2022 • Lancaster, PA, USA</div>
      </header>
      <div className="css-1ago99h block">
        <NextImage src="/images/lights.webp" alt="Anya + James" width={2000} height={400} className="w-full" />
      </div>
      <header className="css-ou2xl5">
        <h1 className="css-jx617y">James &amp; Anya</h1>
        <div className="css-lxcy76">April 2, 2022 • Lancaster, PA, USA</div>
      </header>
      <div className="css-1rf9dig"><button className="css-bcsx0a"><span className="css-7wwr3e"></span><span className="css-1wkn33">Menu
            Button</span></button></div>
      <div className="css-2z2po7">
        <h2 className="css-1f59of7">J&amp;A</h2>
      </div>
      <nav role="navigation" className="css-1htxqsx">
        <div className="css-nfosgx">
          <ul className="css-kxffhl">
            <li className="css-1h34bd1"><Link className="css-12he7qw" href="/"><span
                  className="css-11by0lh">Home</span></Link></li>
            <li className="css-1h34bd1"><Link className="css-12he7qw"
                href="/our-story"><span className="css-11by0lh">Our Story</span></Link>
            </li>
            <li className="css-1h34bd1"><Link className="css-12he7qw"
                href="/photos"><span className="css-11by0lh">Photos</span></Link></li>
            <li className="css-1h34bd1"><Link className="css-12he7qw"
                href="/wedding-party"><span className="css-11by0lh">Wedding
                  Party</span></Link></li>
            <li className="css-1h34bd1"><Link className="css-12he7qw"
                href="/location"><span className="css-11by0lh">Location</span></Link></li>
            <li className="css-1h34bd1"><Link className="css-12he7qw" href="/registry"><span
                  className="css-11by0lh">Registry</span></Link></li>
            <li className="css-1h34bd1"><Link className="css-12he7qw"
                href="/rsvp"><span className="css-11by0lh">RSVP</span></Link></li>
          </ul>
        </div>
      </nav>
      <nav className="css-o8h4rm">
        <div className="css-1bpqnod">
          <ul className="css-16kcklx">
            <li className="css-haue6f"><Link className="css-1x9swe2" href="/"><span
                  className="css-umenba">Home</span></Link></li>
            <li className="css-haue6f"><Link className="css-1x9swe2"
                href="/our-story"><span className="css-umenba">Our Story</span></Link>
            </li>
            <li className="css-haue6f"><Link className="css-1x9swe2"
                href="/photos"><span className="css-umenba">Photos</span></Link></li>
            <li className="css-haue6f"><Link className="css-1x9swe2"
                href="/wedding-party"><span className="css-umenba">Wedding
                  Party</span></Link></li>
          </ul>
          <ul className="css-16kcklx">
            <li className="css-haue6f"><Link className="css-1x9swe2"
                href="/location"><span className="css-umenba">Location</span></Link></li>
            <li className="css-haue6f"><Link className="css-1x9swe2" href="/registry"><span
                  className="css-umenba">Registry</span></Link></li>
            <li className="css-haue6f"><Link className="css-1x9swe2"
                href="/rsvp"><span className="css-umenba">RSVP</span></Link></li>
          </ul>
        </div>
      </nav>

    </>
  );
}
