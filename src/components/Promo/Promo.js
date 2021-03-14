import './Promo.css';
import worldImage from '../../images/worldweb.png';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__text">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__paragraph">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__button">Узнать больше</button>
            </div>
            <img className="promo__image" alt="image" src={worldImage} />
        </section>
    );
};

export default Promo;