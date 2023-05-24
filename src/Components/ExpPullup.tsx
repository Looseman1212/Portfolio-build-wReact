import "../scss/ExpPullup.scss";

function DrawerContents() {
  return (
    <div className="exp-drawer-contents-container">
      <p>
        In 2022, after self-learning Python and Ruby for months to see if coding
        was right for me, I signed up to a Le Wagon bootcamp. I found it to be a
        great experience, helping me understand fundamental coding concepts like
        Object Oriented Programming and Model View Controller, exposing me to
        programming in a full stack context.
      </p>
      <br />
      <p>
        With JS, HTML, and CSS for the front end, Ruby on Rails as a back end,
        and PostgreSQL for a DB, I worked on my first few full stack projects
        with some friends from the course. We built some simple e-commerce
        ideas, and applied our skills to develop a full stack progressive web
        application called Melbourne Park Finder. I worked heavily on the
        backend managing the API, as well as figuring out how to best
        communicate the data visually on the front end.
      </p>
      <br />
      <p>
        After graduating, I undertook my first solo project called Scrapelist.
        An app for discovering new music, this project taught me about how to
        effectively take in information from the user, how to read documentation
        in more depth, and how to handle error management.
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
