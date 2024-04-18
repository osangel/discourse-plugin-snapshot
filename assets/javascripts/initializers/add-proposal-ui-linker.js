import discourseComputed from "discourse-common/utils/decorators";
import showModal from "discourse/lib/show-modal";
import { PLUGIN_API_VERSION, withPluginApi } from "discourse/lib/plugin-api";

function initializeProposalUILinker(api) {
  api.modifyClass("controller:composer", {
    pluginId: "discourse-proposal-ui-linker",
    @discourseComputed(
      "siteSettings.snapshot_enabled"
    )
    canLinkProposal(snapshotEnabled) {
      return (snapshotEnabled);
    },

    actions: {
      showProposalLinker() {
        showModal("proposal-ui-linker").set("toolbarEvent", this.toolbarEvent);
      },
    },
  });

  api.addComposerToolbarPopupMenuOption(() => {
    return {
      action: "showProposalLinker",
      icon: "chart-bar",
      label: "proposal.ui_linker.title",
      condition: "canLinkProposal",
    };
  });
}

export default {
  name: "add-proposal-ui-linker",

  initialize() {
    withPluginApi(PLUGIN_API_VERSION, initializeProposalUILinker);
  },
};