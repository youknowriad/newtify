/**
 * External dependencies
 */
import moment from "moment-timezone";
import "moment-timezone/moment-timezone-utils";

/**
 * WordPress dependencies
 */
import { settings as dateSettings } from "@wordpress/date";

// Configure moment globally
moment.locale(dateSettings.l10n.locale);
if (dateSettings.timezone.string) {
  moment.tz.setDefault(dateSettings.timezone.string);
} else {
  const momentTimezone = {
    name: "WP",
    abbrs: ["WP"],
    untils: [null],
    offsets: [-dateSettings.timezone.offset * 60]
  };
  const unpackedTimezone = moment.tz.pack(momentTimezone);
  moment.tz.add(unpackedTimezone);
  moment.tz.setDefault("WP");
}
