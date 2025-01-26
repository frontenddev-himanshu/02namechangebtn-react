import Card from "./component";

function Mainpage() {
  return (
    <>
      <div className="card-wrap w-full h-120 bg-black flex items-center justify-center gap-15">
        <Card
          cardImg={"https://wallpapercave.com/wp/wp9180586.jpg"}
          cardTitle={"Chhota Bheem"}
          cardDiscription={
            "Bheem is a brave, strong and intelligent young boy. He often manages to solve everyone's problems which endears him to the townspeople of Dholakpur."
          }
        />

        <Card
          cardImg={
            "https://i.pinimg.com/736x/b0/25/15/b0251546d20b9137cf2f262774838155.jpg"
          }
          cardTitle={"Chutki"}
          cardDiscription={
            "Chutki is a young girl and the daughter of Tuntun Mausi, the laddu-maker. Also, she plays the main female role in the series"
          }
        />

        <Card
          cardImg={
            "https://i.pinimg.com/736x/ca/89/b7/ca89b79effca1f02020af518ea260aaa.jpg"
          }
          cardTitle={"Dholu Bholu"}
          cardDiscription={
            "Dholu and Bholu are very sad when they realize that no one in the village neither respects them nor finds them intelligent."
          }
        />

        <Card
          cardImg={
            "https://pbs.twimg.com/profile_images/1268791763537289217/_w-g7SNw_400x400.jpg"
          }
          cardTitle={"Kallia"}
          cardDiscription={
            "Kalia is an envious bully. He is depicted as an ambitious boy who is always outshone by Bheem. He has two fearful lackeys slaves Dholu and Bholu."
          }
        />
      </div>
    </>
  );
}

export default Mainpage;
