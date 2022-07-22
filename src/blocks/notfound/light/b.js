import React from "react";
import PropTypes from "prop-types";

function LightNotfoundB(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="404error"
            src="https://cdn-icons.flaticon.com/png/512/3551/premium/3551629.png?token=exp=1658490083~hmac=bfcc1874209083ee667fff1e9f7f6d19"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            OOPS ! <br className="hidden lg:inline-block"></br>
            PAGE NOT FOUND
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button
              className={`inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

LightNotfoundB.defaultProps = {
  theme: "indigo",
};

LightNotfoundB.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightNotfoundB;