import { useState } from 'react';
import './Membership.css';

function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const memberships = [
    {
      duration: '12 Month Membership',
      paymentType: 'Paid In Full',
      price: '$720',
      savings: '$480 over Month-to-Month',
      monthlyRate: '$60/month, 40% off',
      includes: 'Includes Registration Fee and Uniform! $75 value!'
    },
    {
      duration: '6 Month Membership',
      paymentType: 'Paid In Full',
      price: '$450',
      savings: '$150 over Month-to-Month',
      monthlyRate: '$75/month, 25% off',
      includes: 'Includes Registration Fee! $30 value!'
    },
    {
      duration: '3 Month Membership',
      paymentType: 'Paid In Full',
      price: '$255',
      savings: '$45 over Month-to-Month',
      monthlyRate: '$85/month, 15% off',
      includes: null
    },
    {
      duration: 'Month to month',
      paymentType: 'Pay month to month',
      price: '$100',
      savings: null,
      monthlyRate: null,
      includes: null
    }
  ];

  return (
    <div className="membership-page">
      <section className="membership-hero">
        <h1>Memberships</h1>
        <p className="intro-text">
          Whether you are looking to train hard in the art of Shao-Lin Kung-Fu, or you simply want the health
          benefits of Tai Chi, we have a membership for you. Our rates are the most affordable in New Mexico. No
          other place in the state will deliver as much training, instruction or knowledge for such an affordable
          price.
        </p>
      </section>

      <section className="membership-options">
        <h2>Kung-Fu + Tai Chi + Wooden Man Memberships</h2>

        <div className="memberships-grid">
          {memberships.map((membership, index) => (
            <div key={index} className="membership-card">
              <div className="membership-header">
                <h3>{membership.duration}</h3>
                <p className="payment-type">{membership.paymentType}</p>
                {membership.includes && <p className="includes">{membership.includes}</p>}
              </div>
              <div className="membership-body">
                <div className="price">{membership.price}</div>
                {membership.savings && (
                  <p className="savings">
                    That's a savings of <strong>{membership.savings}</strong>!
                  </p>
                )}
                {membership.monthlyRate && <p className="monthly-rate">{membership.monthlyRate}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className="disclaimer">
          <p>**$30 Registration Fee required for all new students. Includes a Shao-Lin Training Manual.</p>
          <p>***Shao-Lin uniform is required after the first month of training.</p>
          <p>****All fees non-refundable.</p>
          <p>*****Chinese Shao-Lin Center of Albuquerque "reserves the right" to terminate any membership, at any time.</p>
        </div>
      </section>

      <section className="observe-class-section">
        <h2>Come Observe a Class!</h2>
        <p>
          Beginner classes are held 4 times per week, are adult-oriented, and students advance at their own pace.
          There are no contracts to sign and students are accepted at any time. You can enroll for less than $60 per
          month with a 1 year membership which includes over 30 hours a month of class time!
        </p>
        <p>
          We have the finest, most complete, most diverse, and most authentic martial training in New Mexico! Please
          call and compare our prices, hours available, and curriculum to any other martial art school in the state!
        </p>
      </section>

      <section className="contact-form-section">
        <h2>Request More Information</h2>
        <p>Fill out the form below and we'll get back to you as soon as possible.</p>

        {formStatus && <div className="form-status">{formStatus}</div>}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Membership;
