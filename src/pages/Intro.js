import ReservationButton from '../components/ReservationButton';

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-text">
        <h1 className="intro-title">
          - Intro -{/* - Kosmetické <br /> studio <br /> Paulinesky - */}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ex, velit assumenda reprehenderit quia nihil!</p>

        <ReservationButton />
      </div>

      <div className="intro-background-image"></div>
    </section>
  );
};

export default Intro;
