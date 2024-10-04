import MenuBook from '../../components/menuBook/MenuBook';
import PaperMenu from '../../components/paperMenu/PaperMenu';
import './menu.css';
const Menu = () => {

    return (
        <section id="Menu">
            <div className="container">
                <h5 className="section-head">
                    <span>JAVATIMECAFEE</span><br/>
                    <h1 className='heading'>Table Menu</h1>
                </h5>
                {/* <PaperMenu /> */}
            </div>
            <MenuBook />
        </section>
    )
}

export default Menu;