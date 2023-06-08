import './Card.css'
const Card = () => {
    return (
      <div>
        <div className="card">
          <div className="image">
            <img
              src="https://i.ibb.co/tB4vrV3/istockphoto-1312940184-612x612.jpg"
              alt=""
            />
          </div>
          <div className=" pt-14">
            <a href="#">
              <span className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </a>

            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium
            </p>

            <a href="#" className="action">
              Find out more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    );
};

export default Card;