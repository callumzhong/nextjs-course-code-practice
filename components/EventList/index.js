import EventItem from './Item';

export default function EventList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          date={item.date}
          image={item.image}
          location={item.location}
          title={item.title}
        />
      ))}
    </ul>
  );
}
