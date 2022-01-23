import Controller from "@ember/controller";
import EmberObject, { action } from "@ember/object";
import { gt, or } from "@ember/object/computed";
import { next } from "@ember/runloop";
import discourseComputed, { observes } from "discourse-common/utils/decorators";
import ModalFunctionality from "discourse/mixins/modal-functionality";
import I18n from "I18n";

export const BAR_CHART_TYPE = "bar";
export const REGULAR_POLL_TYPE = "regular";
const ALWAYS_POLL_RESULT = "always";

export default Controller.extend(ModalFunctionality, {

  id: "",
  title: "",
  body: "",
  choices: [],
  start: 0,
  end: 0,
  snapshot: 0,
  state: "",
  author: "",
  created: 0,
  network: "1",
  spaceId: "",
  spaceName: "",
  scores: [],
  scoresTotal: 0,
  pollType: REGULAR_POLL_TYPE,
  pollResult: ALWAYS_POLL_RESULT,
  chartType: BAR_CHART_TYPE,

  onShow() {
    this.setProperties({
        id: "",
        title: "",
        body: "",
        choices: [],
        start: 0,
        end: 0,
        snapshot: 0,
        state: "",
        author: "",
        created: 0,
        network: "1",
        spaceId: "",
        spaceName: "",
        scores: [],
        scoresTotal: 0,
        pollType: REGULAR_POLL_TYPE,
        pollResult: ALWAYS_POLL_RESULT,
        chartType: BAR_CHART_TYPE
    });
  },

  @discourseComputed(
    "id"
  )
  proposalOutput(
    id
  ) {
    let proposalHeader = "[proposal";
    let output = "";

    const match = this.toolbarEvent
      .getText()
      .match(/\[proposal(\s+name=[^\s\]]+)*.*\]/gim);

    if (match) {
      proposalHeader += ` name=proposal${match.length + 1}`;
    }

    proposalHeader += "]";
    output += `${proposalHeader}\n`;

    if (id) {
      output += `# ${id.trim()}\n`;
    }

    output += "[/proposal]\n";
    return output;
  },

  @action
  linkProposal() {
    this.toolbarEvent.addText(this.proposalOutput);
    this.send("closeModal");
  },
});
