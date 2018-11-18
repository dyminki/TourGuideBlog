import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-photo" />
        <div className="about-txt">
          <h1>I'm John Doe</h1>
          <br />
          <p>
            Pellentesque ultrices tempus massa ac tincidunt. Donec tempus turpis
            purus, quis ornare leo pretium id. Mauris iaculis bibendum
            consequat. Donec vel urna vitae mauris hendrerit laoreet. Maecenas
            sed sem elementum tellus sagittis rutrum. Ut varius tempor est, nec
            vestibulum diam blandit quis. Aenean varius velit in consectetur
            vehicula.
            <br />
            <br />
            Pellentesque sed vestibulum lacus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Proin lacinia mollis ipsum. Nulla
            dictum quam purus, et luctus nisi laoreet non. Nullam efficitur
            nulla magna, eu mattis ipsum imperdiet vel.
            <br />
            <br />
            Maecenas nec ipsum vestibulum, blandit libero at, dictum lectus.
            Donec vitae nulla a risus semper tincidunt. Aliquam erat volutpat.
            Vestibulum pharetra porttitor eros nec rutrum. Vestibulum turpis
            dolor, maximus in tempor nec, lobortis a odio. Fusce in nulla vel mi
            fringilla rhoncus non quis nisi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
          </p>
        </div>
      </div>
    );
  }
}
export { About };
