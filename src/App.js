import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={111}
          messages={222}
          shares={333}
          name="@Feipe Belmont"
          description="maior goleiro do brasil"
          music="musica epica fim do mundo"
          url = " https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
        likes={444} 
        messages={555} 
        shares={666} 
        name="@Jorge Luiz"
          description="ta doidão mano"
          music="Calp your hand"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
