import EventList from '../components/EventList';
import { getFeaturedEvents } from '../data/dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  console.log(
    '🚀 ~ file: index.js ~ line 6 ~ HomePage ~ featuredEvents',
    featuredEvents,
  );
  return (
    <div>
      <h1>sda</h1>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
