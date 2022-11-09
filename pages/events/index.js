import { useRouter } from 'next/router';
import { EventList } from '../../components/Event';
import EventSearch from '../../components/Event/EventSearch';
import { getAllEvents } from '../../data/dummy-data';
function AllEventPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventPage;
