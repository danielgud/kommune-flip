const Cloud = () => {
  return <img src="/cloud.png" alt="" />;
};

export const Clouds = () => {
  return (
    <div className="animate-cloud" aria-hidden="true">
      <div style={{ maxWidth: "30%", animationDelay: "-1s" }}>
        <Cloud />
      </div>
      <div
        style={{
          animationDelay: "-2s",
          maxWidth: "30%",
          marginLeft: "120px",
          marginTop: "-15px",
          width: "70%",
        }}
      >
        <Cloud />
      </div>
    </div>
  );
};
