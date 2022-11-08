import { useRouter } from 'next/router';

const SelectedClientProjectPage = () => {
  const router = useRouter();
  return (
    <div>
      <ul>
        {Object.entries(router.query).map(
          ([key, value], idx) => (
            <li key={idx}>
              key: {key}
              <br />
              value: {value}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default SelectedClientProjectPage;
