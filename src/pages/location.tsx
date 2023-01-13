import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
return (
<Layout>
  {/*
  <Seo templateTitle='Home' /> */}
  <Seo />

  <div className="css-iex2id max-w-lg container mx-auto text-center my-8">
    <div className="PhotoItem css-mx8zre">
      <picture>
        <source
          media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_1020.h?ordering=explicit" />
        <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_765.h?ordering=explicit" />
        <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_765.h?ordering=explicit" />
        <source media="(min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_510.h?ordering=explicit" />
        <source media="(min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_510.h?ordering=explicit" />
        <source media="(min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_510.h?ordering=explicit" />
        <source
          srcSet="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_510.h?ordering=explicit" />
        <img loading="eager" alt=""
          src="https://media-api.xogrp.com/images/cac40e73-7733-499e-a828-7804c8e479a0~rt_auto-cr_96.0.1973.1407-rs_510.h?ordering=explicit"
          className="css-1ago99h" />
      </picture>
    </div>
    <h4 className="HeadlineItem css-1ypgl9o">Ceremony</h4>
    <h3 className="HeadlineItem css-3hfvxm">Willow Valley Chapel</h3>
    <div className="ParagraphItem css-d2rgm4">
      <p className="ql-align-center">2400 Willow Street Pike, Lancaster, PA</p>
    </div>
    <div className="ParagraphItem css-d2rgm4">
      <p className="ql-align-center">—————</p>
    </div>
    <div className="PhotoItem css-mx8zre">
      <picture>
        <source
          media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_1020.h?ordering=explicit" />
        <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_1020.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_765.h?ordering=explicit" />
        <source
          media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_765.h?ordering=explicit" />
        <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_765.h?ordering=explicit" />
        <source media="(min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_510.h?ordering=explicit" />
        <source media="(min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_510.h?ordering=explicit" />
        <source media="(min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_510.h?ordering=explicit" />
        <source
          srcSet="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_510.h?ordering=explicit" />
        <img loading="eager" alt=""
          src="https://media-api.xogrp.com/images/b85ae8a5-15d6-4212-b462-9c4cc67dc8e6~rt_auto-cr_208.0.1146.703-rs_510.h?ordering=explicit"
          className="css-1ago99h" />
      </picture>
    </div>
    <h4 className="HeadlineItem css-1ypgl9o">Reception</h4>
    <h3 className="HeadlineItem css-3hfvxm">Mill Creek Bible Church</h3>
    <div className="ParagraphItem css-d2rgm4">
      <p className="ql-align-center">270 Strasburg Pike, Lancaster, PA 17602</p>
      <p><br /></p>
      <p className="ql-align-center"><br /></p>
    </div>
  </div>


</Layout>
);
}