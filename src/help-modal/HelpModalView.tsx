import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import template from "../assets/images/template.png";

const HelpModalView = () => {
  useEffect(() => {}, []);

  const closeModal = async () => {
    await miro.board.ui.closeModal();
  };

  return (
    <div className="description-modal-container">
      <div className="description-modal-content">
        <h1>DigDeeper</h1>
        <p>
          DigDeeper lets you use the power of the infinite canvas to gather
          peoples perspective through spatial positioning of sticky notes.
          Participants are able to express theirnp thoughts and ideas on a
          two-axis plane that allows them to use spatial relationships of sticky
          notes. Furthermore, Dig Deeper allows you to visualize and analyze the
          spatial properties of these sticky notes to uncover key insights,
          patterns, and trends.
        </p>
        <h2>How does it work?</h2>
        <p>
          We encourage you simply try it out, there is an option in the
          application.
        </p>
        <p>
          <strong>
            The most important things summed up for people who do not like
            instructions:
          </strong>
        </p>
        <strong>
          <ul>
            <li>
              Each question is represented by a frame and belongs to exactly one
              participant.
            </li>
            <li>
              You can create as many participants and questions as you want.
            </li>
            <li>Each response is represented by a note.</li>
            <li>
              Only sticky notes and their placement on the plane will be
              included in the analysis.
            </li>
          </ul>
        </strong>
        <h3>Input Plane</h3>
        <p>
          Each plane is represented by a frame. The title of the frame
          identifies the participant and the topic of the plane. It must include
          a participant identifier, followed by a colon and the topic
          identifier. The title must be in the format{" "}
          <em>&lt;PersonId&gt;: &lt;QuestionId&gt;</em>
        </p>
        <p>
          You can create a template frame with DigDeeper as well, to make things
          clearer. However, the most basic frame looks like this:
        </p>
        <div className="center-content">
          <img className="image-description" src={template} />
        </div>
        <p>
          It is possible to add other Miro items to the frame, such as
          rectangles, images, etc. to customize the frame and question. These
          items will be ignored and thus not included in the data analysis.{" "}
          <strong>
            BUT, use sticky notes only for peoples responses that you want to
            analyze.
          </strong>
        </p>

        <h2>Instructions</h2>
        <p>
          First you want to decide on the questions you want to ask. Then you
          create a frame for each question and participant.
        </p>
        <p>
          As the questioning begins, you may want to introduce the format to the
          participants. They should only use sticky notes to add an answer to
          the frames question. Then they place the notes on the plane, to
          further express themselves along the two axis.
        </p>
        <p>
          After the questioning of all participants is done, you can start the
          analysis of the notes. You can explore the perspective of participants
          directly in DigDeeper or export the data as a JSON file.
        </p>
        <h2>Motivation</h2>
        <p>
          Traditional brainstorming, problem-solving, collaborating, or
          response-gathering techniques are often limited when truly expressing
          ourselves. In many situations words alone do not have the power to
          accurately describe our perspectives, thoughts, and ideas to others.
          DigDeeper lets you harness the potential of an infinite canvas,
          empowering individuals and teams to express themselves in new
          explorative way. It gives participants the freedom to articulate their
          perspectives using a two-axis plane that challenges conventional
          thinking. This approach encourages participants to express themselves
          by spatial positioning of notes. It helps individuals and groups find
          and visualize ideas, opinions, and perspectives with the infinite
          canvas.
        </p>
        <p>
          DigDeeper offers the ability to visualize and analyze spatial
          relationships on the plane, facilitating a deeper understanding of the
          most important areas. This creates a dynamic and immersive way to
          explore different perspectives and helps you to identify key insights,
          patterns, and trends. You can use DigDeeper to explore and quickly
          pinpoint the most crucial aspects of your discussions, interviews, or
          brainstorming sessions. Furthermore, DigDeeper enables you to export
          the data, to explore it in your favorite tool as well.
        </p>
        <button
          className="button button-primary button-right"
          type="button"
          onClick={closeModal}
        >
          Close Instructions
        </button>
      </div>
      <div className="about-container">
        <h2>About</h2>
        This application was built as part of a master thesis for the study program "Media and Human-Centered Computing" at the TU Wien. 
        <h3>Credits</h3>
        <p>Thanks to the following projects, libraries, and resources:</p>
        <ul>
          <li>Ideas and Inspiration:</li>
          <ul>
            <li><a href="https://gamestorming.com/">Gamestorming</a></li>
          </ul>
          <li>Tools:</li>
          <ul>
          <li><a href="https://developers.miro.com/" target="_blank">Miro Developer Platform</a></li>
          <li><a href="https://d3js.org" target="_blank">D3</a></li></ul>
          <li>Styles, Icons, and Illustrations:</li>
          <ul>
            <li>
              <a href="https://www.mirotone.xyz/" target="_blank">
                Mirotone
              </a>
            </li>
            <li>
            Cooperation, puzzle Icon from  <a
                href="https://icon-icons.com/users/jdQwB54y56M5KbbF8AzQF/icon-sets/"
                target="_blank"
              >
                Posse Studio
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default HelpModalView;

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<HelpModalView />);
}
