const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-4/12 my-8">
      <h3 className="text-4xl uppercase font-raleway text-primary font-bold">{heading}</h3>
      <p className="text-secondary mb-2 font-semibold font-serif">{subHeading} </p>
    </div>
  );
};

export default SectionTitle;
