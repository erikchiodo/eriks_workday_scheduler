# eriks_workday_scheduler

## Description

The goal of this project was to use Dom Traversal, Dayjs, and local storage in order to create a daily workday scheduler (from 9am - 5pm). For each time slot, when an event is typed and save button is clicked, the event is saved to local storage, so that when the user re-enters the browser it saves the most recent event saved. Additionally, based on the time of day, Dayjs is used to dynamically differentiate between present, past, and present. Logic compares current time against time block to set past, present, and future class via jquery methods. See screenshots below for more detail

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule:

    > WHEN I open the planner
    > THEN the current day is displayed at the top of the calendar

    > WHEN I scroll down
    > THEN I am presented with time blocks for standard business hours

    > WHEN I view the time blocks for that day
    > THEN each time block is color-coded to indicate whether it is in the past, present, or future

    > WHEN I click into a time block
    > THEN I can enter an event

    > WHEN I click the save button for that time block
    > THEN the text for that event is saved in local storage

    > WHEN I refresh the page
    > THEN the saved events persist

## Screenshots

This is my home page. The events are saved in event storage, are editable and will retain their value each time you access the browser (meets then criteria for saved events persisting upon refreshing page). Also notice how the date is posted above in YYYY-MM-DD Format (meets then criteria for current day being displayd at the top of the calendar). I've created html elements for each hour of the workday (meets then criteria for standard business hours)

![Screen Shot 2023-03-07 at 10 55 59 PM](https://user-images.githubusercontent.com/122952630/223626435-05b4d6ec-0381-4ba6-a5d2-de4bcfba6553.png)

I've also taken a screenshot of the click events for each saved event with accompanying local storage of those events.

![Screen Shot 2023-03-07 at 10 57 10 PM](https://user-images.githubusercontent.com/122952630/223627025-555ed017-ad9f-4026-98c6-f34533e1f3a2.png)

Additionally, please note that for these screenshots, I've set the currentTime var to 12 (corresponding to 12pm) just to show that my logical statements section works properly based on current time. My current time is dynamic and will capture the current time and update time block class.

Link to Github Page: https://github.com/erikchiodo/eriks_workday_scheduler
Link to Deployed App: https://erikchiodo.github.io/eriks_workday_scheduler/
