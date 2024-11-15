import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import BlogPage from "../pages/BlogPage/BlogPage";
import App from "../components/App/App";
import AddPost from "../pages/AddPost/AddPost";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to={"/blog"} />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);

export default router;
