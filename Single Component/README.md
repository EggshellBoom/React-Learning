This Folder consistes of all the good single component app I believe is great for leaning based on personal experience. 
Component is an important concept to understand in React. These three simple app is great at practicing if one just started learning React.
## Table of Contents

- [Timer](#timer)
- [Todo List](#todo-list)
- [Form](#form)


## Timer
[Portal to Timer Demo](https://eggshellboom.github.io/timer/)
#### a simple timer app that satisfies the points below
* UI that shows the current number in the timer.
*	Button that toggles the timer. If the time has not started yet or has been stopped, the text on the button should be "start". Otherwise the text should be "stop".
*	Reset button that resets the number of the time to 0. If one press the reset button while the timer is running, the time should not stop and will start from 0 again.
*	Suppose that one started the timer and stopped it at 3 (second), when one start the timer again without reset, the timer should continue running start from 3.


## Todo List
[Portal to Todo List Demo](https://eggshellboom.github.io/todolist/)
#### a simple todo list app that satisfies the points below
* In the text box, enter a task and hit return to add the task to the list
* Click the checkbox in front of a task to complete it, which reduces the number of remaining tasks by 1 and the task should disappear from the list. (The list should only show incomplete tasks).
* Click the checkbox in front of 'Mark All Done' to complete all, which sets the number of remaining tasks to 0 and remove all tasks from the list
* Click 'Clear Completed Todos' to reset the completed tasks from the list, which means all previously completed tasks are now incomplete and therefore re-appear in the list.



## form
[Portal to form Demo](https://eggshellboom.github.io/form/)
#### a sign up form with controlled component
* Here are the fields:
  * Name – required, a string
  * Email – required, must be a valid email address (*@*.*)
  * Confirm Email – must be the same as Email
  *	Password – must be at least 8 characters and contain at least one number
  *	Dev Skills – must be a number between 1 to 10, optional
  *	Accept Terms – checkbox
* Here are the buttons:
  *	Submit – when clicked, popup an alert with all entered info
  *	Clear – remove all entries
  *	Reset – reset to default values as shown above
  * preventive validation:
  *	‘Required’ field has to have value,
  *	Value type is enforced, i.e. numeric field can’t have characters,
  *	Email and password rules are enforced
  *	Inline error messages

