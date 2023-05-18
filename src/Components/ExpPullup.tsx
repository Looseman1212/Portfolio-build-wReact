import "../scss/ExpPullup.scss";

function DrawerContents() {
  return (
    <div className="exp-drawer-contents-container">
      <p>
        After self-learning Python and Ruby for months to see if coding was
        right for me, I signed up to a Le Wagon bootcamp. I found it to be a
        great experience, helping me solidify an understanding of foundational
        coding concepts like Object Oriented Programming, Model View Controller,
        and exposed me to programming in a full stack context.
      </p>
      <br />
      <p>
        With JS, HTML, and CSS for the front end, Ruby on Rails as a back end,
        and PostgreSQL for a DB, I worked on my first few full stack projects.
        With some friends from school, we built some simple e-commerce ideas,
        and applied our skills to develop Melbourne Park Finder. This site used
        a government managed API and parking sensors to deliver a map to the
        user with available and unavailable carpark spaces in the CBD. I worked
        heavily on the backend with the API as well as communicating some of the
        data visually on the front end.
      </p>
      <br />
      <p>
        After this I undertook a personal project called Scrapelist. An app for
        discovering new music, this project taught me about how to effectively
        take in information from the user, learn how to read documentation to
        use an established API effectively, and how to handle error management.
        I used JS, HTML and SCSS for the front end, RoR for back end and
        PostgreSQL as a DB.
      </p>
      <br />
      <p>
        Since then I’ve helped a colleague from my Telco days document and tweak
        some PHP code on a website for their startup ISP company in Newcastle
        NSW. Specifically, we were having some troubles getting the API requests
        being sent to one of their back end services correct. I learned about
        PHP and how it integrates with HTML code. I have also been practicing
        some front end frameworks by building this portfolio for myself!
      </p>
    </div>
  );
}

const ExpPullup = () => {
  return (
    <div className={`ExpPullup-content`}>
      <DrawerContents />
    </div>
  );
};

export default ExpPullup;
