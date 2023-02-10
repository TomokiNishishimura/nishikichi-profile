import styles from 'styles/Home.module.css'

// interfaceでも可
// 両者の違いはこの記事がわかりやすかった
// https://zenn.dev/luvmini511/articles/6c6f69481c2d17
type Props = {
  title: String;
  subtitle: String;
};

const Hero = ({title, subtitle}: Props) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}

export default Hero