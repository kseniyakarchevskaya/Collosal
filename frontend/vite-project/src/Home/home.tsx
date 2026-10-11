import { useState, useEffect } from 'react';
import styles from './home.module.scss';
import { im } from '../Photo.ts';
import Project from './Project/project.tsx';
import { NavLink } from 'react-router-dom';
interface PricingPlan {
  id: number;
  title: string;
  price: string;
  feature_1: string;
  feature_2: string;
  feature_3: string;
  feature_4: string;
}
interface TestimonialItem {
  id: number;
  name: string;
  company: string;
  review_text: string;
  avatar_url: string;
}

function Home() {
  const [plans, setPages] = useState<PricingPlan[]>([]);
  const [reviews, setReviews] = useState<TestimonialItem[]>([]); 
  const [currentSlide, setCurrentSlide] = useState<number>(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const [plansRes, testimonials1Res] = await Promise.all([
          fetch('http://localhost:3003/pricing-plans'),
          fetch('http://localhost:3003/testimonials1')
        ]);

        if (!plansRes.ok || !testimonials1Res.ok) throw new Error('Failed to fetch data');

        const plansData = await plansRes.json();
        const testimonials1Data = await testimonials1Res.json();

        setPages(plansData);
        setReviews(testimonials1Data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  if (plans.length === 0 || reviews.length === 0) return null;

    const totalReviews = reviews.length;
    const getSlideIndex = (offset: number) => {
      return (currentSlide + offset + totalReviews) % totalReviews;
    };

  const visibleReviews = [
    reviews[getSlideIndex(-1)], 
    reviews[getSlideIndex(0)],  
    reviews[getSlideIndex(1)],  
  ];
  return (
    <>
      <main>
        <section className={styles.sec1}>
          <div className={styles.txt}>
            <div className={styles.txt1}>
              <p className={styles.pp1}>CLIENT-DEVELOPMENT DRIVEN</p>
              <h1>We Design. We Develop. We Ship. In The Same Day.</h1>
              <p className={styles.pp}>
                We are committed to not making clients wait. We will deliver the work as quickly as
                possible. Even on the same day. Even so, we do not reduce the quality of our work.
              </p>
            </div>
            <div className={styles.butt}>
              <button className={styles.viol}>Send Quote</button>
              <NavLink to={'/blog'}>Learn More</NavLink>
            </div>
          </div>
        </section>
        <section className={styles.sec2}>
          <div className={styles.vn}>
            <div className={styles.kv}>
              <div>
                <div className={styles.im}>
                  <img src={im.figma} />
                </div>
                <p className={styles.zag}>Design</p>
                <p>The project interface will be designed first, our favorite tool is Figma.</p>
              </div>
            </div>
            <div className={styles.kv}>
              <div>
                <div className={styles.im}>
                  <img src={im.code} />
                </div>
                <p className={styles.zag}>Develop</p>
                <p>
                  Transform design and write business logic here. Choose the technology you want.
                </p>
              </div>
            </div>
            <div className={styles.kv}>
              <div>
                <div className={styles.im}>
                  <img src={im.box} />
                </div>
                <p className={styles.zag}>Ship</p>
                <p>
                  After the work is complete, we will send the project and all its assets to you.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec3}>
          <div className={styles.image}>
            <img src={im.git} />
            <img src={im.for1} />
            <img src={im.gog} />
            <img src={im.mic} />
            <img src={im.fac} />
          </div>
        </section>
        <section className={styles.sec4}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <p className={styles.zz}>HOW WE WORK?</p>
            <h2>Everything is well planned, well designed and developed wholeheartedly</h2>
            <p>
              Careful planning makes us confident, developed with best practices so that the project
              can be maintained. We always test projects before they are shipped.
            </p>
          </div>
        </section>
        <section className={styles.sec5}>
          <div className={styles.left}>
            <p className={styles.z1}>OUR TEAM</p>
            <h3>We're a team of designers, engineers and analysts</h3>
            <p>
              Our team consists of many creative people. We are committed to maintaining quality
              work as well as speed. These creative people work together to create maximum work
              results.
            </p>
            <button>See Our Teams</button>
          </div>
          <div className={styles.right}></div>
        </section>
        <Project />
        <section className={styles.pricingSectionRoot}>
          <div className={styles.pricingMainLayout}>
            <div className={styles.topHeaderGroup}>
              <span>GET STARTED</span>
              <h2>What do you need? Choose a service that can help you</h2>
            </div>
            <div className={styles.cardsGridRow}>
              {plans.map((item, index) => (
                <div
                  key={item.id}
                  className={`${styles.planCard} ${
                    index === 0
                      ? styles.purpleCard
                      : index === 1
                        ? styles.blueCard
                        : styles.magentaCard
                  }`}
                >
                  <div className={styles.cardHeaderRow}>
                    <h3>{item.title}</h3>
                    <div className={styles.priceZone}>
                      <span>Starting from</span>
                      <h2>{item.price}</h2>
                    </div>
                  </div>
                  <div className={styles.featuresListZone}>
                    <p>{item.feature_1}</p>
                    <p>{item.feature_2}</p>
                    <p>{item.feature_3}</p>
                    <p>{item.feature_4}</p>
                  </div>
                  <div className={styles.btnActionZone}>
                    <NavLink to={'/pircing'}>Detail</NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.testimonialsSectionRoot}>
          <div className={styles.testimonialsMainLayout}>
            <div className={styles.topHeaderGroup}>
              <span>TESTIMONIAL</span>
              <h2>What do our clients say that we never let down?</h2>
            </div>
            <div className={styles.sliderGridRow}>
              {visibleReviews.map((item, index) => (
                <div 
                  key={`${item.id}-${index}`} 
                  className={`${styles.testimonialCard} ${
                    index === 1 ? styles.activeCard : ''
                  }`}
                >
                  <div className={styles.avatarZone}>
                    <img src={item.avatar_url} alt={item.name} />
                  </div>

                  <div className={styles.userMetaZone}>
                    <h3>{item.name}</h3>
                    <p>{item.company}</p>
                  </div>

                  <div className={styles.reviewTextZone}>
                    <p>{item.review_text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sliderDotsRow}>
              {reviews.map((_, index) => (
                <span 
                  key={index}
                  className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
