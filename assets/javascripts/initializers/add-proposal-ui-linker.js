import discourseComputed from "discourse-common/utils/decorators";
import showModal from "discourse/lib/show-modal";
import { PLUGIN_API_VERSION,withPluginApi } from "discourse/lib/plugin-api";

function initializeProposalUILinker(api) {
  api.modifyClass("controller:composer", {
    pluginId: "discourse-proposal-ui-linker",
    @discourseComputed(
      "siteSettings.snapshot_enabled"
    )
    canLinkProposal(snapshotEnabled) {
      return true
    },

    actions: {
      showProposalLinker() {
        showModal("proposal-ui-linker").set("toolbarEvent", this.toolbarEvent);
      },
    },
  });

  api.addToolbarPopupMenuOptionsCallback(() => {
    return {
      action: "showProposalLinker",
      icon: "far-eye-slash",
      label: "proposal.ui_linker.title",
      // condition: "canLinkProposal",
    };
  });
}

export default {
  name: "add-proposal-ui-linker",

  initialize() {
    console.log('init')
    withPluginApi(PLUGIN_API_VERSION, initializeProposalUILinker);
  },
};
