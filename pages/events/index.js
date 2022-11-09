import { EventList } from '../../components/Event';
import { getAllEvents } from '../../data/dummy-data';
function AllEventPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEventPage;
