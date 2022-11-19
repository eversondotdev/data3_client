import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";

interface isData {
  id: number;
  name: string;
  age: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Companies() {
  const { data, error } = useSWR("/api/profiles", fetcher);

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <>
    <Head>
        <title>Companies List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
      {data.map((i: isData) => (
        <ul key={i.id}>
          <li> {i.name} </li>
          <li> {i.age} </li>
          <li>
            <Link href={`/companies/${i.id}`}> Page link </Link>
          </li>
        </ul>
      ))}
    </>
  );
}
