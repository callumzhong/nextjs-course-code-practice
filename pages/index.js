import { EventList } from '../components/Event';
import { getFeaturedEvents } from '../data/dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
