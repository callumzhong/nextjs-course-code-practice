import EventItem from './Item';

export default function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => {
        <EventItem />;
      })}
    </ul>
  );
}
