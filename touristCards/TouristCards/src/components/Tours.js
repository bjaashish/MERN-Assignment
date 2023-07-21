import Card from "./Card";

function Tours({tours, removeTour}) {
  return (
    <div className='container'>
      <div className="title">
        <span className="spanT1"> Plan With </span><span className="spanT">Love</span>
      </div>
      <div className='cards'>
        {
          /* {   ...tour se cloning krte hai }*/
          tours.map((tour) => {
            return (
              <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
            );
          })
        }
      </div>
    </div>
  );
}

export default Tours;
