import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
return (
<Layout>
  {/*
  <Seo templateTitle='Home' /> */}
  <Seo />

  <div className="css-iex2id">
    <div className="amatic text-center mt-12">
      <p className="text-4xl font-normal mb-8">First, we met.</p>
      <p className="text-4xl font-normal mb-8">Then, we got engaged.</p>
      <p className="text-4xl font-normal mb-8">Now, we're getting married.</p>
      <p className="text-4xl font-normal mb-8">Join us!</p>
    </div>
    <div className="PhotoItem css-mx8zre container mx-auto max-w-lg">
      <picture className=''>
        <source
          media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_1020.h?ordering=explicit" />
        <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_765.h?ordering=explicit" />
        <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_765.h?ordering=explicit" />
        <source media="(min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_510.h?ordering=explicit" />
        <source media="(min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_510.h?ordering=explicit" />
        <source media="(min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_510.h?ordering=explicit" />
        <source
          srcSet="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_510.h?ordering=explicit" />
        <img loading="eager" alt=""
          src="https://media-api.xogrp.com/images/895f1d1f-1dde-46d2-8d6e-900885d4919b~rt_auto-cr_438.96.1830.1139-rs_510.h?ordering=explicit"
          className="css-1ago99h" />
      </picture>
    </div>
  </div>


</Layout>
);
}