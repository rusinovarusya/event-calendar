import Icon from '../../../shared/ui/icon/Icon';
import Text from '../../../shared/ui/text/Text';
import styles from './Gallery.module.scss';

interface GalleryProps {
  eventId: string;
}

const Gallery = ({ eventId }: GalleryProps) => {
  const imageList = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8'].map((name: string) => name + eventId);

  const prev = () => {}

  const next = () => {}

  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <Text styleName='h3'>Галерея</Text>
        <div className={styles.bullet}>
          <button className={styles.button} onClick={prev}>
            <Icon name='left-arrow' width={32} height={32}/>
          </button>
          <button className={styles.button} onClick={next}>
            <Icon name='right-arrow' width={32} height={32}/>
          </button>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.placeholder}>
          <div className={styles.content}>
            {imageList.map((img, index) => (
              <img className={styles.img} src={img} alt={img} key={`${img}-${index}`} />
            ))}
          </div>
        </div>
        <div className={styles.breadcrumbs}>
          {imageList.map((item, index) => (
            <label htmlFor={String(item)} className={styles.breadcrumbItem} key={index}>
              <input type='radio' id={String(item)} className={styles.input} name='breadcrumb' defaultChecked={index === 0} />
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
