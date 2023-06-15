import "./InstractorCards.css";
const InstructorCards = ({ instructor }) => {
  return (
    <div>
      <article className="card">
        <div className="temporary_text">
          <img src={instructor?.image} alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">{instructor?.name}</span>
          <span className="card_subtitle">{instructor?.email}</span>
          <p className="card_description">
            Passionate instructor dedicated to providing high-quality education
            and training in my field. With 1 years of
            experience, I strive to inspire and empower students to reach their
            full potential.
          </p>
        </div>
      </article>
    </div>
  );
};

export default InstructorCards;
