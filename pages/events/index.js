import { EventList } from '../../components/Event';
import EventSearch from '../../components/Event/EventSearch';
import { getAllEvents } from '../../data/dummy-data';
function AllEventPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventSearch />
      <EventList items={events} />
    </div>
  );
}

export default AllEventPage;
