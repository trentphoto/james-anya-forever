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

    <div className="css-1ue9czc">
      <div className="css-1hwb7l6 grid grid-cols-2 gap-y-20 text-center items-center justify-center container mx-auto my-12 max-w-2xl">
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <picture className=''>
              <source
                media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_300.h?ordering=explicit" />
              <source
                media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_300.h?ordering=explicit" />
              <source
                media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_300.h?ordering=explicit" />
              <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_300.h?ordering=explicit" />
              <source
                media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_225.h?ordering=explicit" />
              <source
                media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_225.h?ordering=explicit" />
              <source
                media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_225.h?ordering=explicit" />
              <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_225.h?ordering=explicit" />
              <source media="(min-width: 1280px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_150.h?ordering=explicit" />
              <source media="(min-width: 1024px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_150.h?ordering=explicit" />
              <source media="(min-width: 768px)"
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_150.h?ordering=explicit" />
              <source
                srcSet="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_150.h?ordering=explicit" />
              <img loading="eager" alt="Evan Genter"
                src="//www.theknot.com/tk-media/images/620da8b5-2181-4330-8848-126540becfd2~rt_auto-cr_554.154.1804.1404-rs_150.h?ordering=explicit"
                className="css-1v1i2tj" />
            </picture>
          </div>
          <div className="css-1jv9ak8">Evan Genter - Best Man</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <picture>
              <source
                media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_300.h?ordering=explicit" />
              <source
                media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_300.h?ordering=explicit" />
              <source
                media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_300.h?ordering=explicit" />
              <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_300.h?ordering=explicit" />
              <source
                media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_225.h?ordering=explicit" />
              <source
                media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_225.h?ordering=explicit" />
              <source
                media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_225.h?ordering=explicit" />
              <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_225.h?ordering=explicit" />
              <source media="(min-width: 1280px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_150.h?ordering=explicit" />
              <source media="(min-width: 1024px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_150.h?ordering=explicit" />
              <source media="(min-width: 768px)"
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_150.h?ordering=explicit" />
              <source
                srcSet="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_150.h?ordering=explicit" />
              <img loading="eager" alt="Kyra Wakefield"
                src="//www.theknot.com/tk-media/images/8acdb9ec-a16c-47da-963b-45acf1434000~rt_auto-cr_500.462.1171.1133-rs_150.h?ordering=explicit"
                className="css-1v1i2tj" />
            </picture>
          </div>
          <div className="css-1jv9ak8">Kyra Wakefield - Matron of Honor</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
          <picture>
            <source
              media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_300.h?ordering=explicit" />
            <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_225.h?ordering=explicit" />
            <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_225.h?ordering=explicit" />
            <source media="(min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_150.h?ordering=explicit" />
            <source media="(min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_150.h?ordering=explicit" />
            <source media="(min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_150.h?ordering=explicit" />
            <source
              srcSet="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_150.h?ordering=explicit" />
            <img loading="eager" alt="Elbert Cheong"
              src="//www.theknot.com/tk-media/images/52749353-3dd4-4395-8d62-15ff4cb0b787~rt_auto-cr_0.0.640.640-rs_150.h?ordering=explicit"
              className="css-1v1i2tj" />
          </picture>
          </div>
          <div className="css-1jv9ak8">Elbert Cheong - Groomsman</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
          <picture>
            <source
              media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_300.h?ordering=explicit" />
            <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_225.h?ordering=explicit" />
            <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_225.h?ordering=explicit" />
            <source media="(min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_150.h?ordering=explicit" />
            <source media="(min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_150.h?ordering=explicit" />
            <source media="(min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_150.h?ordering=explicit" />
            <source
              srcSet="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_150.h?ordering=explicit" />
            <img loading="eager" alt="Nicole Joy Anderson"
              src="//www.theknot.com/tk-media/images/971c919c-fc23-419e-8230-39ed5c27cec0~rt_auto-cr_72.430.752.1111-rs_150.h?ordering=explicit"
              className="css-1v1i2tj" />
          </picture>
          </div>
          <div className="css-1jv9ak8">Nicole Joy Anderson - Maid of Honor</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
          <picture>
            <source
              media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_300.h?ordering=explicit" />
            <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_225.h?ordering=explicit" />
            <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_225.h?ordering=explicit" />
            <source media="(min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_150.h?ordering=explicit" />
            <source media="(min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_150.h?ordering=explicit" />
            <source media="(min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_150.h?ordering=explicit" />
            <source
              srcSet="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_150.h?ordering=explicit" />
            <img loading="eager" alt="Lillía Mumma"
              src="//www.theknot.com/tk-media/images/f892075c-2907-4eb2-a36b-823b27fb3449~rt_auto-cr_0.0.1053.1053-rs_150.h?ordering=explicit"
              className="css-1v1i2tj" />
          </picture>
          </div>
          <div className="css-1jv9ak8">Lillía Mumma - Groomsman</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
          <picture>
            <source
              media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_300.h?ordering=explicit" />
            <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_225.h?ordering=explicit" />
            <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_225.h?ordering=explicit" />
            <source media="(min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_150.h?ordering=explicit" />
            <source media="(min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_150.h?ordering=explicit" />
            <source media="(min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_150.h?ordering=explicit" />
            <source
              srcSet="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_150.h?ordering=explicit" />
            <img loading="eager" alt="Dejae Dickson"
              src="//www.theknot.com/tk-media/images/95a125ec-7044-46f7-b03b-3547e2813010~rt_auto-cr_205.222.431.448-rs_150.h?ordering=explicit"
              className="css-1v1i2tj" />
          </picture>
          </div>
          <div className="css-1jv9ak8">Dejae Dickson - Bridesmaid</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
          <picture>
            <source
              media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_300.h?ordering=explicit" />
            <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_225.h?ordering=explicit" />
            <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_225.h?ordering=explicit" />
            <source media="(min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_150.h?ordering=explicit" />
            <source media="(min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_150.h?ordering=explicit" />
            <source media="(min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_150.h?ordering=explicit" />
            <source
              srcSet="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_150.h?ordering=explicit" />
            <img loading="eager" alt="Austin Trent"
              src="//www.theknot.com/tk-media/images/7a4a1a56-e4e6-4110-95a5-596b6967ed8d~rt_auto-cr_50.0.1383.1334-rs_150.h?ordering=explicit"
              className="css-1v1i2tj" />
          </picture>
          </div>
          <div className="css-1jv9ak8">Austin Trent - Groomsman</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
          <picture>
            <source
              media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_300.h?ordering=explicit" />
            <source media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_300.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_225.h?ordering=explicit" />
            <source
              media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_225.h?ordering=explicit" />
            <source media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_225.h?ordering=explicit" />
            <source media="(min-width: 1280px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_150.h?ordering=explicit" />
            <source media="(min-width: 1024px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_150.h?ordering=explicit" />
            <source media="(min-width: 768px)"
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_150.h?ordering=explicit" />
            <source
              srcSet="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_150.h?ordering=explicit" />
            <img loading="eager" alt="Hannah B. Sadler"
              src="//www.theknot.com/tk-media/images/df856c87-e9f6-475e-be74-d415a5839e66~rt_auto-cr_0.50.1878.1925-rs_150.h?ordering=explicit"
              className="css-1v1i2tj" />
          </picture>
          </div>
          <div className="css-1jv9ak8">Hannah B. Sadler - Bridesmaid</div>
        </div>
      </div>
    </div>

  </div>


</Layout>
);
}