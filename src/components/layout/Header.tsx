import Link from 'next/link';
import * as React from 'react';

export default function Header() {
  return (
    <header className=''>
      
      <div className="css-fsfrbf">
        <picture className="css-1ago99h">
          <source
            media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_2560.h?ordering=explicit" />
          <source
            media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_2048.h?ordering=explicit" />
          <source
            media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_1536.h?ordering=explicit" />
          <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_960.h?ordering=explicit" />
          <source
            media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_1920.h?ordering=explicit" />
          <source
            media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_1536.h?ordering=explicit" />
          <source
            media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_1152.h?ordering=explicit" />
          <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_720.h?ordering=explicit" />
          <source media="(min-width: 1280px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_1280.h?ordering=explicit" />
          <source media="(min-width: 1024px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_1024.h?ordering=explicit" />
          <source media="(min-width: 768px)"
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_768.h?ordering=explicit" />
          <source
            srcSet="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_480.h?ordering=explicit" />
          <img loading="eager" alt="James &amp; Anya Home Page Banner" width="909" height="454"
            src="//www.theknot.com/tk-media/images/d1cb9965-a84d-4b04-8afe-b82e19524743~rt_auto-cr_0.282.909.736-rs_768.h?ordering=explicit"
            className="css-1ago99h" />
        </picture>
      </div>
      <header className="css-mj00yc">
        <h1 className="css-jx617y">James &amp; Anya</h1>
        <div className="css-lxcy76">April 2, 2022 • Lancaster, PA, USA</div>
      </header>
      <picture className="css-as6t7l">
        <source
          media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_3000.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_2560.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_2048.h?ordering=explicit" />
        <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1536.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_2250.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1920.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1536.h?ordering=explicit" />
        <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1152.h?ordering=explicit" />
        <source media="(min-width: 1280px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1500.h?ordering=explicit" />
        <source media="(min-width: 1024px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1280.h?ordering=explicit" />
        <source media="(min-width: 768px)"
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1024.h?ordering=explicit" />
        <source
          srcSet="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_768.h?ordering=explicit" />
        <img loading="eager" alt=""
          src="https://qa-media-api.xogrp.com/images/da2b88ed-57f7-440a-a222-e60ab32c5766~rt_auto-rs_1024.h?ordering=explicit"
          className="css-1ago99h" />
      </picture>
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

    </header>
  );
}
