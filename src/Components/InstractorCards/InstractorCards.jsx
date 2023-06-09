import "./InstractorCards.css";
const InstructorCards = ({ instructor }) => {
  console.log(instructor);
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
