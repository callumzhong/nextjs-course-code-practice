import AddressIcon from '../Icons/AddressIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import DateIcon from '../Icons/DateIcon';
import Button from '../UI/Button';
import styles from './EventItem.module.css';

export default function EventItem({
  title,
  image,
  date,
  location,
  id,
}) {
  console.log(styles);
  const humanReadableDate = new Date(
    date,
  ).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
