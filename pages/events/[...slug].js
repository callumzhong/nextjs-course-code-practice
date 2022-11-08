import { useRouter } from 'next/router';

function filteredEventPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Filtered Event Page</h1>
    </div>
  );
}

export default filteredEventPage;
