import "../scss/Projects.scss";

// function showTileDesc(event: MouseEvent) {
//   console.log(event.target);
// }

function Projects() {
  const handleTileClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const clickedElement = e.target as HTMLDivElement;

    const svg = document.querySelector(".svg-box");
    const projectDescriptions = document.querySelectorAll(".project-desc");

    const scrapelistDesc = document.querySelector(".scrapelist-desc");
    const mpfDesc = document.querySelector(".mpf-desc");
    const newtelDesc = document.querySelector(".newtel-desc");
    const miscellaneousDesc = document.querySelector(".miscellaneous-desc");

    svg?.classList.add("hidden");
    projectDescriptions.forEach((item) => {
      item.classList.add("hidden");
    });

    switch (clickedElement.id) {
      case "scrapelist-tile":
        scrapelistDesc?.classList.remove("hidden");
        break;
      case "mpf-tile":
        mpfDesc?.classList.remove("hidden");
        break;
      case "newtel-tile":
        newtelDesc?.classList.remove("hidden");
        break;
      case "miscellaneous-tile":
        miscellaneousDesc?.classList.remove("hidden");
        break;
    }
  };

  const returnSVG = () => {
    const svg = document.querySelector(".svg-box");
    const projectDescriptions = document.querySelectorAll(".project-desc");

    svg?.classList.remove("hidden");
    projectDescriptions.forEach((item) => {
      item.classList.add("hidden");
    });
  };

  const stopPropagation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="projects-container" onClick={returnSVG}>
      <div className="tiles-svg-desc-box">
        <div className="tiles-side">
          <h1>Projects I've worked on:</h1>
          <div className="tiles-box">
            <div
              id="scrapelist-tile"
              className="project-tile"
              onClick={handleTileClick}
            >
              Scrapelist
            </div>
            <div
              id="mpf-tile"
              className="project-tile"
              onClick={handleTileClick}
            >
              Melbourne Park Finder
            </div>
            <div
              id="newtel-tile"
              className="project-tile"
              onClick={handleTileClick}
            ></div>
            <div
              id="miscellaneous-tile"
              className="project-tile"
              onClick={handleTileClick}
            >
              Miscellaneous Projects
            </div>
          </div>
        </div>
        <div className="svg-side">
          <div className="svg-box">
            <svg
              width="500"
              height="333.333"
              viewBox="0 0 300 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Projects SVG">
                <rect width="300" height="200" />
                <g id="monitor-exterior">
                  <g id="monitor-body">
                    <path
                      d="M114 157C119.2 149.4 133.5 148.5 140 149L140.5 142.5L44 136C43.2 136 43 135 43 134.5V128.5L44.5 66.5L46 18C46 16.8 47.3333 16.5 48 16.5L54 16L211 8L259 5.5C260.6 5.5 261 6.5 261 7V9L257.5 123L257 144C257 150.5 256.5 150 256 150.5C255.6 150.9 252.5 150.667 251 150.5L154 143.5L155.132 150.006C163.875 150.421 171.347 152.505 174 153.5C176.667 154.333 182 157.4 182 163C182 168.6 180.667 178 180 182C179.6 188.4 169.167 192 164 193C151.2 195.8 123.333 190.833 111 188C90.9999 181.5 107.5 166.5 114 157Z"
                      fill="black"
                    />
                    <path
                      d="M154 143.5L155 150C163.8 150.4 171.333 152.5 174 153.5C176.667 154.333 182 157.4 182 163C182 168.6 180.667 178 180 182C179.6 188.4 169.167 192 164 193C151.2 195.8 123.333 190.833 111 188C90.9999 181.5 107.5 166.5 114 157C119.2 149.4 133.5 148.5 140 149L140.5 142.5M154 143.5L251 150.5C252.5 150.667 255.6 150.9 256 150.5C256.5 150 257 150.5 257 144L257.5 123L261 9V7C261 6.5 260.6 5.5 259 5.5L211 8L54 16L48 16.5C47.3333 16.5 46 16.8 46 18L44.5 66.5L43 128.5V134.5C43 135 43.2 136 44 136L140.5 142.5M154 143.5L156 155L148 164L139.5 161.5L140.5 142.5M154 143.5L140.5 142.5"
                      stroke="#55554E"
                      stroke-width="0.7"
                    />
                  </g>
                  <path
                    id="stand-highlight"
                    d="M156 155L148 164L147 143L154 143.5L156 155Z"
                    fill="#3D3D3D"
                    stroke="#55554E"
                    stroke-width="0.7"
                  />
                </g>
                <g id="screen-background">
                  <path
                    id="display"
                    d="M257.5 8.5L253.5 141L45.5 128L48 19L257.5 8.5Z"
                    fill="#7CC6FE"
                    stroke="black"
                    stroke-width="0.3"
                  />
                  <g id="display-work-backdrop">
                    <path d="M48 19V21L257.5 11.5V8.5L48 19Z" fill="#103456" />
                    <path
                      d="M59 22C59 21.2 59.6667 21 60 21L78 20.2044L241 13C241.8 13 242 13.6667 242 14L238.5 133C238.1 133.8 237.333 134 237 134L76 125.006L58 124C56.8 124 56.5 123.333 56.5 123C57.3333 89.6667 59 22.8 59 22Z"
                      fill="#103456"
                    />
                    <path
                      d="M78 20.2044L241 13C241.8 13 242 13.6667 242 14L238.5 133C238.1 133.8 237.333 134 237 134L76 125.006M78 20.2044L60 21C59.6667 21 59 21.2 59 22C59 22.8 57.3333 89.6667 56.5 123C56.5 123.333 56.8 124 58 124L76 125.006M78 20.2044L76 125.006M48 21V19L257.5 8.5V11.5L48 21Z"
                      stroke="black"
                      stroke-width="0.3"
                    />
                  </g>
                  <path
                    id="display-sidebar-content"
                    d="M60.5 31L76 30.5M60.5 24L76 23.5M60.5 27.5L75 27M60.5 34.5L75 34"
                    stroke="#1C5E9B"
                    stroke-linecap="round"
                  />
                </g>
                <g id="codeblocks-group">
                  <path
                    id="codeblock1"
                    d="M81 25.4038C81 23.785 82.2843 22.4581 83.9022 22.4054L169.902 19.601C171.597 19.5458 173 20.9042 173 22.5994V35.0485C173 36.6863 171.686 38.0214 170.049 38.0481L84.0489 39.4503C82.3731 39.4776 81 38.1267 81 36.4507V25.4038Z"
                    fill="#1C5E9B"
                  />
                  <path
                    id="codeblock2"
                    d="M81 46.4635C81 44.8283 82.3095 43.4943 83.9445 43.464L131.944 42.5751C133.623 42.544 135 43.896 135 45.5746V56.5736C135 58.2088 133.69 59.5428 132.056 59.573L84.0555 60.4619C82.3772 60.493 81 59.141 81 57.4624V46.4635Z"
                    fill="#1C5E9B"
                  />
                  <path
                    id="codeblock3"
                    d="M81 68.9268C81 67.2988 82.2984 65.9679 83.9259 65.9278L158.926 64.0759C160.611 64.0343 162 65.3891 162 67.075V78.555C162 80.1902 160.69 81.5243 159.056 81.5545L84.0555 82.9434C82.3772 82.9745 81 81.6225 81 79.9439V68.9268Z"
                    fill="#1C5E9B"
                  />
                  <path
                    id="codeblock4"
                    d="M81 89.945C81 88.3098 82.3095 86.9758 83.9445 86.9455L131.944 86.0566C133.623 86.0255 135 87.3775 135 89.0561V100.055C135 101.69 133.69 103.024 132.056 103.055L84.0555 103.943C82.3772 103.975 81 102.623 81 100.944V89.945Z"
                    fill="#1C5E9B"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="project-desc scrapelist-desc hidden">
            Scrapelist is an app I developed with the aim of bridging the gap
            between two popular music platforms, Bandcamp and Spotify. The
            intention of the app was to combine the exposure of unknown artists
            from Bandcamp with the convenience and extensive library of Spotify.
            <br />
            <br />
            Through this project, I gained valuable experience in effective
            UX/UI design, and learnt about what a seamless and intuitive user
            experience is. The tricky part about that was error management and
            handling, and ensuring the app's stability and reliability.
            <br />
            <br />I worked on implementing high-quality data scraping techniques
            to gather and present accurate music information, and integrated
            Spotify's developer API, enabling features that enriched the user
            experience and expanded the app's capabilities.
            <br />
            <br />
            <a
              href="https://scrapelist-web-app.herokuapp.com/"
              target="_blank"
              className="desc-btn"
              onClick={stopPropagation}
            >
              Visit Scrapelist
            </a>
          </div>
          <div className="project-desc mpf-desc hidden">
            As part of a group, I had the opportunity to develop a Progressive
            Web Application (PWA) called Melbourne Park Finder, aimed at helping
            users find available parking spaces in the bustling Melbourne CBD.
            <br />
            <br />
            Within a ten-day timeframe, we created a user-friendly application
            that integrated real-time information on parking availability. To
            achieve this, parking bay sensor data was used from an API managed
            by the City of Melbourne council. By designing the application to be
            responsive and compatible with multiple devices, we ensured that
            users could easily access it from their smartphones, tablets, or
            desktop computers.
            <br />
            <br />
            As part of a newcomer workshop, I had the opportunity to represent
            my group, and present the Melbourne Park Finder application to peers
            and members of the industry, further honing my presentation and
            communication skills.
            <div className="desc-buttons-box">
              <a
                href="https://melbourne-park-finder.herokuapp.com/"
                target="_blank"
                className="desc-btn"
                onClick={stopPropagation}
              >
                Visit Melbourne Park Finder
              </a>
              <a
                href="https://youtu.be/s-Lc72NtpFg?t=1128"
                target="_blank"
                className="desc-btn"
                onClick={stopPropagation}
              >
                Watch the presentation
              </a>
            </div>
          </div>
          <div className="project-desc newtel-desc hidden">
            I helped manage some documentation for NewTel's landing page, NewTel
            is a startup telecommunications business thats growing its network
            in Newcastle Australia.
            <br />
            <br />
            Mostly working in PHP, I was assisting in how the front page would
            be interacting with Ubiquiti's customer management API.
            <br />
            <br />
            <a
              href="https://newtel.com.au/"
              target="_blank"
              className="desc-btn"
              onClick={stopPropagation}
            >
              Vist the NewTel website
            </a>
          </div>
          <div className="project-desc miscellaneous-desc hidden">
            On my Github page is the source code for some of my small scale
            projects that I have been doing to learn more and grow my skillset.
            <br />
            <br />
            Apps include the classics like a calculator, a to-do list, as well
            as source code to other apps like scrapelist, Melbourne Park Finder,
            and even the React project for this webpage you are reading right
            now!
            <br />
            <br />
            <a
              href="https://github.com/Looseman1212?tab=repositories"
              target="_blank"
              className="desc-btn"
              onClick={stopPropagation}
            >
              Visit my Repos here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
