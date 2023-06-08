import "./InstractorCards.css";
const InstructorCards = ({ image, name, email }) => {
  return (
    <div>
      <article className="card">
        <div className="temporary_text">
          <img src={image} alt="" />
        </div>
        <div className="card_content">
          <span className="card_title">{name}</span>
          <span className="card_subtitle">{email}</span>
          <p className="card_description">
            Lorem ipsum dolor, sit amet expedita exercitationem recusandae aut
            dolor tempora aperiam itaque possimus at, cupiditate earum, quae
            repudiandae aspernatur? Labore minus soluta consequatur placeat.
          </p>
        </div>
      </article>
    </div>
  );
};

export default InstructorCards;
