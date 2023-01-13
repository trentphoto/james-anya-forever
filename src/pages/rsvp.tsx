import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function RSVPPage() {
return (
<Layout>
  {/*
  <Seo templateTitle='Home' /> */}
  <Seo />

  <div className="container mx-auto my-20">
    <div className="text-center">
      <h1>RSVP no longer available - we're already married :).</h1>
    </div>
  </div>


</Layout>
);
}