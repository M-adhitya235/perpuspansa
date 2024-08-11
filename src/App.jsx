import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Books from "./pages/Books";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Register from "./pages/Register";
import Category from "./pages/Category";
import Members from "./pages/Member";
import EditMember from "./pages/EditMember";
import Profilepg from "./pages/ProfilePg";
import InformationPage from "./components/InformationPage";
import BookPage from "./components/BookPage";
import EditProfile from "./pages/EditProfile";
import CategoryPage from "./pages/CategoryPage";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/books" element={<Books />} />
          <Route path="/category-book" element={<Category />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/members" element={<Members />} />
          <Route path="/members/edit/:id" element={<EditMember />} />
          <Route path="/profile" element={<Profilepg />} />
          <Route path="/profile/edit/:id" element={<EditProfile />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/kategori/:category" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;