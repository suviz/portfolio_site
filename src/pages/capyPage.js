import CapybaraGame from "../components/capyGame";

function CapybaraPage() {
  return (

      <div className="capy-page">

        <div className="capy-title">
          <h2>Match the capybara!</h2>
        </div>

        <div className="capy-game">
          <CapybaraGame/>
        </div>
        

      </div>

  );
}

export default CapybaraPage;