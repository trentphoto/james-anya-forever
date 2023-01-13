import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

          <div className="css-1oteowz">
            <div className="css-1c9a4c6"></div>
            <div className="css-1abgt8j">
              <div className="container mx-auto max-w-6xl mt-8">
                <NextImage src="/images/cover.jpeg" alt="James + Anya" width={1200} height={800} className="w-full" />
              </div>
              <div className="css-iex2id">
                <div className="css-1x008t6">
                  <div className="css-sue7w">
                    <div className="css-1yltisf"><span>April 2, 2022</span></div>
                  </div>
                  <div className="css-1jqzgsk">
                    <div className="css-1yltisf">Lancaster<br /> PA</div>
                  </div>
                </div><Link href="/rsvp" className="css-mpbys9">RSVP</Link>
                <div className="css-xtb3p0">
                  <div className="css-1gcbltk">
                    <div className="css-15r1rym">
                      <h4 className="css-1iy9kzs">Wedding Day</h4>
                      <div className="css-1kcp5eu">April 2, 2022</div>
                      <div className="css-1kcp5eu"></div>
                    </div>
                  </div>
                  <div className="css-ntrm32">
                    <div className="css-1lny5v">
                      <div className="css-8m99gz">
                        <h4 className="css-1l7q3lo">4:00 PM - 5:00 PM</h4>
                      </div>
                      <div className="css-o4mq2x">
                        <h4 className="css-1emsnw">4:00 PM - 5:00 PM</h4>
                        <h4 className="css-1l7q3lo">Ceremony</h4>
                        <div className="css-1hqw6ge">
                          <div className="css-1wr11k6">Willow Valley Chapel</div>
                          <div className="css-1wr11k6">2400 Willow Street Pike, Lancaster, PA, 17602, United States</div>
                        </div>
                      </div>
                    </div>
                    <div className="css-1lny5v">
                      <div className="css-8m99gz">
                        <h4 className="css-1l7q3lo">6:00 PM</h4>
                      </div>
                      <div className="css-o4mq2x">
                        <h4 className="css-1emsnw">6:00 PM</h4>
                        <h4 className="css-1l7q3lo">Reception</h4>
                        <div className="css-1hqw6ge">
                          <div className="css-1wr11k6">Mill Creek Bible Church</div>
                          <div className="css-1wr11k6">270 Strasburg Pike, Lancaster, PA, 17602, United States</div>
                        </div>
                        <div className="css-1hqw6ge">Attire: Formal Dress Wear</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-1f79j9i">
                  <ul className="css-rccscy">
                    <li className="css-e34m0p"><Link className="css-12he7qw" href="/"><span
                          className="css-5znzvm">Home</span></Link></li>
                    <li className="css-e34m0p"><Link className="css-12he7qw"
                        href="/our-story"><span className="css-11by0lh">Our Story</span></Link>
                    </li>
                    <li className="css-e34m0p"><Link className="css-12he7qw"
                        href="/photos"><span className="css-11by0lh">Photos</span></Link></li>
                    <li className="css-e34m0p"><Link className="css-12he7qw"
                        href="/wedding-party"><span className="css-11by0lh">Wedding
                          Party</span></Link></li>
                    <li className="css-e34m0p"><Link className="css-12he7qw"
                        href="/location"><span className="css-11by0lh">Location</span></Link></li>
                    <li className="css-e34m0p"><Link className="css-12he7qw" href="/registry"><span
                          className="css-11by0lh">Registry</span></Link></li>
                    <li className="css-e34m0p"><Link className="css-12he7qw"
                        href="/rsvp"><span className="css-11by0lh">RSVP</span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </Layout>
  );
}