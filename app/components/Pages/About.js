import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="text-center">
        Another react JS test
      </h2>
      <div className="row">
        <div className="col-xs-12">
          <p>
            A react js test app by <a href="http://www.marccamara.com">Marc C&aacute;mara</a>.
          </p>
          <p>
            Based on egghead.io tutorial, you can find the video tutorials <a href="https://egghead.io/series/build-your-first-react-js-application">following this link</a>.
          </p>
          <p>
            You can see the source code for this example <a href="https://github.com/mcamara/react-test">following this link</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
