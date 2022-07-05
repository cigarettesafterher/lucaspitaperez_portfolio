import { FeaturedPosts } from '../sections/index';
import { getPosts } from '../services';
import Intro from '../components/Intro';

export default function Home({}) {
  return (
    <div className="container mx-auto px-10 mb-8">

      <Intro />
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {' '}

        <div className="lg:col-span-4 col-span-1">
        {' '}
          <div className="lg:sticky relative top-8">
          {' '}
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

