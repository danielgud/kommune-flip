const Cloud = () => {
  return <img src="/cloud.png" />;
};

export const Clouds = () => {
  return (
    <div>
      <div style={{ animationDelay: "-1s" }}>
        <Cloud />
      </div>
      {/* <div style={{ animationDelay: "-2s" }}>
        <Cloud />
      </div> */}
    </div>
  );
};
