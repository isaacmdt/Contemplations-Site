import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <h1>Join Beta</h1>

    <p>
      We are in beta phase and hope to launch in this Novemver. Follow the
      instructions below to join the beta release.
    </p>
    <h3>Step 1: TestFight</h3>
    <p>
      Install{" "}
      <a href="https://itunes.apple.com/us/app/testflight/id899247664?mt=8">
        TestFlight
      </a>{" "}
      on the iOS device that you’ll use for testing.
    </p>
    <h3>Step 2: Download App</h3>
    <p>
      {" "}
      Follow this link on your device{" "}
      <a href="https://itunes.apple.com/us/app/testflight/id899247664?mt=8">
        Contemplations βeta
      </a>.
    </p>

    <h3>Step 3: Give us Feedback</h3>
    <p>
      Let us know of any bugs or feature ideas you would like in the future.
    </p>
  </Layout>
);
