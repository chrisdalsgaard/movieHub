import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, isLoading, error, checkSession } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>here goes the main movie page....lists within catagories</p>
        </div>
      </main>
    </div>
  );
}
