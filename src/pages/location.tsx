import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

export default function LocationPage() {
return (
<Layout>
  {/*
  <Seo templateTitle='Home' /> */}
  <Seo />

  <div className="css-iex2id max-w-lg container mx-auto text-center my-8">
    <div className="PhotoItem css-mx8zre">
      <NextImage src="/images/chapel.webp" alt="Chapel" width={510} height={400} />
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
      <NextImage src="/images/church.webp" alt="Church" width={510} height={400} />
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