import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function OurStoryPage() {
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
      <NextImage src="/images/our-story.webp" alt="Our Story" width={510} height={400} />
    </div>
  </div>


</Layout>
);
}