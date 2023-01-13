import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function PhotosPage() {
return (
<Layout>
  {/*
  <Seo templateTitle='Home' /> */}
  <Seo />

  <div className="css-iex2id">

    <div className="PhotoItem css-mx8zre max-w-lg mx-auto mt-12">
      <NextImage src="/images/photos.webp" alt="Us" width={510} height={400} />
    </div>

  </div>


</Layout>
);
}