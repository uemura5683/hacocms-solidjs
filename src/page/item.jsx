import { render } from 'solid-js/web';
import ItemList from '../components/itemextend';
import styles from '../assets/css/App.module.css';

function Item() {
  return (
    <>
      <div class={styles.l_container}>
        <main class={styles.l_main}>
          <ul class={styles.c_itemlist}>
            <ItemList />
          </ul>
        </main>
      </div>
    </>
  );
}
render(() => <Item />, document.getElementById('root'));