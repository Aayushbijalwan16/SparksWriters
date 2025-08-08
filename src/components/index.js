import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Container from "./container/container";
import Logo from "./Logo";
import LogoutButton from "./Header/LogoutButton";
import Button from "./Button";
import RTE from "./RTE";
import Signup from "./Signup";
import  Login from "./Login";
import Input from "../components/Input";
import PostForm from "./post-form/PostForm";
import PostCard from "../components/PostCard"
import Post from "./page/Post";
import AuthLayout from "./AuthLayout";
import Select from "./Select";
import { login } from "../store/authSlice";
import AllPost from "./page/AllPost"
import AddPost from "./page/AddPost";
import EditPost from "./page/EditPost";
import Home from "./page/Home";

export{
    Header,
    Footer,
    Container,
    Logo,
    LogoutButton,
    Button,
    RTE,
    Signup,
    Login,
    PostForm,
    PostCard,
    Post,
    AuthLayout,
    Input,
    Select,
    login,
    AllPost,
    AddPost,
    EditPost,
    Home
}