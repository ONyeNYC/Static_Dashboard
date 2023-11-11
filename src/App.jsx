// import "./App.css";
import "./App.scss";
import SideBar from "./SideBar";
import Reviews from "./Reviews";
import AverageRating from "./AverageRating";
import SentimentAnalysis from "./SentimentAnalysis";
import WebsiteVisitors from "./WebsiteVisitors";

function App() {
  return (
    <div className="StaticDashBoard">
      <SideBar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
