import "./DeviceShowcase.css";

const DeviceShowcase = () => {
  return (
    <section className="mockup-section-container">
      <h2 className="mockup-section-title">Omnichannel Presence</h2>
      <h5 className="mockup-section-subtitle">
        Seamless experiences across all devices
      </h5>

      <div className="mockup_scaler">
        <div className="mockup_wrap">
          {/* MacBook Pro */}
          <div className="md-macbook-pro md-glare">
            <div className="md-lid">
              <div className="md-camera"></div>
              <div className="md-screen">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  alt="Desktop View"
                />
              </div>
            </div>
            <div className="md-base"></div>
          </div>

          {/* iPhone 5 (Modernized) */}
          <div className="md-iphone-5 md-white-device md-glare left-mockup">
            <div className="md-body">
              <div className="md-buttons"></div>
              <div className="md-front-camera"></div>
              <div className="md-top-speaker"></div>
              <div className="md-screen">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop"
                  alt="Mobile View"
                />
              </div>
              <div className="md-home-button"></div>
            </div>
          </div>

          {/* iPad */}
          <div className="md-ipad md-white-device md-glare right-mockup">
            <div className="md-body">
              <div className="md-camera"></div>
              <div className="md-screen">
                <img
                  src="https://images.unsplash.com/photo-1544256718-3bcf237f3972?q=80&w=1470&auto=format&fit=crop"
                  alt="Tablet View"
                />
              </div>
              <div className="md-home-button"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
