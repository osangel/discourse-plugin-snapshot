# frozen_string_literal: true

# name: snapshot
# about: Discourse plugin for snapshot
# version: 0.0.1
# authors: misterplus
# url: https://github.com/misterplus/discourse-plugin-snapshot
# required_version: 2.7.0
# transpile_js: true

register_asset "stylesheets/common/snapshot-ui-builder.scss"
register_asset "stylesheets/desktop/snapshot-ui-builder.scss", :desktop

enabled_site_setting :snapshot_enabled

after_initialize do
end
