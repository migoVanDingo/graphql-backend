import './Schedule.css';

function Schedule() {
  const weeklySchedule = [
    {
      day: 'Tuesday',
      classes: [
        { time: '5-6pm', curriculum: 'Practice' },
        { time: '6-7pm', curriculum: 'Black/Brown Belts' },
        { time: '7-8pm', curriculum: 'Lower Belts' }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '5-6pm', curriculum: 'Practice' },
        { time: '6-8pm', curriculum: 'Tai Chi/Wooden Man' }
      ]
    },
    {
      day: 'Thursday',
      classes: [
        { time: '5-6pm', curriculum: 'Practice' },
        { time: '6-7pm', curriculum: 'Black/Brown Belts' },
        { time: '7-8pm', curriculum: 'Lower Belts' }
      ]
    },
    {
      day: 'Saturday',
      classes: [
        { time: '10-11am', curriculum: 'Senior Belts' },
        { time: '11-12pm', curriculum: 'Black/Brown Belts' },
        { time: '12-1pm', curriculum: 'Lower Belts' },
        { time: '1-3pm', curriculum: 'Seminar (when scheduled)' }
      ]
    }
  ];

  const fourMonthSchedule = [
    {
      month: 'Current Month',
      brownBelt: {
        primary: 'Advanced Weapons Training',
        secondary: 'Spear & Staff Forms'
      },
      blackBelt: {
        primary: 'Internal Arts',
        secondary: 'Pa Kua & Hsing-I'
      }
    },
    {
      month: 'Next Month',
      brownBelt: {
        primary: 'Animal Styles',
        secondary: 'Tiger & Crane Forms'
      },
      blackBelt: {
        primary: 'Weapons Mastery',
        secondary: 'Double Broadsword'
      }
    },
    {
      month: 'Month 3',
      brownBelt: {
        primary: 'Empty Hand Forms',
        secondary: 'Northern & Southern Fist'
      },
      blackBelt: {
        primary: 'Advanced Tai Chi',
        secondary: 'Chen Style Applications'
      }
    },
    {
      month: 'Month 4',
      brownBelt: {
        primary: 'Sparring Techniques',
        secondary: 'Applications & Drills'
      },
      blackBelt: {
        primary: 'Praying Mantis',
        secondary: 'Advanced Applications'
      }
    }
  ];

  return (
    <div className="schedule-page">
      <section className="schedule-hero">
        <h1>Class Schedule</h1>
        <p className="intro-text">
          At Shaolin New Mexico you can train in authentic Shaolin Kung Fu up to four days a week. Come jump in
          on one of our classes on Tuesday, Wednesday, Thursday or Saturday.
        </p>
      </section>

      <section className="weekly-schedule-section">
        <h2>Weekly Schedule</h2>
        <div className="schedule-grid">
          {weeklySchedule.map((day, index) => (
            <div key={index} className="schedule-day">
              <h3>{day.day}</h3>
              <ul>
                {day.classes.map((classInfo, classIndex) => (
                  <li key={classIndex}>
                    <strong>{classInfo.time}</strong> {classInfo.curriculum}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="four-month-section">
        <h2>4 Month Advanced Material Schedule</h2>

        <div className="current-month-highlight">
          <h3>{fourMonthSchedule[0].month}</h3>
          <div className="belt-schedule-grid">
            <div className="belt-schedule brown-belt">
              <h4>Brown Belt Curriculum</h4>
              <p className="primary">{fourMonthSchedule[0].brownBelt.primary}</p>
              <p className="secondary">{fourMonthSchedule[0].brownBelt.secondary}</p>
            </div>
            <div className="belt-schedule black-belt">
              <h4>Black Belt Curriculum</h4>
              <p className="primary">{fourMonthSchedule[0].blackBelt.primary}</p>
              <p className="secondary">{fourMonthSchedule[0].blackBelt.secondary}</p>
            </div>
          </div>
        </div>

        <div className="upcoming-months">
          {fourMonthSchedule.slice(1).map((monthData, index) => (
            <div key={index} className="month-row">
              <h4 className="month-title">{monthData.month}</h4>
              <div className="month-content">
                <div className="belt-info">
                  <span className="belt-label">Brown Belt:</span>
                  <span>{monthData.brownBelt.primary}</span>
                  <span className="secondary-text">{monthData.brownBelt.secondary}</span>
                </div>
                <div className="belt-info">
                  <span className="belt-label">Black Belt:</span>
                  <span>{monthData.blackBelt.primary}</span>
                  <span className="secondary-text">{monthData.blackBelt.secondary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="seminars-section">
        <h2>Seminars & Events</h2>
        <p className="seminars-intro">
          Check back regularly for upcoming seminars and special events. Seminars are a great way to dive deep
          into specific aspects of Shao-Lin training with focused instruction.
        </p>
        <div className="seminar-placeholder">
          <p>No seminars currently scheduled. Check back soon or contact us for more information.</p>
        </div>
      </section>

      <section className="schedule-info">
        <h2>Ready to Start Training?</h2>
        <p>
          Beginner classes are held 4 times per week and are adult-oriented. Students advance at their own pace.
          There are no contracts to sign and students are accepted at any time.
        </p>
        <p>
          Most people notice a difference in health and fitness levels after just a few weeks of training! You
          are NEVER too old to start this healthy activity!
        </p>
      </section>
    </div>
  );
}

export default Schedule;
