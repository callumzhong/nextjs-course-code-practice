import { useRouter } from 'next/router';

const ClientsProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>The Clients Project Page</div>;
};

export default ClientsProjectPage;
