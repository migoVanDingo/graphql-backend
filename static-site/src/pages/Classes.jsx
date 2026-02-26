import { Link } from 'react-router-dom';
import './Classes.css';

function Classes() {
  const animalStyles = [
    'Praying Mantis',
    'Eagle Claw',
    'Black Tiger',
    'White Crane',
    'Monkey',
    'Snake',
    'Leopard'
  ];

  const emptyHandStyles = [
    'Northern Fist',
    'Southern Fist',
    'Wooden Man',
    'Snake',
    'Springy Leg',
    'Short Fist',
    'Long Fist'
  ];

  const weaponStyles = [
    'Monk\'s Staff',
    'Broadsword',
    'Spear',
    'Kwan Tao',
    'Chain Whip',
    'Straight Sword',
    '2 Sectional Sticks'
  ];

  const internalStyles = [
    'Yang Tai Chi',
    'Chen Tai Chi',
    'Classical Pa Kua',
    '8 Animal Pa kua',
    'Hsing-I Chuan',
    'Snake Style Pa kua',
    'Dragon Style Pa kua'
  ];

  return (
    <div className="classes-page">
      <section className="classes-hero">
        <h1>Classes</h1>
        <img className="hero-warrior" src="/images/Classes/shao2-min.png" alt="Warrior rides into battle on horseback" />
        <p className="intro-text">
          Like the Shao-Lin monks and nuns of Ancient China, we cross-train in a variety of styles and
          conditioning which makes the Shao-Lin system of Kung-Fu the most complete martial art! The amount
          of Kung-Fu, Tai Chi/Chi Kung and Wooden Man (Dummy) training we offer is unrivaled in the state of
          New Mexico.
        </p>
      </section>

      <section className="curriculum-section">
        <h2>Curriculum</h2>
        <p className="section-text">
          At the Chinese Shao-Lin Center, you will see actual spear forms and physical training once performed
          and taught by Chinese Generals one thousand years ago! You will be taught animal styles, like Tiger,
          Eagle Claw, and Praying Mantis, created by Shao-Lin monks from the Ancient Shao-Lin Temples! You will
          hear the incredible stories and legends of Shao-Lin heroes and heroines! You will study the ancient
          breathing and internal health exercises of the most famous physician in Chinese history so that you too
          can live a longer, richer, and healthier life! And you will learn the most devastating and effective
          self-defense techniques and strategies of the ancient Shao-lin Masters!
        </p>

        <h3 className="styles-heading">A brief list of Shao-Lin Styles taught at the CSC Albuquerque</h3>

        <div className="styles-grid">
          <div className="style-category">
            <h4>Animal Styles</h4>
            <ul>
              {animalStyles.map((style, index) => (
                <li key={index}>{style}</li>
              ))}
            </ul>
          </div>

          <div className="style-category">
            <h4>Empty Hand</h4>
            <ul>
              {emptyHandStyles.map((style, index) => (
                <li key={index}>{style}</li>
              ))}
            </ul>
          </div>

          <div className="style-category">
            <h4>Weapon Styles</h4>
            <ul>
              {weaponStyles.map((style, index) => (
                <li key={index}>{style}</li>
              ))}
            </ul>
          </div>

          <div className="style-category">
            <h4>Internal</h4>
            <ul>
              {internalStyles.map((style, index) => (
                <li key={index}>{style}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="class-images">
        <img src="/images/Classes/File2-min.jpg" alt="students practice striking against opponents" />
        <img src="/images/Classes/File10-min.jpg" alt="Ladies of shaolin display advancement certificates" />
      </div>

      <section className="instruction-section">
        <h2>Instruction</h2>
        <p className="section-text">
          When you train at the Chinese Shao-Lin Center, you're studying real Kung-Fu with qualified instructors
          whose goal is to pass on the Shao-Lin knowledge in its entirety! Your instructors at the Albuquerque
          Shao-Lin Center have amassed a fantastic amount of martial arts, chi kung, and techniques that they will
          unselfishly present to you! Therefore, you will receive everything that you need to become an effective
          martial artist, more vibrant, healthier, and to feel younger and stronger than ever! Check out our{' '}
          <Link to="/about">About Us</Link> page to learn more about the instructors at Shao-Lin New Mexico.
        </p>
        <p className="section-text">
          To find some aspect of real Shao-Lin Kung-Fu elsewhere, you would have to travel thousands of miles
          around the world, pay hundreds of thousands of dollars, and employ the services of over a dozen different
          instructors. And even if you found someone teaching real Shao-Lin Kung-Fu, you would only find a fraction
          of the knowledge that the Chinese Shao-Lin Center has to offer!
        </p>
        <p className="section-text">
          When you study at the Chinese Shao-Lin Center in Albuquerque, you are, without a doubt, studying at the
          finest school in New Mexico - and at a price that EVERYONE can afford and will continue to afford
          throughout their lifetime of training! Classes are exciting, challenging, healthy, and fun! Most people
          notice a difference in health and fitness levels after just a few weeks of training! See our{' '}
          <Link to="/schedule">Schedule</Link> page for class hours! You are NEVER too old to start this healthy
          activity!
        </p>
      </section>

      <div className="class-images">
        <img src="/images/Classes/File16-min.jpg" alt="students train with bamboo staff" />
        <img src="/images/Classes/File9-min.jpg" alt="advanced black belts step through pakua form" />
      </div>

      <section className="wooden-man-section">
        <h2>Wooden Man & Iron Monk Training</h2>

        <div className="training-subsection">
          <h3>Wooden Man</h3>
          <p className="section-text">
            The forms and training with the Shao-Lin "Wooden Man" make up an important part of the Kung-Fu skills
            and conditioning found at our Shao-Lin schools. Also called the "Wooden Dummy" and popularized by Wing
            Chun teacher Ip Man, the Shao-Lin "Wooden Man" is the original training and predates Wing Chun by 1000
            years. The "Wooden Man" forms contain many of the fighting techniques and combinations of the Shao-Lin
            system. The advantages of training on the Wooden Man are that it can be hit as hard as the practitioner
            wishes and it can be trained for long hours whereas a partner might get bored. Also, the Wooden Man does
            not move much, thus the practitioner learns mobility while circling around the Wooden Man in conjunction
            with blocking and striking hand & foot techniques.
          </p>
          <h4>Key benefits of training on a "Wooden Man":</h4>
          <ul className="benefits-list">
            <li>Improves Yao Li (power from the waist)</li>
            <li>Teaches the student the correct distance</li>
            <li>Encourages good structure and alignment in techniques</li>
            <li>Conditions the hands, arms and legs</li>
            <li>Helps the student practice applying techniques with force</li>
          </ul>
        </div>

        <div className="training-subsection">
          <h3>Iron Monk Training</h3>
          <p className="section-text">
            Iron Monk training is designed to integrate hard body conditioning into your existing Martial Arts
            training. The Iron Bone Rod and Striking Board have been designed for anyone interested in hard body
            conditioning and strengthening the skeletal structure. You are only as strong as the foundation you
            begin with. The development of Iron Monk training was designed to obtain the ancient Oriental training
            practices that the Chinese had known even before modern science. This training can easily be
            incorporated into any existing Martial Arts program as it can be used to prepare for offensive or
            defensive encounters. Protecting oneself from injury is the reasoning behind hard body conditioning.
            Eventually, even slight bruising will heal almost before it is noticed.
          </p>
          <h4>Benefits of Iron Monk training:</h4>
          <ul className="benefits-list">
            <li>Assists in the increase of bone density</li>
            <li>Slows down or reverses the process of osteoporosis</li>
            <li>Helps prevents future injuries</li>
            <li>Prepares the body for rigorous training and combat and to eventually be able to withstand the kicks
                and blows while not getting bruised</li>
            <li>Equalizes the playing field to all martial artists, giving everyone the opportunity to improve &
                strengthen their offensive and defensive techniques</li>
          </ul>
        </div>
      </section>

      <div className="class-images">
        <img src="/images/Classes/DSC_0143-min.JPG" alt="chinese shaolin center of albuquerque" />
        <img src="/images/Classes/DSC_0573-min.JPG" alt="shaolin center's outdoor training area" />
      </div>

      <section className="facilities-section">
        <h2>Facilities</h2>
        <p className="section-text">
          The Chinese Shao-Lin Center of Albuquerque is a beautiful and traditional stand alone building. Our
          authentic style mural artwork decorates the exterior of the building. Inside, large mirrors and a spacious
          training floor provide the perfect area to sharpen your Kung Fu skills. Track lighting and large windows
          keep our training areas well lit for night and evening classes. For weapons training we use our private,
          outdoor area. Bring a friend or observe a class from our visitor viewing area. We also have two clean,
          spacious bathrooms/changing rooms.
        </p>
        <p className="section-text">
          The Chinese Shao-Lin Center in Albuquerque has a tranquil oriental feel which can be attributed to its
          collection of historical statues, wall scrolls, Chinese lanterns, beautiful indoor fountain and vibrant
          green plants. All of that along with traditional Chinese music creates a beautiful harmonious atmosphere.
        </p>
      </section>

      <div className="class-images">
        <img src="/images/Classes/File5-min.jpg" alt="chinese shaolin center interior" />
        <img src="/images/Classes/File6-min.jpg" alt="shaolin center training space" />
      </div>

      <section className="cta-section">
        <h2>Become a Student at Shao-Lin New Mexico</h2>
        <p>
          For pricing and membership details please visit our Membership page. You can jump there by clicking on
          the link in the header, or by clicking the link below.
        </p>
        <Link to="/membership" className="cta-button">View Memberships</Link>
        <p className="cta-subtext">
          If you would like more information on what it means to be a Shao-Lin student, or if you have any
          questions or concerns, feel free to visit our school and observe a class.
        </p>
      </section>
    </div>
  );
}

export default Classes;
