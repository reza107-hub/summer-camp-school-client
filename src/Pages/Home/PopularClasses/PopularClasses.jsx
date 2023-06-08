import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import "./PopularClasses.css";
const PopularClasses = () => {
  return (
    <section className="my-28">
      <SectionTitle
        heading={"Top Classes"}
        subHeading={"Top classes basis on number of students"}
      ></SectionTitle>
      <div className="mt-16 flex flex-col justify-center items-center md:grid md:grid-cols-3 container md:max-w-5xl mx-auto gap-10">
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img
                src="https://blog.activityhero.com/wp-content/uploads/2020/02/90bdc6fd-dcf4-42ea-8bf0-b7a7046905c9.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="content opacity-0 hover:opacity-100">
              <h2 className="heading text-2xl font-bold">Class Name</h2>
              <p className="text-lg">Enrolled Students</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img
                src="https://blog.activityhero.com/wp-content/uploads/2020/02/90bdc6fd-dcf4-42ea-8bf0-b7a7046905c9.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="content opacity-0 hover:opacity-100">
              <h2 className="heading text-2xl font-bold">Class Name</h2>
              <p className="text-lg">Enrolled Students</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img
                src="https://blog.activityhero.com/wp-content/uploads/2020/02/90bdc6fd-dcf4-42ea-8bf0-b7a7046905c9.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="content opacity-0 hover:opacity-100">
              <h2 className="heading text-2xl font-bold">Class Name</h2>
              <p className="text-lg">Enrolled Students</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img
                src="https://blog.activityhero.com/wp-content/uploads/2020/02/90bdc6fd-dcf4-42ea-8bf0-b7a7046905c9.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="content opacity-0 hover:opacity-100">
              <h2 className="heading text-2xl font-bold">Class Name</h2>
              <p className="text-lg">Enrolled Students</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img
                src="https://blog.activityhero.com/wp-content/uploads/2020/02/90bdc6fd-dcf4-42ea-8bf0-b7a7046905c9.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="content opacity-0 hover:opacity-100">
              <h2 className="heading text-2xl font-bold">Class Name</h2>
              <p className="text-lg">Enrolled Students</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <img
                src="https://blog.activityhero.com/wp-content/uploads/2020/02/90bdc6fd-dcf4-42ea-8bf0-b7a7046905c9.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="content opacity-0 hover:opacity-100">
              <h2 className="heading text-2xl font-bold">Class Name</h2>
              <p className="text-lg">Enrolled Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
