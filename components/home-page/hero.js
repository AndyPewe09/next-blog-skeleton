import Image from "next/image";

import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/andy.jpg"
          alt="An image showing Andy"
          width={300}
          height={300}
        ></Image>
      </div>

      <h1>Hi, I'm Andy</h1>
      <p>I blog about web development - especially React Native</p>
    </section>
  );
}
 