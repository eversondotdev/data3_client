import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CompaniesDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/profiles/${id}` : null, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>Company: {data.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      hello {data.name}
    </>
  );
}
