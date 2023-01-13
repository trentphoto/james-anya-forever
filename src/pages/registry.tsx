import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

export default function RegistryPage() {
return (
<Layout>
  {/*
  <Seo templateTitle='Home' /> */}
  <Seo />

  <div className="container mx-auto my-20">
    <div className="text-center">
      <ButtonLink variant='dark' href='https://www.amazon.com/wedding/james-trent-anya-mumma-lancaster-april-2022/registry/2BQZVNAN87VX9'>View Registry on Amazon</ButtonLink>
    </div>
  </div>


</Layout>
);
}