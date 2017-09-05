import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Dropdown, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

// with great thanks to @carlsednaoui for his work in https://github.com/carlsednaoui/add-to-calendar-buttons

const MS_IN_MINUTES = 60 * 1000;

var formatTime = function(date) {
  return date.toISOString().replace(/-|:|\.\d+/g, "");
};

var calculateEndTime = function(event) {
  return event.end ?
    formatTime(event.end) :
    formatTime(new Date(event.start_datetime.getTime() + (event.duration * MS_IN_MINUTES)));
};

var calendarURLs = {
  google: function (event) {
    var startTime = formatTime(event.start_datetime);
    var endTime = calculateEndTime(event);

    return encodeURI([
      "https://www.google.com/calendar/render",
      "?action=TEMPLATE",
      "&text=" + (event.title || ""),
      "&dates=" + (startTime || ""),
      "/" + (endTime || ""),
      "&details=" + (event.description || ""),
      "&location=" + (event.address || ""),
      "&sprop=&sprop=name:"
    ].join(""));

  },

  yahoo: function (event) {
    var eventDuration = event.end ?
            ((event.end.getTime() - event.start_datetime.getTime()) / MS_IN_MINUTES) :
            event.duration;

    // Yahoo dates are crazy, we need to convert the duration from minutes to hh:mm
    var yahooHourDuration = eventDuration < 600 ?
    "0" + Math.floor((eventDuration / 60)) :
    Math.floor((eventDuration / 60)) + "";

    var yahooMinuteDuration = eventDuration % 60 < 10 ?
    "0" + eventDuration % 60 :
    eventDuration % 60 + "";

    var yahooEventDuration = yahooHourDuration + yahooMinuteDuration;

    // Remove timezone from event time
    var st = formatTime(new Date(event.start_datetime - (event.start_datetime.getTimezoneOffset() *
                    MS_IN_MINUTES))) || "";

    return encodeURI([
      "http://calendar.yahoo.com/?v=60&view=d&type=20",
      "&title=" + (event.title || ""),
      "&st=" + st,
      "&dur=" + (yahooEventDuration || ""),
      "&desc=" + (event.description || ""),
      "&in_loc=" + (event.address || "")
    ].join(""));

  },

  ics: function (event) {
    var startTime = formatTime(event.start_datetime);
    var endTime = calculateEndTime(event);

    return encodeURI(
            "data:text/calendar;charset=utf8," + [
              "BEGIN:VCALENDAR",
              "VERSION:2.0",
              "BEGIN:VEVENT",
              "URL:" + document.URL,
              "DTSTART:" + (startTime || ""),
              "DTEND:" + (endTime || ""),
              "SUMMARY:" + (event.title || ""),
              "DESCRIPTION:" + (event.description || ""),
              "LOCATION:" + (event.address || ""),
              "END:VEVENT",
              "END:VCALENDAR"].join("\n"));

  },

  ical: function (event) {
    return this.ics(event);
  },

  outlook: function (event) {
    return this.ics(event);
  }
};


class AddToCalendar extends Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { event, color } = this.props;

        return (
            <Dropdown isOpen={ this.state.dropdownOpen } toggle={ this.toggle }>
                <a className="fa-stack fa-lg" onClick={ this.toggle }>
                    <i className="fa fa-square fa-stack-2x" style={{ color: color }}></i>
                    <i className="fa fa-calendar fa-stack-1x white-text"></i>
                </a>
                <DropdownMenu className="pp-dropdown-menu-right">
                    <a className="dropdown-item" href={ calendarURLs.google(this.props.event) } target="_blank">Google Calendar</a>
                    <a className="dropdown-item" href={ calendarURLs.yahoo(this.props.event) } target="_blank">Yahoo Calendar</a>
                    <a className="dropdown-item" href={ calendarURLs.ical(this.props.event) } target="_blank">Apple</a>
                    <a className="dropdown-item" href={ calendarURLs.outlook(this.props.event) } target="_blank">Outlook</a>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

AddToCalendar.propTypes = {
    event: React.PropTypes.object,
    color: React.PropTypes.string
};

export default AddToCalendar;