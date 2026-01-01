import ImageCarousel from "./components/imageCarousel";
import "./styles.css";

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400",
  "https://picsum.photos/id/1020/800/400",
];

export default function App() {
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <ImageCarousel images={images} />
    </div>
  );
}
