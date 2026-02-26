import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Home.css';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Miguel L.",
      text: "I've done a lot of martial arts in my life. I've tried Brazilian Jiu-Jitsu, kickboxing and I've taken other self defense classes. None of that compares to the amount of knowledge and skill that I have learned at Shao-Lin New Mexico. They truly do teach the most complete martial art out there, Shao-Lin Kung-Fu!"
    },
    {
      name: "Reuben I.",
      text: "A rare jewel in the desert. There is so much history and education not only to enrich oneself physically but mentally and spiritually. I always think of this place and what I've learned."
    },
    {
      name: "Noah D.",
      text: "It has been one of the major blessings of 2013 finding this school! I am so honored to be able to train with such knowledgeable and kind people! I fully recommend you come join the family if you are interested in learning the Shao-Lin art!"
    },
    {
      name: "Huang B.",
      text: "I've tried many different exercise routines with the result of injury. However, with Shao-Lin, not only can I feel the difference after every class but I also learn some of the most creative martial art techniques in the world and have fun each and every time! One of the best places in Albuquerque to study!"
    },
    {
      name: "Melissa K.",
      text: "My daughter Catalina and I recently joined and love it. We couldn't have found a better facility to learn. Everyone is so generous with their knowledge and patient with us, especially with me and all of my constant questions! Catalina and myself thank everyone and special thanks to Master Abram for pushing us to get our yellow belts while the Elder Master was there, what an amazing experience, Thank You All!"
    },
    {
      name: "Terry C.",
      text: "Had a job in ABQ today and I was actually able to get out early enough to swing in and watch Master Abram teaching the lower belts Flying tiger and nunchaku techniques, ABQ school looks great I should have brought my uniform. Thanks Master Abram!"
    },
    {
      name: "Chantel R.",
      text: "From learning Shao-Lin history to doing things you never knew you could. Watched my husband and our dear friend do it for 2 years now and I can finally speak from personal experience that the benefits are great. Loving it!"
    },
    {
      name: "Lincoln R.",
      text: "I struggle with stress and depression. My time in Master Abram's class at UNM has been so helpful in my daily life. I feel clearer in everything, from my schooling to my religion."
    },
    {
      name: "Kharli B.",
      text: "I never would have thought I'd be waking up on Saturday morning to exercise! Having such fun with amazing training partners, I hardly notice how hard I'm working. It's the highlight of my week!"
    },
    {
      name: "Benjamin C.",
      text: "This is the most authentic martial arts center ever."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Shao-Lin New Mexico</h1>
          <div className="hero-buttons">
            <Link to="/classes" className="hero-button">Classes</Link>
            <Link to="/membership" className="hero-button">Memberships</Link>
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <img className="warrior-image" src="/images/Index/warrior1-min.png" alt="warrior one leaping towards opponent" />
        <h2>Welcome to Shao-Lin New Mexico</h2>
        <p>
          Shao-Lin Kung-Fu is a 1500 year old Chinese martial art developed by the monks in Honan Province
          for health, mental and physical conditioning and self-defense. The system encompasses empty hand,
          the 18 classical weapons, and animal fighting styles. Internal areas include Tai Chi, Pa Kua,
          Hsing-I, Wooden Man and ancient breathing & meditation. The Chinese Shao-Lin Center (CSC) of New
          Mexico serves Albuquerque and the surrounding area, including Rio Rancho, Placitas, Los Lunas,
          Tijeras, Santa Fe, and Taos. Located in Albuquerque, the New Mexico school is part of a network
          of 9 centers that span across the Southwest United States and reach as far as the country of Spain.
          The Chinese Shao-Lin Center of New Mexico has been in Albuquerque for over 25 years! We encourage
          you to spend some time on our site and learn what traditional Martial Arts training in Albuquerque
          is all about. We also invite you to visit our school and observe a class.
        </p>
        <img className="warrior-image" src="/images/Index/warrior2-min.png" alt="warrior two prepares for his opponent's attack" />
      </section>

      <section className="info-section">
        <img className="section-image" src="/images/Index/art1-min.jpg" alt="Shaolin warrior brings his mind to stillness" />
        <h2>Why learn Shao-Lin Kung-Fu?</h2>
        <p>
          We offer training that you cannot find anywhere else in New Mexico! We have the most comprehensive
          martial art from the Orient and Shao-Lin Kung-Fu is considered the origin of all the martial arts.
          True Shao-Lin training is for health and self-defense, not for body destructive gymnastics or
          point-sparring tournaments! At the Chinese Shao-Lin Center, you will train in a non-competitive,
          adult-centered environment. There are no trophies on the walls or other displays of ego.
        </p>
        <p>
          We also offer the most affordable rates for instruction in New Mexico. Training at the Chinese
          Shao-Lin Center of New Mexico is so comprehensive and inexpensive that it can replace having to
          go to a gym, running, swimming, taking self-defense courses, yoga, cross fit, meditation & tai chi,
          cross training, or MMA! You get all of that - and so much more - as low as $60 per month! Check out
          our <Link to="/membership">Membership</Link> page to find the membership right for you!
        </p>
      </section>

      <section className="info-section">
        <img className="section-image" src="/images/Index/art2-min.jpg" alt="Shaolin Warrior steps through form as Chi radiates from her being" />
        <h2>Who is Kung-Fu for?</h2>
        <p>
          Age, gender, or ethnicity is not an issue when training in Shao-Lin. As it was in Shao-Lin Temples
          of Ancient China, our student body is comprised of both male and female students at all levels.
          Students span from age 12 through age 65. People from all walks of life, including teachers,
          actresses, electricians, surgeons, farmers, law enforcement, acupuncturists, small business owners,
          herbalists, students, secret service, counselors, authors, and military personnel have trained at
          CSC Albuquerque. They've also come from many different countries, including Taiwan, Mexico,
          Indonesia, Great Britain, Chile, and Canada. Everyone needs exercise and to get into or stay in
          shape! This ancient Chinese form of fitness is the only proven exercise method to ensure a long,
          healthy life! We have the finest, most complete, most diverse, and most authentic martial arts
          training in New Mexico! Please call and compare our prices, hours available, and curriculum to any
          other martial art school in the state!
        </p>
      </section>

      <section className="explore-section">
        <h2>Explore</h2>
        <div className="explore-grid">
          <Link to="/classes" className="explore-card">
            <h3>Classes</h3>
            <p>Learn more</p>
          </Link>
          <Link to="/schedule" className="explore-card">
            <h3>Schedule</h3>
            <p>Learn more</p>
          </Link>
          <Link to="/about" className="explore-card">
            <h3>About</h3>
            <p>Learn more</p>
          </Link>
        </div>
      </section>

      <section className="testimonials-section">
        <img className="warrior-bottom" src="/images/Index/warrior3-min.png" alt="warrior armed with sword prepares for battle" />
        <h2>Testimonials</h2>
        <div className="testimonial-carousel">
          <button onClick={prevTestimonial} className="carousel-button prev">‹</button>
          <div className="testimonial-content">
            <div className="testimonial-name">{testimonials[currentTestimonial].name}</div>
            <div className="testimonial-rating">★★★★★</div>
            <p className="testimonial-text">{testimonials[currentTestimonial].text}</p>
          </div>
          <button onClick={nextTestimonial} className="carousel-button next">›</button>
        </div>
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
        <img className="warrior-bottom" src="/images/Index/warrior4-min.png" alt="warrior with two swords attacks" />
      </section>
    </div>
  );
}

export default Home;
