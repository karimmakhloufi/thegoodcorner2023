const AdListComponent = () => {
  const ads = [
    {
      id: 0,
      title: "bike to sell",
      price: 100,
      description: "I will sell you my bike for 10 $",
    },
    {
      id: 1,
      title: "car to sell",
      price: 10000,
      description: "I will sell you my car for 10 000 $",
    },
    {
      id: 2,
      title: "chair to sell",
      price: 10,
      description: "I will sell you my chait for 10 $",
    },
    {
      id: 3,
      title: "computer to sell",
      price: 1000,
      description: "I will sell you my computer for 1 000 $",
    },
  ];
  return ads.map((el) => (
    <div key={el.id}>
      <h2>{el.title}</h2>
      <h3>{el.price} $</h3>
      <p>{el.description}</p>
    </div>
  ));
};

export default AdListComponent;
