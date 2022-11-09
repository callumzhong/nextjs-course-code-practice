import { useRouter } from 'next/router';
import {
  EventContent,
  EventLogistics,
  EventSummary,
} from '../../components/Event';
import { getEventById } from '../../data/dummy-data';

function EventDetailPage() {
  const router = useRouter();
  const { eventId } = router.query;
  console.log(
    '🚀 ~ file: [eventId].js ~ line 12 ~ EventDetailPage ~ eventId',
    eventId,
  );
  const event = getEventById(eventId);
  console.log(
    '🚀 ~ file: [eventId].js ~ line 14 ~ EventDetailPage ~ event',
    event,
  );

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
