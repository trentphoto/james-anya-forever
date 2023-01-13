import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function WeddingPartyPage() {
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
            <NextImage src="/images/evan.webp" alt="Evan Genter" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Evan Genter - Best Man</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/kyra.webp" alt="Kyra Wakefield" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Kyra Wakefield - Matron of Honor</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/elbert.webp" alt="Elbert Cheong" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Elbert Cheong - Groomsman</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/nicole.webp" alt="Nicole Joy Anderson" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Nicole Joy Anderson - Maid of Honor</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/lilli.webp" alt="Lillía Mumma" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Lillía Mumma - Groomsman</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/dejae.webp" alt="Dejae Dickson" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Dejae Dickson - Bridesmaid</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/austin.webp" alt="Austin Trent" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Austin Trent - Groomsman</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden w-40 border border-gray-400">
            <NextImage src="/images/hannah.webp" alt="Hannah B. Sadler" width={160} height={160} />
          </div>
          <div className="css-1jv9ak8">Hannah B. Sadler - Bridesmaid</div>
        </div>
      </div>
    </div>

  </div>


</Layout>
);
}