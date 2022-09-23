import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import CommentModal from '../components/CommentModal'


export default function Home({newsResults, randomUsersResults}) {
  return (
    <div >
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto '>
        <Sidebar/>
      
      {/* Feed */}
      <Feed/>

      {/* widget */}
      <Widgets newsResults = {newsResults.articles} randomUsersResults = {randomUsersResults.results}/>

      {/* Modal */}
      <CommentModal/>

      </main>

      
    </div>
  )
}


//https://saurav.tech/NewsAPI/top-headlines/category/bussiness/us.json

export async function getServerSideProps() {
  const newsResults = await fetch ("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res)=> res.json());

  // Who to follow section "https://randomuser.me/api/?results=5000"

  let randomUsersResults = [];
  try {
    const res = await fetch(
      "https://randomuser.me/api/?results=5&inc=name,login,picture"
    );

    randomUsersResults = await res.json();
  } catch (e) {
    randomUsersResults = [];
  }
  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}
