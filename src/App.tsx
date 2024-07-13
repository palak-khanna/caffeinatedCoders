import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WwwmyntracomByHtmltodesi from "./pages/WwwmyntracomByHtmltodesi";
import ExplorePost from "./pages/ExplorePost";
import PostingPage from "./pages/PostingPage";
import Ethnic from "./pages/Ethnic";
import ExplorePost1 from "./pages/ExplorePost1";
import Profile from "./pages/Profile";
import MensSuitWear from "./pages/MensSuitWear";
import MyntraStudioEDIT from "./pages/MyntraStudioEDIT";
import Explore from "./pages/Explore";
import GalleryPage from "./pages/GalleryPage";
import PostCaption from "./pages/PostCaption";
import YourPostHOMEPAGEEDIT from "./pages/YourPostHOMEPAGEEDIT";
import WomensWearDress from "./pages/WomensWearDress";
import WomensWearTOPS from "./pages/WomensWearTOPS";
import Profile1 from "./pages/Profile1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/explore-post-1":
        title = "";
        metaDescription = "";
        break;
      case "/posting-page":
        title = "";
        metaDescription = "";
        break;
      case "/ethnic":
        title = "";
        metaDescription = "";
        break;
      case "/explore-post-2":
        title = "";
        metaDescription = "";
        break;
      case "/profile1":
        title = "";
        metaDescription = "";
        break;
      case "/mens-suit-wear":
        title = "";
        metaDescription = "";
        break;
      case "/myntra-studio-edit":
        title = "";
        metaDescription = "";
        break;
      case "/explore":
        title = "";
        metaDescription = "";
        break;
      case "/gallery-page":
        title = "";
        metaDescription = "";
        break;
      case "/post-caption":
        title = "";
        metaDescription = "";
        break;
      case "/your-post-home-page-edit":
        title = "";
        metaDescription = "";
        break;
      case "/womens-wear-dress":
        title = "";
        metaDescription = "";
        break;
      case "/womens-wear-tops":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WwwmyntracomByHtmltodesi />} />
      <Route path="/explore-post-1" element={<ExplorePost />} />
      <Route path="/posting-page" element={<PostingPage />} />
      <Route path="/ethnic" element={<Ethnic />} />
      <Route path="/explore-post-2" element={<ExplorePost1 />} />
      <Route path="/profile1" element={<Profile />} />
      <Route path="/mens-suit-wear" element={<MensSuitWear />} />
      <Route path="/myntra-studio-edit" element={<MyntraStudioEDIT />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/gallery-page" element={<GalleryPage />} />
      <Route path="/post-caption" element={<PostCaption />} />
      <Route
        path="/your-post-home-page-edit"
        element={<YourPostHOMEPAGEEDIT />}
      />
      <Route path="/womens-wear-dress" element={<WomensWearDress />} />
      <Route path="/womens-wear-tops" element={<WomensWearTOPS />} />
      <Route path="/profile" element={<Profile1 />} />
    </Routes>
  );
}
export default App;
