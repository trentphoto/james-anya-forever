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

    <div className="PhotoItem css-mx8zre max-w-lg mx-auto mt-12">
      <picture>
        <source
          media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_1020.h?ordering=explicit" />
        <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_765.h?ordering=explicit" />
        <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_765.h?ordering=explicit" />
        <source media="(min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_510.h?ordering=explicit" />
        <source media="(min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_510.h?ordering=explicit" />
        <source media="(min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_510.h?ordering=explicit" />
        <source
          srcSet="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_510.h?ordering=explicit" />
        <img loading="eager" alt=""
          src="https://media-api.xogrp.com/images/aec49d9c-441c-4b8c-8a8f-cc1281d7a00d~rt_auto-cr_0.81.1667.1333-rs_510.h?ordering=explicit"
          className="css-1ago99h" />
      </picture>
    </div>

  </div>


</Layout>
);
}