import Post from "./Post";
import '../css/main.css';

const Main = () => {
    return (
        <div class="container-main">
            <Post title="Sushi with shoko"
                author="Elad Cohen"
                img="https://peasandcrayons.com/wp-content/uploads/2012/10/homemade-sushi-tutorial-recipe-peas-and-crayons-1250.jpg"
                likes="1500"
                description="Sushi with avocado mashu tov" />
            <Post title="Malawach with Hilbe"
                author="Bug Karta"
                img="https://www.ynet.co.il/PicServer5/2018/08/24/8734177/87341650100294980681no.jpg"
                likes="36952"
                description="Malawach taim retzah" />

        </div>
    )
}

export default Main;