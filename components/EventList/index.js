import EventItem from './Item';
import styles from './styles.module.css';
export default function EventList({ items }) {
  return (
    <ul className={styles.list}>
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
