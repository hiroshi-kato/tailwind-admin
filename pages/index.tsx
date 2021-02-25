import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <h1 className='text-4xl'>Hello Next.js 👋</h1>
    <p>
      <Link href='/about'>
        <a className='text-blue-500'>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
